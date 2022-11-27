import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Location from "../datatable/LocationsTable";

const Locations = () => {
	return (
		<div>
			<div className="list">
				<Sidebar />
				<div className="listContainer">
					<Navbar />
					<Location />
				</div>
			</div>
		</div>
	);
};

export default Locations;
