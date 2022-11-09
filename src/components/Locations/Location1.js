import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Location from "../datatable/Locations";

const Location1 = () => {
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

export default Location1;
