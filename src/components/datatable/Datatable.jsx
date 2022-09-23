import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Datatable = () => {
	const userColumns = [
		{ field: "id", headerName: "ID", width: 20 },
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
			width: 150,
		},
	];
	const [data, setData] = useState([]);

	useEffect(() => {
		var data2 = [];
		axios
			.get("https://gorecce-backend.herokuapp.com/users")
			.then((response) => {
				const data = response.data;
				for (let i = 0; i < data.length; i++) {
					const user = {
						id:data[i].id,
						email: data[i].personalInfo.email,
						username: data[i].personalInfo.fullName,
						mobile: data[i].personalInfo.mobile,
						img: data[i].personalInfo.profile_pic,
						JoinedAs: data[i].personalInfo.booking_type,
						Address: "",
						Country: "India",
						BankName: "lorem ipsum 1",
						IFSC_Code: "ABC12345",
						AcNo: "123456",
						UPI: "ABC123",
						UserID: data[i].id,
						bookingInfo: data[i].listedLocations,
					};
					data2 = [...data2, user];
				}
			})
			.then(() => {
				setData(data2);
			});
	}, []);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="cellAction">
						<Link to="/users/test" style={{ textDecoration: "none" }}>
							<div className="viewButton">View</div>
						</Link>
					</div>
				);
			},
		},
	];

	return (
		<div className="datatable">
			<div className="datatableTitle">
				Users
				<Link to="/users/new" className="link">
					Add New
				</Link>
			</div>
			<DataGrid
				className="datagrid"
				rows={data}
				columns={userColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}
				checkboxSelection
			/>
		</div>
	);
};

export default Datatable;
