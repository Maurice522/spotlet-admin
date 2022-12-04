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
import { getTempLocation } from "../../services/api";
import Bank from "../../components/Locations/Bank";

const ListingPlace = () => {
	const [section, showSection] = useState("Details & Description");
	const handlesection = (e) => {
		showSection(e);
	};

	const menuItems = [
		"Details & Description",
		"Location",
		"Contact Details",
		"Bank Details",
		"Amenities",
		"Photo",
		"Features",
		"Do's & Don'ts",
		"Pricing",
		"Rules of the Host",
		"Timings",
		"GST Details",
	];

	const params = useParams();

	const [data, setData] = useState("");
	const [tempData, setTempData] = useState("");

	const fetchData = () => {
		axios
			.get("http://localhost:8000/listalllocatons")
			.then((response) => {
				const data = response.data;
				// console.log("Response", data);
				// console.log(params);
				const loc = data.locations.filter(
					(item) => item.location_id === params?.locationId
				);
				// console.log(loc[0]);
				setData(loc[0]);
			})
			.then(
				data?.length === 0 &&
					getTempLocation(params?.locationId).then((res) => {
						const data = res.data;
						console.log("Response", data);
						setTempData(data);
					})
			);
	};

	useEffect(() => {
		fetchData();
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
								<Details
									showSection={handlesection}
									fetchData={fetchData}
									data={data ? data : tempData}
								/>
							) : (
								""
							)}
							{section === "Location" ? (
								<Location
									showSection={handlesection}
									fetchData={fetchData}
									data={data ? data : tempData}
								/>
							) : (
								""
							)}
							{section === "Contact Details" ? (
								<Contact
									showSection={handlesection}
									fetchData={fetchData}
									data={data ? data : tempData}
								/>
							) : (
								""
							)}
							{section === "Bank Details" ? (
								<Bank
									showSection={handlesection}
									fetchData={fetchData}
									data={data ? data : tempData}
								/>
							) : (
								""
							)}
							{section === "Amenities" ? (
								<Amenities
									showSection={handlesection}
									fetchData={fetchData}
									data={data ? data : tempData}
								/>
							) : (
								""
							)}
							{section === "Photo" ? (
								<Photo
									showSection={handlesection}
									fetchData={fetchData}
									data={data ? data : tempData}
								/>
							) : (
								""
							)}
							{section === "Features" ? (
								<Features
									showSection={handlesection}
									fetchData={fetchData}
									data={data ? data : tempData}
								/>
							) : (
								""
							)}
							{section === "Do's & Don'ts" ? (
								<Dondont
									showSection={handlesection}
									fetchData={fetchData}
									data={data ? data : tempData}
								/>
							) : (
								""
							)}
							{section === "Pricing" ? (
								<Pricing
									showSection={handlesection}
									fetchData={fetchData}
									data={data ? data : tempData}
								/>
							) : (
								""
							)}
							{section === "Rules of the Host" ? (
								<Rules
									showSection={handlesection}
									fetchData={fetchData}
									data={data ? data : tempData}
								/>
							) : (
								""
							)}
							{section === "Timings" ? (
								<Timings
									showSection={handlesection}
									fetchData={fetchData}
									data={data ? data : tempData}
								/>
							) : (
								""
							)}

							{section === "GST Details" ? (
								<Gst
									showSection={handlesection}
									fetchData={fetchData}
									data={data ? data : tempData}
								/>
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
