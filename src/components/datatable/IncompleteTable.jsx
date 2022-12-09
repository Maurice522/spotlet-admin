import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./datatable.scss";
import { getUserData } from "../../services/api";

const IncompleteTable = () => {
	const userColumns = [
		{ field: "id", headerName: "Location ID", width: 250 },
		{
			field: "user",
			headerName: "User",
			width: 230,
			renderCell: (params) => {
				return (
					<div className="cellWithImg">
						<img className="cellImg" src={params.row.img} alt="" />
						{params.row.user}
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
	];

	const [data, setData] = useState([]);
	useEffect(() => {
		var data2 = [];
		axios
			.get("https://spotlet.onrender.com/incomplist")
			.then((response) => {
				const data = response.data;
				console.log(data);
				for (let i = 0; i < data.length; i++) {
					// console.log(data[i]?.property_desc?.user_id);
					getUserData(data[i]?.property_desc?.user_id)
						.then((res) => {
							console.log(res.data);
							const userData = res.data;
							const user = {
								id: data[i].id,
								user: userData.personalInfo.fullName,
								email: userData.personalInfo.email,
								mobile: userData.personalInfo.mobile,
								img: userData.personalInfo.profile_pic,
							};
							data2 = [...data2, user];
							console.log(data2);
						})
						.then(() => {
							setData(data2);
						});
				}
			});
	}, []);

	console.log(data);

	const actionColumn = [
		{
			field: "action",
			headerName: "View",
			width: 300,
			renderCell: (params) => {
				const link = `/locations/${params.row.id}`;
				return (
					<div className="cellAction">
						<Link to={link} style={{ textDecoration: "none" }}>
							<div className="viewButton">View</div>
						</Link>
					</div>
				);
			},
		},
	];
	return (
		<div className="datatable">
			<div className="datatableTitle">Incomplete Listings</div>
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

export default IncompleteTable;
