import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DeactTable = () => {
	const userColumns = [
		{ field: "id", headerName: "ID", width: 250 },
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
	];
	const deleteUser = (id) => {
		axios
			.delete("https://spotlet.onrender.com/delete/" + id)
			.then(console.log("Delete Successfull"));
	};
	const rejectUser = (id) => {
		axios
			.delete("https://spotlet.onrender.com/rejectdeac/" + id)
			.then(console.log("Rejected Successfull"));
	};
	const [data, setData] = useState([]);
	useEffect(() => {
		var data2 = [];
		axios
			.get("https://spotlet.onrender.com/deletereq")
			.then((response) => {
				const data = response.data;
				for (let i = 0; i < data.length; i++) {
					const user = {
						id: data[i].id,
						email: data[i].CustomerEmail,
						username: data[i].CustomerName,
						mobile: data[i].Mobile,
						img: data[i].CustomerImage,
					};
					data2 = [...data2, user];
				}
			})
			.then(() => {
				setData(data2);
			});
	}, []);

	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 300,
			renderCell: (params) => {
				const link = `/users/${params.row.id}`;
				return (
					<div className="cellAction">
						<Link to={link} style={{ textDecoration: "none" }}>
							<div className="viewButton">View</div>
						</Link>
						<button
							className="deleteButton"
							onClick={() => {
								deleteUser(params.row.id);
								window.location.reload(true);
							}}
						>
							Deactivate
						</button>
						<button
							className="deleteButton"
							onClick={() => {
								rejectUser(params.row.id);
								window.location.reload(true);
							}}
						>
							Reject
						</button>
					</div>
				);
			},
		},
	];

	return (
		<div className="datatable">
			<div className="datatableTitle">Deactivate Account</div>
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

export default DeactTable;
