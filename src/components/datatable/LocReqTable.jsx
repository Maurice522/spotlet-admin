import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./datatable.scss";

const LocReqTable = () => {
	const approveUser = (id, userid) => {
		// console.log(userid);
		axios
			.put(`${process.env.REACT_APP_API_URL}/approveloc/` + id, {
				user_id: userid,
			})
			.then(console.log("Approved Location"));
		window.location.reload();
		alert("The location has been approved");
	};
	const userColumns = [
		{ field: "id", headerName: "ID", width: 150 },
		{
			field: "user",
			headerName: "User",
			width: 230,
			renderCell: (params) => {
				return (
					<div className="cellWithImg">
						<img className="cellImg" src={params.row.img} alt="" />
						{params.row.username}
					</div>
				);
			},
		},
		{
			field: "email",
			headerName: "Email",
			width: 230,
		},
		{
			field: "mobile",
			headerName: "Phone Number",
			width: 200,
		},
		{
			field: "date",
			headerName: "Date",
			width: 200,
		},
	];

	var tempdata = {
		"_id": "63c4ff46bb79afb4ac658171",
		"location_id": "nipu96027",
		"amenities": [
			"Balcony",
			"All utilities included",
			"Wifi",
			"TV Included",
			"Wine Cellar"
		],
		"bankDetails": {
			"account_holder_name": "nipun",
			"bank_name": "sbi",
			"ifsc_code": "SBI12345678",
			"account_number": "12345678901"
		},
		"bookedDates": [],
		"contact_det": {
			"contact_name": "NI",
			"designation": "no",
			"mobile_num": "7894561230",
			"email": "saketmundra2707@gmail.com",
			"alt_name": "",
			"alt_mobile": "",
			"pan_no": "1234567890",
			"aadhar_no": "123456789012",
			"img": ""
		},
		"do_and_dont": {
			"do_s": [
				"Do advise us of any change in your personal circumstances. We can try and help",
				"Ask if you are not sure of anything.",
				"good"
			],
			"dont_s": [
				"Dont Be rude or aggressive or rude towards any member of the Cooke & Co staff as this will not be tolerated.",
				"Dont Damage the landlords property in any way.",
				"bad"
			]
		},
		"features": [
			"Architectural details, such as crown moldings, chair rails, etc.",
			"Alarm system",
			"Terrace Garden",
			"Fireplace"
		],
		"gst": {
			"doc_no": "45644546",
			"docs": [
				{
					"file": "https://spotlet-files.s3.ap-south-1.amazonaws.com/location/gst/Spotlet%20V2%20Proposal.pdf"
				}
			]
		},
		"imagesData": [
			{
				"image": "https://spotlet-files.s3.amazonaws.com/location/images/1673854206349datingscout-JTUmzXLoqHQ-unsplash.jpg",
				"fileName": "datingscout-JTUmzXLoqHQ-unsplash.jpg"
			},
			{
				"image": "https://spotlet-files.s3.ap-south-1.amazonaws.com/location/images/1673854206873edvin-johansson-rlwE8f8anOc-unsplash%20%281%29.jpg",
				"fileName": "edvin-johansson-rlwE8f8anOc-unsplash (1).jpg"
			},
			{
				"image": "https://spotlet-files.s3.ap-south-1.amazonaws.com/location/images/1673854207138paolo-nicolello-2gOxKj594nM-unsplash.jpg",
				"fileName": "paolo-nicolello-2gOxKj594nM-unsplash.jpg"
			},
			{
				"image": "https://spotlet-files.s3.ap-south-1.amazonaws.com/location/images/1673854207351sasha-kaunas-xEaAoizNFV8-unsplash.jpg",
				"fileName": "sasha-kaunas-xEaAoizNFV8-unsplash.jpg"
			},
			{
				"image": "https://spotlet-files.s3.ap-south-1.amazonaws.com/location/images/1673854207560yuliya-pankevich-oyxsG2Lh_uA-unsplash.jpg",
				"fileName": "yuliya-pankevich-oyxsG2Lh_uA-unsplash.jpg"
			},
			{
				"image": "https://spotlet-files.s3.ap-south-1.amazonaws.com/location/images/1673854207721edvin-johansson-rlwE8f8anOc-unsplash.jpg",
				"fileName": "edvin-johansson-rlwE8f8anOc-unsplash.jpg"
			}
		],
		"pricing": {
			"cleaningFee": "600",
			"film_webseries_ad": {
				"type": "Film",
				"isPresent": true,
				"hourly_rate": "800",
				"attendees": "15"
			},
			"tv_series_other": {
				"type": "TV",
				"isPresent": true,
				"hourly_rate": "500",
				"attendees": "50"
			},
			"corporate": {
				"type": "Corporate",
				"isPresent": false,
				"hourly_rate": 0,
				"attendees": ""
			},
			"individual": {
				"type": "Individual",
				"isPresent": true,
				"hourly_rate": "7000",
				"attendees": "more than 100"
			}
		},
		"property_address": {
			"country": "India",
			"state": "Delhi",
			"city": "delhi",
			"pincode": "110095",
			"area": "delhi",
			"landmark": "someting",
			"address": "Near mrket",
			"location_detail": "Jhilmil delhi"
		},
		"property_desc": {
			"user_id": "63b44547ebdaa7a4823662e0",
			"property_name": "nipun",
			"location_type": "Apartment Parking",
			"property_size": "50",
			"property_info": "test desciptions",
			"street_parking": "no",
			"house_parking": "no",
			"security_camera": "yes"
		},
		"rules": [
			"Do not add or in any way change locks or keying. ",
			"No furnishings may be taken from the premises and put in halls, basement, or onporches or balconies without prior consent of Landlord, even for limited times.",
			"rule check"
		],
		"timings": {
			"monday": {
				"open": true,
				"isSetHours": true,
				"time": {
					"0": "a",
					"1": "l",
					"2": "l",
					"3": " ",
					"4": "d",
					"5": "a",
					"6": "y",
					"start": "10:00 am",
					"end": "10:00 pm"
				}
			},
			"tuesday": {
				"open": true,
				"isSetHours": false,
				"time": "all day"
			},
			"wednesday": {
				"open": true,
				"isSetHours": false,
				"time": "all day"
			},
			"thursday": {
				"open": true,
				"isSetHours": false,
				"time": "all day"
			},
			"friday": {
				"open": true,
				"isSetHours": false,
				"time": "all day"
			},
			"saturday": {
				"open": true,
				"isSetHours": false,
				"time": "all day"
			},
			"sunday": {
				"open": true,
				"isSetHours": true,
				"time": {
					"0": "a",
					"1": "l",
					"2": "l",
					"3": " ",
					"4": "d",
					"5": "a",
					"6": "y",
					"start": "05:00 am",
					"end": "05:00 pm"
				}
			}
		},
		"review_and_rating": [],
		"verified": "Under Review",
		"createdAt": "2023-01-16T07:39:51.062Z",
		"updatedAt": "2023-01-16T07:39:51.062Z",
		"__v": 0
	};


	const [data, setData] = useState([]);
	useEffect(() => {
		var data2 = [];
		// .get(`${process.env.REACT_APP_API_URL}/locreqs`)
		axios
			.get(`/locreqs`)
			.then((response) => {
				const data = response.data;
				console.log(data)
				for (let i = 0; i < data?.length; i++) {
					const date = new Date(data[i]?.createdAt);
					const yyyy = date.getFullYear();
					let mm = date.getMonth() + 1; // Months start at 0!
					let dd = date.getDate();

					if (dd && dd < 10) dd = "0" + dd;
					if (mm && mm < 10) mm = "0" + mm;

					const formattedToday = dd + "/" + mm + "/" + yyyy;
					const user = {
						userid: data[i]?.property_desc?.user_id,
						id: data[i]?.location_id,
						email: data[i]?.contact_det?.email,
						username: data[i]?.contact_det?.contact_name,
						mobile: data[i]?.contact_det?.mobile_num,
						date: formattedToday,
						img: data[i]?.contact_det?.img,
					};
					data2 = [...data2, user];
				}
			})
			.then(() => {
				setData(data2);
			});
		// const data = [tempdata,tempdata];
		
		// setData(data2);
	}, []);

	const actionColumn = [
		{
			field: "action",
			headerName: "View",
			width: 250,
			renderCell: (params) => {
				console.log(params.row.id)
				const link = `/locations/${params.id}`;
				// console.log(link);
				return (
					<div className="cellAction">
						<Link to={link} style={{ textDecoration: "none" }}>
							<div className="viewButton">View</div>
						</Link>
						<div
							className="viewButton"
							onClick={() => approveUser(params.row.id, params.row.userid)}
						>
							Approve
						</div>
						{/* <div className="deleteButton">Incomplete</div> */}
					</div>
				);
			},
		},
	];
	return (
		<div className="datatable">
			<div className="datatableTitle">Requests</div>
			<DataGrid
				className="datagrid"
				rows={data}
				columns={userColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[9]}
				getRowId={Math.random()}
			/>
		</div>
	);
};

export default LocReqTable;
