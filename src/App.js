import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import UserDetails from "./pages/single/UserDetails";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Deactivation from "./components/Sidebar Files/Deactivation";
import Locations from "./components/Sidebar Files/Locations";
import LocationDetails from "./pages/single/LocationDetails";
import Incomplete from "./components/Sidebar Files/Incomplete";
import LocReq from "./components/Sidebar Files/LocaReq";
import Photoshoot from "./components/Sidebar Files/Photoshoot";
import Contactus from "./components/Sidebar Files/Contactus";
import Blogs from "./components/Sidebar Files/Blogs";
import CreateBlog from "./components/Sidebar Files/CreateBlog";
import ContactUsers from "./components/Sidebar Files/ContactUsers";
import Transactions from "./components/Sidebar Files/Transactions";
import AddTransaction from "./components/Sidebar Files/AddTransaction";
import jwtDecode from "jwt-decode";

// const express = require("express");
// const app = express();
// const cors = require("cors");
// app.use(cors());

function App() {
	const { darkMode } = useContext(DarkModeContext);
	const [user, setUser] = useState(null)

	useEffect(() => {
		const LOGIN = async () => {
			const jwt = localStorage.getItem("admin");
			if (jwt) {
				const user_jwt = jwtDecode(jwt);
				setUser(user_jwt);
			}
		};
		LOGIN();
	}, []);

	return (
		<div className={darkMode ? "app dark" : "app"}>
			<BrowserRouter>
				<Routes>
					{
						user ?
							<Route path="/">
								<Route index element={<Home />} />
								<Route path="locreq" element={<LocReq />} />
								<Route path="users/:userid/:locationId" element={<LocationDetails />} />
								<Route path="users">
									<Route index element={<List />} />
									<Route path=":userId" element={<UserDetails />} />
									<Route
										path="new"
										element={<New inputs={userInputs} title="Add New User" />}
									/>
								</Route>
								<Route path="deact">
									<Route index element={<Deactivation />} />
								</Route>
								<Route path="locations">
									<Route index element={<Locations />} />
									<Route path=":locationId" element={<LocationDetails />} />
								</Route>
								<Route path="incomp">
									<Route index element={<Incomplete />} />
								</Route>
								<Route path="transactions">
									<Route index element={<Transactions />} />
								</Route>
								<Route path="contactus">
									<Route index element={<Contactus />} />
								</Route>
								<Route path="photoshoot">
									<Route index element={<Photoshoot />} />
								</Route>
								<Route path="blogs">
									<Route index element={<Blogs />} />
								</Route>
								<Route path="contactusers">
									<Route index element={<ContactUsers />} />
								</Route>
								<Route path="createblog">
									<Route index element={<CreateBlog />} />
								</Route>
								<Route path="addtransaction">
									<Route index element={<AddTransaction />} />
								</Route>
							</Route>
							:
							<Route path="/" element={<Login />} />
					}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
