import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import Buttons from "./Buttons";
import { TextField } from "@mui/material";

const Location = ({ data }) => {
	const [address, setAddress] = useState(data.property_address.address);
	let tmp_address = data.property_address.address;
	const handleClickAddress = (e) => {
		tmp_address = e.target.value;
	};
	const handleSaveAddress = () => {
		console.log("Edit data in backend");
		tmp_address = address;
	};
	const handleDiscardAddress = () => {
		setAddress(tmp_address);
	};

	const [city, setCity] = useState(data.property_address.city);
	let tmp_city = data.property_address.city;
	const handleClickCity = (e) => {
		tmp_city = e.target.value;
	};
	const handleSaveCity = () => {
		console.log("Edit data in backend");
		tmp_city = city;
	};
	const handleDiscardCity = () => {
		console.log(tmp_city);
		setCity(tmp_city);
	};

	const [state, setState] = useState(data.property_address.state);
	let tmp_state = data.property_address.state;
	const handleClickState = (e) => {
		tmp_state = e.target.value;
	};
	const handleSaveState = () => {
		console.log("Edit data in backend");
		tmp_state = state;
	};
	const handleDiscardState = () => {
		setState(tmp_state);
	};

	const [country, setCountry] = useState(data.property_address.country);
	let tmp_country = data.property_address.country;
	const handleClickCountry = (e) => {
		tmp_country = e.target.value;
	};
	const handleSaveCountry = () => {
		console.log("Edit data in backend");
		tmp_country = country;
	};
	const handleDiscardCountry = () => {
		setCountry(tmp_country);
	};

	const [landmark, setLandmark] = useState(data.property_address.landmark);
	let tmp_landmark = data.property_address.landmark;
	const handleClickLandmark = (e) => {
		tmp_landmark = e.target.value;
	};
	const handleSaveLandmark = () => {
		console.log("Edit data in backend");
		tmp_landmark = landmark;
	};
	const handleDiscardLandmark = () => {
		setLandmark(tmp_landmark);
	};

	const [loc_details, setLoc_details] = useState(
		data.property_address.location_detail
	);
	let tmp_loc_details = data.property_address.location_detail;
	const handleClickLoc_details = (e) => {
		tmp_loc_details = e.target.value;
	};
	const handleSaveLoc_details = () => {
		console.log("Edit data in backend");
		tmp_loc_details = loc_details;
	};
	const handleDiscardLoc_details = () => {
		setLoc_details(tmp_loc_details);
	};

	const [pincode, setPincode] = useState(data.property_address.pincode);
	let tmp_pincode = data.property_address.pincode;
	const handleClickPincode = (e) => {
		tmp_pincode = e.target.value;
	};
	const handleSavePincode = () => {
		console.log("Edit data in backend");
		tmp_pincode = pincode;
	};
	const handleDiscardPincode = () => {
		setPincode(tmp_pincode);
	};

	// data = data[0];
	return (
		<div>
			<div className="location-primary-heading">Property Address</div>
			<div className="location-content">
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading">Address:</div>
					</div>

					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={address}
							onClick={handleClickAddress}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setAddress(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons save={handleSaveAddress} discard={handleDiscardAddress} />
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading">City:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={city}
							onClick={handleClickCity}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setCity(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons save={handleSaveCity} discard={handleDiscardCity} />
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading">State:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={state}
							onClick={handleClickState}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setState(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons save={handleSaveState} discard={handleDiscardState} />
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading">Country:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={country}
							onClick={handleClickCountry}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setCountry(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons save={handleSaveCountry} discard={handleDiscardCountry} />
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading">Landmark:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={landmark}
							onClick={handleClickLandmark}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setLandmark(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons
							save={handleSaveLandmark}
							discard={handleDiscardLandmark}
						/>
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading">Location Details:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={loc_details}
							onClick={handleClickLoc_details}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setLoc_details(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons
							save={handleSaveLoc_details}
							discard={handleDiscardLoc_details}
						/>
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading">Pincode:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={pincode}
							onClick={handleClickPincode}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setPincode(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons save={handleSavePincode} discard={handleDiscardPincode} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Location;
