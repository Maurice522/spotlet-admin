import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./locationDetails.css";
import Details from "../../components/Locations/Details";
import Location from "../../components/Locations/Location";
import Amenities from "../../components/Locations/Amenities";
import Photo from "../../components/Locations/Photo";
import Features from "../../components/Locations/Features";
import Dondont from "../../components/Locations/Dodont";
import Pricing from "../../components/Locations/Pricing";
import Rules from "../../components/Locations/Rules";
import Timings from "../../components/Locations/Timing";
import Contact from "../../components/Locations/Contact";
import Gst from "../../components/Locations/Gst";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const ListingPlace = () => {
	const [section, showSection] = useState("Details & Description");
	const handlesection = (e) => {
		showSection(e);
	};

	const menuItems = [
		"Details & Description",
		"Location",
		"Amenities",
		"Photo",
		"Features",
		"Do's & Don'ts",
		"Pricing",
		"Rules of the Host",
		"Timings",
		"Contact Details",
		"GST Details",
	];

	const params = useParams();

	const [data, setData] = useState("");

	useEffect(() => {
		var data2 = [];
		axios.get("http://localhost:8000/listalllocatons").then((response) => {
			const data = response.data;
			console.log("Response", data);
			console.log(params);
			const value = data.locations.filter(
				(item) => item.location_id === params?.locationId
			);
			console.log(value);
			setData(value);
			console.log(data);
		});
	}, []);

	if (data === "") {
		return "";
	} else {
		return (
			<div className="home">
				<Sidebar />
				<div className="homeContainer">
					<Navbar />
					<div className="page">
						<div className="nav">
							{menuItems.map((item, index) => (
								<div
									key={index}
									className={`menu-item ${item === section ? "selected" : ""}`}
									onClick={() => {
										handlesection(item);
									}}
								>
									{item}
								</div>
							))}
						</div>
						<div className="content">
							{section === "Details & Description" ? (
								<Details showSection={handlesection} data={data[0]} />
							) : (
								""
							)}
							{section === "Location" ? (
								<Location showSection={handlesection} data={data[0]} />
							) : (
								""
							)}
							{section === "Amenities" ? (
								<Amenities showSection={handlesection} data={data[0]} />
							) : (
								""
							)}
							{section === "Photo" ? (
								<Photo showSection={handlesection} data={data[0]} />
							) : (
								""
							)}
							{section === "Features" ? (
								<Features showSection={handlesection} data={data[0]} />
							) : (
								""
							)}
							{section === "Do's & Don'ts" ? (
								<Dondont showSection={handlesection} data={data[0]} />
							) : (
								""
							)}
							{section === "Pricing" ? (
								<Pricing showSection={handlesection} data={data[0]} />
							) : (
								""
							)}
							{section === "Rules of the Host" ? (
								<Rules showSection={handlesection} data={data[0]} />
							) : (
								""
							)}
							{section === "Timings" ? (
								<Timings showSection={handlesection} data={data[0]} />
							) : (
								""
							)}
							{section === "Contact Details" ? (
								<Contact showSection={handlesection} data={data[0]} />
							) : (
								""
							)}
							{section === "GST Details" ? (
								<Gst showSection={handlesection} data={data[0]} />
							) : (
								""
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default ListingPlace;
