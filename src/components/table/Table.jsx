import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getAllLocations } from "../../services/api";
import { useEffect, useState } from "react";

const List = () => {
	const [locations, setLocations] = useState([]);

	useEffect(() => {
		getAllLocations()
			.then((res) => setLocations(res.data.locations))
			.catch((err) => console.log(err));
	}, []);

	// const locations = [
	// 	{
	// 		id: 1143155,
	// 		product: "Acer Nitro 5",
	// 		img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
	// 		customer: "John Smith",
	// 		date: "1 March",
	// 		amount: 785,
	// 		method: "Cash on Delivery",
	// 		status: "Approved",
	// 	},
	// 	{
	// 		id: 2235235,
	// 		product: "Playstation 5",
	// 		img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
	// 		customer: "Michael Doe",
	// 		date: "1 March",
	// 		amount: 900,
	// 		method: "Online Payment",
	// 		status: "Pending",
	// 	},
	// 	{
	// 		id: 2342353,
	// 		product: "Redragon S101",
	// 		img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
	// 		customer: "John Smith",
	// 		date: "1 March",
	// 		amount: 35,
	// 		method: "Cash on Delivery",
	// 		status: "Pending",
	// 	},
	// 	{
	// 		id: 2357741,
	// 		product: "Razer Blade 15",
	// 		img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
	// 		customer: "Jane Smith",
	// 		date: "1 March",
	// 		amount: 920,
	// 		method: "Online",
	// 		status: "Approved",
	// 	},
	// 	{
	// 		id: 2342355,
	// 		product: "ASUS ROG Strix",
	// 		img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
	// 		customer: "Harold Carol",
	// 		date: "1 March",
	// 		amount: 2000,
	// 		method: "Online",
	// 		status: "Pending",
	// 	},
	// ];
	const getDate = (timestamp) => {
		const date = new Date(timestamp * 1000);
		const yyyy = date.getFullYear();
		let mm = date.getMonth() + 1; // Months start at 0!
		let dd = date.getDate();
		const finalDate = dd + "-" + mm + "-" + yyyy;
		return finalDate;
	};

	return (
		<TableContainer component={Paper} className="table">
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell className="tableCell">Location ID</TableCell>
						<TableCell className="tableCell">Address</TableCell>
						<TableCell className="tableCell">User ID</TableCell>
						<TableCell className="tableCell">Date</TableCell>

						<TableCell className="tableCell">Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{locations.map((location) => (
						<TableRow key={location.location_id}>
							<TableCell className="tableCell">
								{location.location_id}
							</TableCell>
							<TableCell className="tableCell">
								{location.property_address?.address}
							</TableCell>
							<TableCell className="tableCell">
								{location.property_desc.user_id}
							</TableCell>
							<TableCell className="tableCell">
								{getDate(location?.timestamp?._seconds)}
							</TableCell>
							<TableCell className="tableCell">
								{location.verified === "Approved" ? (
									<span className={`status Approved`}>{location.verified}</span>
								) : (
									<span className={`status Pending`}>{location.verified}</span>
								)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default List;
