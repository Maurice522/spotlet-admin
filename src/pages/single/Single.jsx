import "./single.scss";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { GoPrimitiveDot } from "react-icons/go";
import { DataGrid } from "@mui/x-data-grid";

const Single = () => {
	const gridActionButton = (props) => (
		<Link
			to={props.row.to}
			style={{
				textDecoration: "none",
			}}>
			<Button
				variant="outlined"
				sx={{
					padding: "6px 10px",
					border: "1px solid #EA4235",
					color: "black",
					fontWeight: "600",
					borderRadius: "4px",
					marginTop: "10px",
				}}>
				Details
			</Button>
		</Link>
	);

	const gridLocationId = (props) => (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				gap: "5px",
			}}>
			<GoPrimitiveDot color="#EA4235" />
			{props.row.LocationId}
		</div>
	);

	const gridBookingStatus = (props) => {
		let color;
		console.log(props);
		if (props.row.Status === "Under Review") color = "#E8B500";
		else if (props.row.Status === "Approved") color = "#0079D7";
		else if (props.row.Status === "Cancelled") color = "#E20000";
		else if (props.row.Status === "Booked") color = "#19AF00";

		return (
			<div
				style={{
					textAlign: "center",
					color: color,
				}}>
				{props.row.Status}
			</div>
		);
	};

	const BookingsData = [
		{
			id: 1,
			action: gridActionButton,
			to: "/bookingdetails",
			LocationId: "#00000000",
			Status: "Under Review",
			BookedFrom: "12/12/22",
			BookedTo: "12:00 - 23:55, 20hrs",
			Payments: 1000,
			TotalAmount: 50000,
		},
		{
			id: 2,

			action: gridActionButton,
			to: "/bookingdetails",
			LocationId: "#00000000",
			Status: "Approved",
			BookedFrom: "12/12/22",
			BookedTo: "12:00 - 23:55, 20hrs",
			Payments: 1000,
			TotalAmount: 50000,
		},
		{
			id: 3,

			action: gridActionButton,
			to: "/bookingdetails",
			LocationId: "#00000000",
			Status: "Booked",
			BookedFrom: "12/12/22",
			BookedTo: "12:00 - 23:55, 20hrs",
			Payments: 1000,
			TotalAmount: 50000,
		},
		{
			id: 4,

			action: gridActionButton,
			to: "/bookingdetails",
			LocationId: "#00000000",
			Status: "Cancelled",
			BookedFrom: "12/12/22",
			BookedTo: "12:00 - 23:55, 20hrs",
			Payments: 1000,
			TotalAmount: 50000,
		},
		{
			id: 5,

			action: gridActionButton,
			to: "/bookingdetails",
			LocationId: "#00000000",
			Status: "Under Review",
			BookedFrom: "12/12/22",
			BookedTo: "12:00 - 23:55, 20hrs",
			Payments: 1000,
			TotalAmount: 50000,
		},
		{
			id: 6,

			action: gridActionButton,
			to: "/bookingdetails",
			LocationId: "#00000000",
			Status: "Under Review",
			BookedFrom: "12/12/22",
			BookedTo: "12:00 - 23:55, 20hrs",
			Payments: 1000,
			TotalAmount: 50000,
		},
		{
			id: 7,

			action: gridActionButton,
			to: "/bookingdetails",
			LocationId: "#00000000",
			Status: "Under Review",
			BookedFrom: "12/12/22",
			BookedTo: "12:00 - 23:55, 20hrs",
			Payments: 1000,
			TotalAmount: 50000,
		},
		{
			id: 8,

			action: gridActionButton,
			to: "/bookingdetails",
			LocationId: "#00000000",
			Status: "Under Review",
			BookedFrom: "12/12/22",
			BookedTo: "12:00 - 23:55, 20hrs",
			Payments: 1000,
			TotalAmount: 50000,
		},
		{
			id: 9,

			action: gridActionButton,
			to: "/bookingdetails",
			LocationId: "#00000000",
			Status: "Under Review",
			BookedFrom: "12/12/22",
			BookedTo: "12:00 - 23:55, 20hrs",
			Payments: 1000,
			TotalAmount: 50000,
		},
		{
			id: 10,

			action: gridActionButton,
			to: "/bookingdetails",
			LocationId: "#00000000",
			Status: "Under Review",
			BookedFrom: "12/12/22",
			BookedTo: "12:00 - 23:55, 20hrs",
			Payments: 1000,
			TotalAmount: 50000,
		},
		{
			id: 11,

			action: gridActionButton,
			to: "/bookingdetails",
			LocationId: "#00000000",
			Status: "Under Review",
			BookedFrom: "12/12/22",
			BookedTo: "12:00 - 23:55, 20hrs",
			Payments: 1000,
			TotalAmount: 50000,
		},
		{
			id: 12,

			action: gridActionButton,
			to: "/bookingdetails",
			LocationId: "#00000000",
			Status: "Under Review",
			BookedFrom: "12/12/22",
			BookedTo: "12:00 - 23:55, 20hrs",
			Payments: 1000,
			TotalAmount: 50000,
		},
	];

	const BookingsGrid = [
		{
			headerName: "Location ID",
			field: "LocationId",
			renderCell: gridLocationId,
			width: "250",
			headerAlign: "Center",
		},
		{
			headerName: "Booked From",
			field: "BookedFrom",
			width: "230",
			headerAlign: "Center",
		},
		{
			headerName: "Booked To",
			field: "BookedTo",
			width: "230",
			headerAlign: "Center",
		},
		{
			headerName: "Payments",
			field: "Payments",
			width: "230",
			headerAlign: "Center",
		},
		{
			headerName: "Action",
			renderCell: gridActionButton,
			field: "action",
			width: "100",
			headerAlign: "Center",
		},
	];

	const ListingData = [
		{
			action: gridActionButton,
			LocationId: "#00000000",
			Status: "Under Review",
			id: 1,
			to: "/listdetails",
			Bookings: "12 Requests",
		},
		{
			action: gridActionButton,
			LocationId: "#00000000",
			Status: "Approved",
			id: 2,
			to: "/listdetails",
			Bookings: "12 Requests",
		},
		{
			action: gridActionButton,
			LocationId: "#00000000",
			Status: "Cancelled",
			id: 3,
			to: "/listdetails",
			Bookings: "12 Requests",
		},
		{
			action: gridActionButton,
			LocationId: "#00000000",
			Status: "Booked",
			id: 4,
			to: "/listdetails",
			Bookings: "12 Requests",
		},
		{
			action: gridActionButton,
			LocationId: "#00000000",
			Status: "Under Review",
			id: 5,
			to: "/listdetails",
			Bookings: "12 Requests",
		},
		{
			action: gridActionButton,
			LocationId: "#00000000",
			Status: "Under Review",
			id: 6,
			to: "/listdetails",
			Bookings: "12 Requests",
		},
		{
			action: gridActionButton,
			LocationId: "#00000000",
			Status: "Under Review",
			id: 7,
			to: "/listdetails",
			Bookings: "12 Requests",
		},
	];

	const ListingGrid = [
		{
			headerName: "Location ID",
			field: "LocationId",
			renderCell: gridLocationId,
			width: "290",
			headerAlign: "Center",
		},
		{
			headerName: "Status",
			field: "Status",
			renderCell: gridBookingStatus,
			width: "290",
			headerAlign: "Center",
		},
		{
			headerName: "Booking Request",
			field: "Bookings",
			width: "290",
			headerAlign: "Center",
		},
		{
			headerName: "Action",
			renderCell: gridActionButton,
			field: "action",
			width: "200",
			headerAlign: "Center",
		},
	];

	return (
		<div className="single">
			<Sidebar />
			<div className="singleContainer">
				<Navbar />
				<div className="top">
					<div className="left">
						<div className="editButton">Edit</div>
						<h1 className="title"> Personal Information</h1>
						<div className="item">
							<img
								src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
								alt=""
								className="itemImg"
							/>
							<div className="details">
								<h1 className="itemTitle">Jane Doe</h1>
								<div className="detailItem">
									<span className="itemKey">Email:</span>
									<span className="itemValue">janedoe@gmail.com</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Phone:</span>
									<span className="itemValue">+1 2345 67 89</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Address:</span>
									<span className="itemValue">
										Elton St. 234 Garden Yd. NewYork
									</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Country:</span>
									<span className="itemValue">USA</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Joined As:</span>
									<span className="itemValue">Individual</span>
								</div>
							</div>
						</div>
					</div>
					<div className="right">
						<h1 className="title">Saved Payment Information</h1>
						<div className="item">
							<div className="details">
								<div className="detailItem">
									<span className="itemKey">Bank Name:</span>
									<span className="itemValue">lorem ipsum</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">IFSC Code</span>
									<span className="itemValue">ABC123456</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Account No.:</span>
									<span className="itemValue">123456789</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">UPI:</span>
									<span className="itemValue">ABC123</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bottom">
					<div
						style={{
							height: "475px",
						}}>
						<h1
							style={{
								textAlign: "center",
								margin: "30px auto",
							}}>
							Bookings
						</h1>
						<DataGrid rows={BookingsData} columns={BookingsGrid} pageSize={7} />
					</div>

					<div
						style={{
							margin: "120px auto",
							height: "475px",
						}}>
						<h1
							style={{
								textAlign: "center",
								margin: "30px auto",
							}}>
							Listings
						</h1>
						<DataGrid rows={ListingData} columns={ListingGrid} pageSize={7} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Single;
