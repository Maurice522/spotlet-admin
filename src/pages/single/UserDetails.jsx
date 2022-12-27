import "./userDetails.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom";
import {
	Button,
	Avatar,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Paper,
} from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import { getUserData } from "../../services/api";

const UserDetails = () => {
	const userId = useLocation().pathname.split("/")[2];
	const [bookingsData, setBookingsData] = useState([]);
	const [listingsData, setListingsData] = useState([]);
	const params = useParams();
	useEffect(() => {
		const fetchData = async () => {
			const res = await getUserData(userId);
			setBookingsData(res.data.portfolio);
			setListingsData(res.data.listedLocations);
		};
		fetchData();
	}, []);

	const getDate = (timestamp) => {
		const date = new Date(timestamp * 1000);
		const yyyy = date.getFullYear();
		let mm = date.getMonth() + 1; // Months start at 0!
		let dd = date.getDate();
		const finalDate = dd + "-" + mm + "-" + yyyy;
		return finalDate;
	};

	const gridActionButton = (props) => (
		<Link
			to={props}
			style={{
				textDecoration: "none",
			}}
		>
			<Button
				variant="outlined"
				sx={{
					padding: "6px 10px",
					border: "1px solid #EA4235",
					color: "black",
					fontWeight: "600",
					borderRadius: "4px",
					marginTop: "10px",
				}}
			>
				Details
			</Button>
		</Link>
	);

	// const gridLocationId = (props) => (
	// 	<div
	// 		style={{
	// 			display: "flex",
	// 			justifyContent: "center",
	// 			alignItems: "center",
	// 			gap: "5px",
	// 		}}
	// 	>
	// 		<GoPrimitiveDot color="#EA4235" />
	// 		{props.row.LocationId}
	// 	</div>
	// );

	const gridBookingStatus = (props) => {
		let color;
		if (props === "Under Review") color = "#E8B500";
		else if (props === "Approved") color = "#0079D7";
		else if (props === "Cancelled") color = "#E20000";
		else if (props === "Booked") color = "#19AF00";

		return (
			<div
				style={{
					textAlign: "center",
					color: color,
				}}
			>
				{props}
			</div>
		);
	};

	const [value, setValue] = useState({});

	useEffect(() => {
		axios.get("http://localhost:7000/users").then((response) => {
			const data = response.data;
			const result = data.filter((item) => item.id === params.userId);
			const user = {
				email: result[0].personalInfo.email,
				userName: result[0].personalInfo.fullName,
				mobile: result[0].personalInfo.mobile,
				image: result[0].personalInfo.profile_pic,
				joinedAs: result[0].personalInfo.booking_type,
				address: "",
				country: "India",
				bankName: "lorem ipsum 1",
				IFSC_Code: "ABC12345",
				AcNo: "123456",
				UPI: "ABC123",
				UserID: result[0].id,
				bookingInfo: result[0].listedLocations,
			};

			setValue(user);
		});
	}, []);

	return (
		<div className="user">
			<Sidebar />
			<div className="userContainer">
				<Navbar />
				<div className="top">
					<div className="left">
						{/* <div className="editButton">Edit</div> */}
						<h1 className="title"> Personal Information</h1>
						<div className="item">
							{value.image === "" ? (
								<Avatar
									sx={{
										width: "100px",
										height: "100px",
										borderRadius: "50%",
									}}
								/>
							) : (
								<img src={value.image} alt="" className="itemImg" />
							)}
							<div className="details">
								<h1 className="itemTitle">{value.userName}</h1>
								<div className="detailItem">
									<span className="itemKey">Email:</span>
									<span className="itemValue">{value.email}</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Phone:</span>
									<span className="itemValue">{value.mobile}</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Address:</span>
									<span className="itemValue">{value.address}</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Country:</span>
									<span className="itemValue">{value.country}</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Joined As:</span>
									<span className="itemValue">{value.joinedAs}</span>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="right">
						<h1 className="title">Saved Payment Information</h1>
						<div className="item">
							<div className="details">
								<div className="detailItem">
									<span className="itemKey">Bank Name:</span>
									<span className="itemValue">{value.bankName}</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">IFSC Code</span>
									<span className="itemValue">{value.IFSC_Code}</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Account No.:</span>
									<span className="itemValue">{value.AcNo}</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">UPI:</span>
									<span className="itemValue">{value.UPI}</span>
								</div>
							</div>
						</div>
					</div> */}
				</div>
				<div className="bottom">
					<div
						style={{
							height: "fit-content",
						}}
					>
						<h1
							style={{
								textAlign: "center",
								margin: "30px auto",
							}}
						>
							Bookings
						</h1>
						<TableContainer component={Paper} className="table">
							<Table sx={{ minWidth: 650 }} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell className="tableCell">Booking ID</TableCell>
										<TableCell className="tableCell">Location ID</TableCell>
										<TableCell className="tableCell">Date</TableCell>
										<TableCell className="tableCell">Status</TableCell>

										{/* <TableCell className="tableCell">Action</TableCell> */}
									</TableRow>
								</TableHead>
								<TableBody>
									{bookingsData.map((booking) => (
										<TableRow key={booking.bookingId}>
											{console.log(booking)}
											<TableCell className="tableCell">
												{booking.bookingId}
											</TableCell>
											<TableCell className="tableCell">
												{booking.property_id}
											</TableCell>
											<TableCell className="tableCell">
												{booking.date}
											</TableCell>
											<TableCell className="tableCell">
												{booking.status}
											</TableCell>
											{/* <TableCell className="tableCell">
												{gridActionButton(booking.bookingId)}
											</TableCell> */}
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>

					<div
						style={{
							margin: "120px auto",
							height: "fit-content",
						}}
					>
						<h1
							style={{
								textAlign: "center",
								margin: "30px auto",
							}}
						>
							Listings
						</h1>
						<TableContainer component={Paper} className="table">
							<Table sx={{ minWidth: 650 }} aria-label="simple table">
								<TableHead>
									<TableRow>
										<TableCell className="tableCell">Location</TableCell>
										<TableCell className="tableCell">Location ID</TableCell>
										<TableCell className="tableCell">Date</TableCell>
										<TableCell className="tableCell">Status</TableCell>

										<TableCell className="tableCell">Action</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{listingsData.map((location) => (
										<TableRow key={location.location_id}>
											<TableCell className="tableCell">
												{location.property_address?.address}
											</TableCell>
											<TableCell className="tableCell">
												{location.location_id}
											</TableCell>
											<TableCell className="tableCell">
												{getDate(location.timestamp?._seconds)}
											</TableCell>
											<TableCell className="tableCell">
												{gridBookingStatus(location.verified)}
											</TableCell>
											<TableCell className="tableCell">
												{gridActionButton(location.location_id)}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>{" "}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDetails;
