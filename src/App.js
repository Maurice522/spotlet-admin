import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Deactivation from "./components/Sidebar Files/Deactivation";
import Location1 from "./components/Locations/Location1";
import LocationDetails from "./pages/single/LocationDetails";
import Incomplete from "./components/Sidebar Files/Incomplete";
import LocReq from "./components/Sidebar Files/LocaReq";
import Photoshoot from "./components/Sidebar Files/Photoshoot";
import Contactus from "./components/Sidebar Files/Contactus";
import Messages from "./pages/Messages";

function App() {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div className={darkMode ? "app dark" : "app"}>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="locreq" element={<LocReq />} />
						<Route path="users">
							<Route index element={<List />} />
							<Route path=":userId" element={<Single />} />
							<Route
								path="new"
								element={<New inputs={userInputs} title="Add New User" />}
							/>
						</Route>
						<Route path="deact">
							<Route index element={<Deactivation />} />
						</Route>
						<Route path="locations">
							<Route index element={<Location1 />} />
							<Route path=":locationId" element={<LocationDetails />} />
						</Route>
						<Route path="incomp">
							<Route index element={<Incomplete />} />
						</Route>
						<Route path="contactus">
							<Route index element={<Contactus/>} />
						</Route>
						<Route path="photoshoot">
							<Route index element={<Photoshoot/>} />
						</Route>
						<Route path="allmessages">
							<Route index element={<Messages/>}/>
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
