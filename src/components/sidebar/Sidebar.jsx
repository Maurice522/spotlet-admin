import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import ContactMailSharpIcon from "@mui/icons-material/ContactMailSharp";
import ReceiptLong from "@mui/icons-material/ReceiptLong";
import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="top">
				<Link to="/" style={{ textDecoration: "none" }}>
					<span className="logo">
						<h4>SPOTLET</h4>
					</span>
				</Link>
			</div>
			<hr />
			<div className="center">
				<ul>
					<p className="title">User Management</p>
					<li>
						<Link to="/" style={{ textDecoration: "none" }}>
							<DashboardIcon className="icon" />
							<span>Dashboard</span>
						</Link>
					</li>
					<p className="title">LISTS</p>
					<Link to="/users" style={{ textDecoration: "none" }}>
						<li>
							<PersonOutlineIcon className="icon" />
							<span>Users</span>
						</li>
					</Link>
					<Link to="/deact" style={{ textDecoration: "none" }}>
						<li>
							<DeleteIcon className="icon" />
							<span>Deactivation</span>
						</li>
					</Link>
					<Link to="/contactus" style={{ textDecoration: "none" }}>
						<li>
							<ContactPageIcon className="icon" />
							<span>Contact Us</span>
						</li>
					</Link>

					<Link to="/photoshoot" style={{ textDecoration: "none" }}>
						<li>
							<AddToPhotosIcon className="icon" />
							<span>Photoshoot Req</span>
						</li>
					</Link>

					<p className="title">Location Management</p>
					<Link to="/locations" style={{ textDecoration: "none" }}>
						<li>
							<AddLocationIcon className="icon" />
							<span>Locations</span>
						</li>
					</Link>
					<Link to="/locreq" style={{ textDecoration: "none" }}>
						<li>
							<StoreIcon className="icon" />
							<span>Requests</span>
						</li>
					</Link>
					<Link to="/incomp" style={{ textDecoration: "none" }}>
						<li>
							<EditLocationAltIcon className="icon" />
							<span>Incomplete Listings</span>
						</li>
					</Link>
					<Link to="/transactions" style={{ textDecoration: "none" }}>
						<li>
							<ReceiptLong className="icon" />
							<span>Transactions</span>
						</li>
					</Link>
					<p className="title">Blogs Management</p>
					<Link to="/blogs" style={{ textDecoration: "none" }}>
						<li>
							<EditLocationAltIcon className="icon" />
							<span>Blogs</span>
						</li>
					</Link>

					<p className="title">Contact </p>
					<Link to="/contactusers" style={{ textDecoration: "none" }}>
						<li>
							<ContactMailSharpIcon className="icon" />
							<span>Contact Users</span>
						</li>
					</Link>

					<p className="title">USER</p>
					<li>
						<AccountCircleOutlinedIcon className="icon" />
						<span>Profile</span>
					</li>
					{/* <Link to="/" style={{ textDecoration: "none" }}> */}
					<li
						onClick={() => {
							localStorage.removeItem("admin");
							window.location.reload();
						}}
					>
						<ExitToAppIcon className="icon" />
						<span>Logout</span>
					</li>
					{/* </Link> */}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
