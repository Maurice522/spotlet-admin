import "./widget.scss";
import { CalendarMonth, ListAlt, LocationOnOutlined, PersonOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Widget = ({ type, count }) => {

	let data;

	switch (type) {
		case "users":
			data = {
				title: "USERS",
				to: "/users",
				link: "See all Users",
				icon: (
					<PersonOutlined
						className="icon"
						style={{
							color: "crimson",
							backgroundColor: "rgba(255, 0, 0, 0.2)",
						}}
					/>
				),
			};
			break;
		case "locations":
			data = {
				title: "LOCATIONS",
				link: "View all Locations",
				to: "/locations",
				icon: (
					<LocationOnOutlined
						className="icon"
						style={{
							backgroundColor: "rgba(218, 165, 32, 0.2)",
							color: "goldenrod",
						}}
					/>
				),
			};
			break;
		case "bookings":
			data = {
				title: "BOOKINGS",
				to: "/",
				link: "View Bookings",
				icon: (
					<CalendarMonth
						className="icon"
						style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
					/>
				),
			};
			break;
		case "requests":
			data = {
				title: "LISTINGS",
				to: "/locreq",
				link: "See Location Requests",
				icon: (
					<ListAlt
						className="icon"
						style={{
							backgroundColor: "rgba(128, 0, 128, 0.2)",
							color: "purple",
						}}
					/>
				),
			};
			break;
		default:
			break;
	}

	return (
		<div className="widget">
			<div className="left">
				<span className="title">{data.title}</span>
				<span className="counter">
					{count.count}
				</span>
				<Link to={data.to}>
					<span className="link">{data.link}</span>
				</Link>
			</div>
		</div>
	);
};

export default Widget;
