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
		// .get(`${process.env.REACT_APP_API_URL}/listalllocatons`)
		axios
			.get(`/listalllocatons`)
			.then((response) => {
				const data = response.data;
				// console.log("Response", data);
				// console.log(params);
				console.log(data)
				const loc = data?.filter(
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
	// var tempdata = {
	// 	"_id": "63c4ff46bb79afb4ac658171",
	// 	"location_id": "nipu96027",
	// 	"amenities": [
	// 		"Balcony",
	// 		"All utilities included",
	// 		"Wifi",
	// 		"TV Included",
	// 		"Wine Cellar"
	// 	],
	// 	"bankDetails": {
	// 		"account_holder_name": "nipun",
	// 		"bank_name": "sbi",
	// 		"ifsc_code": "SBI12345678",
	// 		"account_number": "12345678901"
	// 	},
	// 	"bookedDates": [],
	// 	"contact_det": {
	// 		"contact_name": "NI",
	// 		"designation": "no",
	// 		"mobile_num": "7894561230",
	// 		"email": "saketmundra2707@gmail.com",
	// 		"alt_name": "",
	// 		"alt_mobile": "",
	// 		"pan_no": "1234567890",
	// 		"aadhar_no": "123456789012",
	// 		"img": ""
	// 	},
	// 	"do_and_dont": {
	// 		"do_s": [
	// 			"Do advise us of any change in your personal circumstances. We can try and help",
	// 			"Ask if you are not sure of anything.",
	// 			"good"
	// 		],
	// 		"dont_s": [
	// 			"Dont Be rude or aggressive or rude towards any member of the Cooke & Co staff as this will not be tolerated.",
	// 			"Dont Damage the landlords property in any way.",
	// 			"bad"
	// 		]
	// 	},
	// 	"features": [
	// 		"Architectural details, such as crown moldings, chair rails, etc.",
	// 		"Alarm system",
	// 		"Terrace Garden",
	// 		"Fireplace"
	// 	],
	// 	"gst": {
	// 		"doc_no": "45644546",
	// 		"docs": [
	// 			{
	// 				"file": "https://spotlet-files.s3.ap-south-1.amazonaws.com/location/gst/Spotlet%20V2%20Proposal.pdf"
	// 			}
	// 		]
	// 	},
	// 	"imagesData": [
	// 		{
	// 			"image": "https://spotlet-files.s3.amazonaws.com/location/images/1673854206349datingscout-JTUmzXLoqHQ-unsplash.jpg",
	// 			"fileName": "datingscout-JTUmzXLoqHQ-unsplash.jpg"
	// 		},
	// 		{
	// 			"image": "https://spotlet-files.s3.ap-south-1.amazonaws.com/location/images/1673854206873edvin-johansson-rlwE8f8anOc-unsplash%20%281%29.jpg",
	// 			"fileName": "edvin-johansson-rlwE8f8anOc-unsplash (1).jpg"
	// 		},
	// 		{
	// 			"image": "https://spotlet-files.s3.ap-south-1.amazonaws.com/location/images/1673854207138paolo-nicolello-2gOxKj594nM-unsplash.jpg",
	// 			"fileName": "paolo-nicolello-2gOxKj594nM-unsplash.jpg"
	// 		},
	// 		{
	// 			"image": "https://spotlet-files.s3.ap-south-1.amazonaws.com/location/images/1673854207351sasha-kaunas-xEaAoizNFV8-unsplash.jpg",
	// 			"fileName": "sasha-kaunas-xEaAoizNFV8-unsplash.jpg"
	// 		},
	// 		{
	// 			"image": "https://spotlet-files.s3.ap-south-1.amazonaws.com/location/images/1673854207560yuliya-pankevich-oyxsG2Lh_uA-unsplash.jpg",
	// 			"fileName": "yuliya-pankevich-oyxsG2Lh_uA-unsplash.jpg"
	// 		},
	// 		{
	// 			"image": "https://spotlet-files.s3.ap-south-1.amazonaws.com/location/images/1673854207721edvin-johansson-rlwE8f8anOc-unsplash.jpg",
	// 			"fileName": "edvin-johansson-rlwE8f8anOc-unsplash.jpg"
	// 		}
	// 	],
	// 	"pricing": {
	// 		"cleaningFee": "600",
	// 		"film_webseries_ad": {
	// 			"type": "Film",
	// 			"isPresent": true,
	// 			"hourly_rate": "800",
	// 			"attendees": "15"
	// 		},
	// 		"tv_series_other": {
	// 			"type": "TV",
	// 			"isPresent": true,
	// 			"hourly_rate": "500",
	// 			"attendees": "50"
	// 		},
	// 		"corporate": {
	// 			"type": "Corporate",
	// 			"isPresent": false,
	// 			"hourly_rate": 0,
	// 			"attendees": ""
	// 		},
	// 		"individual": {
	// 			"type": "Individual",
	// 			"isPresent": true,
	// 			"hourly_rate": "7000",
	// 			"attendees": "more than 100"
	// 		}
	// 	},
	// 	"property_address": {
	// 		"country": "India",
	// 		"state": "Delhi",
	// 		"city": "delhi",
	// 		"pincode": "110095",
	// 		"area": "delhi",
	// 		"landmark": "someting",
	// 		"address": "Near mrket",
	// 		"location_detail": "Jhilmil delhi"
	// 	},
	// 	"property_desc": {
	// 		"user_id": "63b44547ebdaa7a4823662e0",
	// 		"property_name": "nipun",
	// 		"location_type": "Apartment Parking",
	// 		"property_size": "50",
	// 		"property_info": "test desciptions",
	// 		"street_parking": "no",
	// 		"house_parking": "no",
	// 		"security_camera": "yes"
	// 	},
	// 	"rules": [
	// 		"Do not add or in any way change locks or keying. ",
	// 		"No furnishings may be taken from the premises and put in halls, basement, or onporches or balconies without prior consent of Landlord, even for limited times.",
	// 		"rule check"
	// 	],
	// 	"timings": {
	// 		"monday": {
	// 			"open": true,
	// 			"isSetHours": true,
	// 			"time": {
	// 				"0": "a",
	// 				"1": "l",
	// 				"2": "l",
	// 				"3": " ",
	// 				"4": "d",
	// 				"5": "a",
	// 				"6": "y",
	// 				"start": "10:00 am",
	// 				"end": "10:00 pm"
	// 			}
	// 		},
	// 		"tuesday": {
	// 			"open": true,
	// 			"isSetHours": false,
	// 			"time": "all day"
	// 		},
	// 		"wednesday": {
	// 			"open": true,
	// 			"isSetHours": false,
	// 			"time": "all day"
	// 		},
	// 		"thursday": {
	// 			"open": true,
	// 			"isSetHours": false,
	// 			"time": "all day"
	// 		},
	// 		"friday": {
	// 			"open": true,
	// 			"isSetHours": false,
	// 			"time": "all day"
	// 		},
	// 		"saturday": {
	// 			"open": true,
	// 			"isSetHours": false,
	// 			"time": "all day"
	// 		},
	// 		"sunday": {
	// 			"open": true,
	// 			"isSetHours": true,
	// 			"time": {
	// 				"0": "a",
	// 				"1": "l",
	// 				"2": "l",
	// 				"3": " ",
	// 				"4": "d",
	// 				"5": "a",
	// 				"6": "y",
	// 				"start": "05:00 am",
	// 				"end": "05:00 pm"
	// 			}
	// 		}
	// 	},
	// 	"review_and_rating": [],
	// 	"verified": "Under Review",
	// 	"createdAt": "2023-01-16T07:39:51.062Z",
	// 	"updatedAt": "2023-01-16T07:39:51.062Z",
	// 	"__v": 0
	// };
	useEffect(() => {
		fetchData();
		// setData(tempdata)
		// setTempData(tempdata);

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
