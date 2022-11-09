import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useEffect, useState } from "react";
import { noOfLocations, noOfUsers } from "../../services/api";

const Home = () => {
	const [users, setUsers] = useState(0);
	const [locations, setLocations] = useState(0);
	const [bookings, setBookings] = useState(0);
	const [requests, setRequests] = useState(0);

	useEffect(() => {
		noOfUsers()
			.then((res) => setUsers(res.data.size))
			.catch((err) => console.log(err));

    noOfLocations()
			.then((res) => setLocations(res.data.size))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="home">
			<Sidebar />
			<div className="homeContainer">
				<Navbar />
				<div className="widgets">
					<Widget type="user" count={users}/>
					<Widget type="order" count={locations}/>
					<Widget type="earning" count={bookings}/>
					<Widget type="balance" count={requests}/>
				</div>
				<div className="charts">
					<Featured />
					<Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
				</div>
				<div className="listContainer">
					<div className="listTitle">Recent Requests</div>
					<Table />
				</div>
			</div>
		</div>
	);
};

export default Home;
