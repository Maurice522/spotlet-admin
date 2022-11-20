import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./datatable.scss";

const LocReq = () => {
	const approveUser = (id, userid) => {
		// console.log(userid);
		axios
			.put("https://nipunbacky.herokuapp.com/approveloc/" + id, {
				userid: userid,
			})
			.then(console.log("Approve Location"));
	};
	const userColumns = [
		{ field: "id", headerName: "ID", width: 150 },
		{
			field: "user",
			headerName: "User",
			width: 230,
			renderCell: (params) => {
				return (
					<div className="cellWithImg">
						<img className="cellImg" src={params.row.img} alt="" />
						{params.row.username}
					</div>
				);
			},
		},
		{
			field: "email",
			headerName: "Email",
			width: 230,
		},
		{
			field: "mobile",
			headerName: "Phone Number",
			width: 200,
		},
		{
			field: "date",
			headerName: "Date",
			width: 200,
		},
	];

	const [data, setData] = useState([]);
	useEffect(() => {
		var data2 = [];
		axios
			.get("https://nipunbacky.herokuapp.com/locreqs")
			.then((response) => {
				const data = response.data;
				for (let i = 0; i < data.locations.length; i++) {
					const date = new Date(data.locations[i]?.timestamp?._seconds * 1000);
					const yyyy = date.getFullYear();
					let mm = date.getMonth() + 1; // Months start at 0!
					let dd = date.getDate();

					if (dd && dd < 10) dd = "0" + dd;
					if (mm && mm < 10) mm = "0" + mm;

					const formattedToday = dd + "/" + mm + "/" + yyyy;
					const user = {
						userid: data.locations[i].property_desc?.user_id,
						id: data.locations[i].location_id,
						email: data.locations[i].contact_det.email,
						username: data.locations[i].contact_det.name,
						mobile: data.locations[i].contact_det.mobile_num,
						date: formattedToday,
						img: data.locations[i].contact_det.img,
					};
					data2 = [...data2, user];
				}
			})
			.then(() => {
				setData(data2);
			});
	}, [data]);

	const actionColumn = [
		{
			field: "action",
			headerName: "View",
			width: 250,
			renderCell: (params) => {
				const link = `/locations/${params.id}`;
				// console.log(link);
				return (
					<div className="cellAction">
						<Link to={link} style={{ textDecoration: "none" }}>
							<div className="viewButton">View</div>
						</Link>
						<div
							className="viewButton"
							onClick={() => approveUser(params.row.id, params.row.userid)}
						>
							Approve
						</div>
						<div className="deleteButton">Incomplete</div>
					</div>
				);
			},
		},
	];
	return (
		<div className="datatable">
			<div className="datatableTitle">Requests</div>
			<DataGrid
				className="datagrid"
				rows={data}
				columns={userColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}
			/>
		</div>
	);
};

export default LocReq;
