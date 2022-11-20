import React, { useState } from "react";
import Buttons from "./Buttons";
import { GoPrimitiveDot } from "react-icons/go";
import { TextField, MenuItem } from "@mui/material";

const Details = ({ data }) => {
	console.log(data);
	const options = [
		{ value: "Airport", label: "Airport" },
		{ value: "Amusement Park", label: "Amusement Park" },
		{ value: "Apartment", label: "Apartment" },
	];

	const [loc_type, setLoc_type] = useState(data?.property_desc?.location_type);
	let tmp_loc_type = data?.property_desc?.location_type;
	const handleClickLoc_type = (e) => {
		tmp_loc_type = e.target.value;
	};
	const handleSaveLoc_type = () => {
		console.log("Edit data in backend");
		tmp_loc_type = loc_type;
	};
	const handleDiscardLoc_type = () => {
		setLoc_type(tmp_loc_type);
	};

	const [prop_info, setProp_info] = useState(
		data?.property_desc?.property_info
	);
	let tmp_prop_info = data?.property_desc?.property_info;
	const handleClickProp_info = (e) => {
		tmp_prop_info = e.target.value;
	};
	const handleSaveProp_info = () => {
		console.log("Edit data in backend");
		tmp_prop_info = prop_info;
	};
	const handleDiscardProp_info = () => {
		console.log(tmp_prop_info);
		setProp_info(tmp_prop_info);
	};

	const [prop_size, setProp_size] = useState(data?.property_desc?.property_size);
	let tmp_prop_size = data?.property_desc?.property_size;
	const handleClickProp_size = (e) => {
		tmp_prop_size = e.target.value;
	};
	const handleSaveProp_size = () => {
		console.log("Edit data in backend");
		tmp_prop_size = prop_size;
	};
	const handleDiscardProp_size = () => {
		setProp_size(tmp_prop_size);
	};

	const [sec_camera, setSec_camera] = useState(
		data?.property_desc?.security_camera
	);
	let tmp_sec_camera = data?.property_desc?.security_camera;
	const handleClickSec_camera = (e) => {
		tmp_sec_camera = e.target.value;
	};
	const handleSaveSec_camera = () => {
		console.log("Edit data in backend");
		tmp_sec_camera = sec_camera;
	};
	const handleDiscardSec_camera = () => {
		setSec_camera(tmp_sec_camera);
	};

	const [street_parking, setStreet_parking] = useState(
		data?.property_desc?.street_parking
	);
	let tmp_street_parking = data?.property_desc?.street_parking;
	const handleClickStreet_parking = (e) => {
		tmp_street_parking = e.target.value;
	};
	const handleSaveStreet_parking = () => {
		console.log("Edit data in backend");
		tmp_street_parking = street_parking;
	};
	const handleDiscardStreet_parking = () => {
		setStreet_parking(tmp_street_parking);
	};

	return (
		<div>
			<div className="location-primary-heading">Property Description</div>
			<div className="location-content">
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}
					>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading ">Location Type:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							// select
							onClick={handleClickLoc_type}
							value={loc_type}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setLoc_type(e.target.value);
							}}
							variant="outlined"
						>
							{options.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>
						<Buttons
							save={handleSaveLoc_type}
							discard={handleDiscardLoc_type}
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
						}}
					>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading ">Proprty Info:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={prop_info}
							onClick={handleClickProp_info}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setProp_info(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons
							save={handleSaveProp_info}
							discard={handleDiscardProp_info}
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
						}}
					>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading ">Property Size:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={prop_size}
							onClick={handleClickProp_size}
							fullWidth
							size="small"
							type={"number"}
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setProp_size(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons
							save={handleSaveProp_size}
							discard={handleDiscardProp_size}
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
						}}
					>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading ">Security Camera:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={sec_camera}
							onClick={handleClickSec_camera}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							variant="outlined"
							onChange={(e) => {
								console.log(e.target.value);
								setSec_camera(e.target.value);
							}}
						/>
						<Buttons
							save={handleSaveSec_camera}
							discard={handleDiscardSec_camera}
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
						}}
					>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading ">Street Parking:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={street_parking}
							onClick={handleClickStreet_parking}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setStreet_parking(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons
							save={handleSaveStreet_parking}
							discard={handleDiscardStreet_parking}
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
						}}
					>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading ">User Id:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={data?.property_desc?.user_id}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							variant="outlined"
						/>
						<Buttons save={() => {}} discard={() => {}} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
