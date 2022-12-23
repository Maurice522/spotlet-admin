import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import axios from "axios";

const ContactTable = () => {
	const userColumns = [
		{ field: "id", headerName: "ID", width: 220 },
		{
			field: "user",
			headerName: "User",
			width: 200,
			renderCell: (params) => {
				return <div className="cellWithImg">{params.row.username}</div>;
			},
		},
		{
			field: "email",
			headerName: "Email",
			width: 200,
		},
		{
			field: "mobile",
			headerName: "Phone Number",
			width: 150,
		},
		{
			field: "date",
			headerName: "Date",
			width: 150,
		},
		{
			field: "message",
			headerName: "Message",
			width: 330,
		},
	];
	const [data, setData] = useState([]);

	useEffect(() => {
		var data2 = [];
		axios
			.get("http://localhost:8000/getContact")
			.then((response) => {
				const data = response.data;
				console.log(data);
				for (let i = 0; i < data.length; i++) {

					const date = new Date(data[i].timestamp?._seconds * 1000);
					const yyyy = date.getFullYear();
					let mm = date.getMonth() + 1; // Months start at 0!
					let dd = date.getDate();

					if (dd && dd < 10) dd = "0" + dd;
					if (mm && mm < 10) mm = "0" + mm;

					const formattedToday = dd + "/" + mm + "/" + yyyy

					const user = {
						id: data[i].id,
						email: data[i].email,
						username: data[i].fullName,
						mobile: data[i].mobile,
						message: data[i].message,
						date : formattedToday
					};
					data2 = [...data2, user];
				}
			})
			.then(() => {
				setData(data2);
			});
	}, []);
	return (
		<div className="datatable">
			<div className="datatableTitle">
				Contacted Users
				{/* <Link to="/users/new" className="link">
					Add New
				</Link> */}
			</div>
			<DataGrid
				className="datagrid"
				rows={data}
				columns={userColumns}
				pageSize={9}
				rowsPerPageOptions={[9]}
			/>
		</div>
	);
};

export default ContactTable;
