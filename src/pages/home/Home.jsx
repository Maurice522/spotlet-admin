import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import LocReq from "../../components/datatable/LocReqTable"
import { useEffect, useState } from "react";
import {
	noOfBookings,
	noOfLocations,
	noOfRequests,
	noOfUsers,
} from "../../services/api";

const Home = () => {
	const [users, setUsers] = useState({});
	const [locations, setLocations] = useState({});
	const [bookings, setBookings] = useState({});
	const [requests, setRequests] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const usersRes = await noOfUsers();
				setUsers(usersRes.data);
				const locationsRes = await noOfLocations();
				setLocations(locationsRes.data);
				const bookingsRes = await noOfBookings();
				setBookings(bookingsRes.data);
				const requestsRes = await noOfRequests();
				setRequests(requestsRes.data);
			} catch (error) {
				console.log(error.message);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="home">
			<Sidebar />
			<div className="homeContainer">
				<Navbar />
				<div className="widgets">
					<Widget type="users" count={users} />
					<Widget type="locations" count={locations} />
					<Widget type="bookings" count={bookings} />
					<Widget type="requests" count={requests} />
				</div>
				<div className="charts">
					<Featured />
					<Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
				</div>
				<div className="listContainer">
					<div className="listTitle">Recent Requests</div>
					<LocReq />
				</div>
			</div>
		</div>
	);
};

export default Home;
