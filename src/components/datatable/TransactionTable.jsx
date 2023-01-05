import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const TransactionTable = () => {
	const userColumns = [
		{
			field: "id",
			headerName: "Booking ID",
			width: 200,
		},
		{
			field: "bookingDate",
			headerName: "Booking Date",
			width: 150,
		},
		{
			field: "amount",
			headerName: "Amount",
			width: 150,
		},
		{
			field: "locId",
			headerName: "Location ID",
			width: 150,
		},
		{
			field: "hostName",
			headerName: "Host Name",
			width: 150,
		},
		{
			field: "bookingName",
			headerName: "Booking Name",
			width: 150,
		},
		{
			field: "date",
			headerName: "Date",
			width: 150,
		},
		{
			field: "status",
			headerName: "Status",
			width: 150,
		},
	];
	const [data, setData] = useState([]);

	useEffect(() => {
		var data2 = [];
		axios
			.get(`${process.env.REACT_APP_API_URL}/gettransactions`)
			.then((response) => {
				const data = response.data;
				console.log(data)

				for (let i = 0; i < data.length; i++) {
					console.log(data[i]?.portfolio);
					const user = {
						id: data[i]?._id,
						bookingDate: data[i]?.bookingdate,
						amount: data[i]?.amount,
						locId: data[i]?.locationid,
						hostName: data[i]?.hostname,
						bookingName: data[i]?.bookingname,
						date: data[i]?.date,
						status: data[i]?.status,
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
				Transactions
				<Link to="/addtransaction" className="link">
					Add Transaction
				</Link>
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

export default TransactionTable;
