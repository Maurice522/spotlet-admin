import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./datatable.scss";

const LocationsTable = () => {
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
			.get("http://localhost:7000/getlocations")
			.then((response) => {
				const data = response.data;
				console.log("Location Data", data);
				for (let i = 0; i < data?.length; i++) {
					const date = new Date(data[i]?.createdAt);
					const yyyy = date.getFullYear();
					let mm = date.getMonth() + 1; // Months start at 0!
					let dd = date.getDate();

					if (dd && dd < 10) dd = "0" + dd;
					if (mm && mm < 10) mm = "0" + mm;

					const formattedToday = dd + "/" + mm + "/" + yyyy;
					const user = {
						id: data[i].location_id,
						email: data[i].contact_det.email,
						username: data[i].contact_det.contact_name,
						mobile: data[i].contact_det.mobile_num,
						date: formattedToday,
						img: data[i].contact_det.img,
					};
					data2 = [...data2, user];
				}
				setData(data2);
			});
	}, []);

	const actionColumn = [
		{
			field: "action",
			headerName: "View",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						<Link
							to={`/locations/${params.id}`}
							style={{ textDecoration: "none" }}
						>
							<div className="viewButton">View</div>
						</Link>
					</div>
				);
			},
		},
	];
	return (
		<div className="datatable">
			<div className="datatableTitle">Locations</div>
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

export default LocationsTable;
