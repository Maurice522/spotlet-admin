import React, { useState } from "react";
import Buttons from "./Buttons";
import { GoPrimitiveDot } from "react-icons/go";
import { TextField, MenuItem, Select } from "@mui/material";
import { toast } from "react-toastify";
import { updateLocation } from "../../services/api";

const Details = ({ data, fetchData }) => {
	// console.log(data);

	const initialState = {
		user_id: data?.property_desc?.user_id,
		location_type: data?.property_desc?.location_type,
		property_name: data?.property_desc?.property_name,
		property_size: data?.property_desc?.property_size,
		property_info: data?.property_desc?.property_info,
		street_parking: data?.property_desc?.street_parking,
		house_parking: data?.property_desc?.house_parking,
		security_camera: data?.property_desc?.security_camera,
	};

	const [property_desc, setPropertyDescr] = useState(initialState);

	// const options = [
	// 	{ value: "Airport", label: "Airport" },
	// 	{ value: "Amusement Park", label: "Amusement Park" },
	// 	{ value: "Apartment", label: "Apartment" },
	// ];

	const handleChange = (e) => {
		setPropertyDescr({
			...property_desc,
			[e.target.name]: e.target.value,
		});
	};

	const handleSave = async (e) => {
		e.preventDefault();
		if (
			!property_desc?.location_type?.length ||
			!property_desc?.property_name?.length ||
			!property_desc?.property_info?.length ||
			!property_desc?.property_size?.length ||
			!property_desc?.security_camera?.length ||
			!property_desc?.street_parking?.length ||
			!property_desc?.house_parking?.length
		)
			return toast.error("Please fill all required fields!!!");
		const form = {
			newLocData: {
				...data,
				property_desc,
			},
			location_id: data.location_id,
		};
		console.log(form);
		try {
			const response = await updateLocation(form);
			await fetchData();
			// window.location.reload(true);
			toast.success(response.data);
		} catch (error) {
			toast.error(error.response.data);
		}
	};

	const handleDiscard = (e) => {
		setPropertyDescr(initialState);
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
						{property_desc?.location_type ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Location Type:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="location_type"
							// select
							// onClick={handleClickLoc_type}
							value={property_desc.location_type}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={handleChange}
							variant="outlined"
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
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
						{property_desc?.property_name ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Property Name:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="property_name"
							value={property_desc?.property_name}
							// onClick={handleClickSec_camera}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							variant="outlined"
							onChange={handleChange}
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
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
						{property_desc?.property_info ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Proprty Info:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="property_info"
							value={property_desc?.property_info}
							// onClick={handleClickProp_info}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={handleChange}
							variant="outlined"
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
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
						{property_desc?.property_size ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Property Size:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="property_size"
							value={property_desc?.property_size}
							// onClick={handleClickProp_size}
							fullWidth
							size="small"
							type={"number"}
							sx={{
								padding: "8px",
							}}
							onChange={handleChange}
							variant="outlined"
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
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
						{property_desc?.security_camera ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Security Camera:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="security_camera"
							value={property_desc.security_camera}
							// onClick={handleClickSec_camera}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							variant="outlined"
							onChange={handleChange}
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
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
						{property_desc?.street_parking ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Street Parking:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="street_parking"
							value={property_desc?.street_parking}
							// onClick={handleClickStreet_parking}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={handleChange}
							variant="outlined"
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
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
						{property_desc?.house_parking ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">House Parking:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="house_parking"
							value={property_desc?.house_parking}
							// onClick={handleClickHouseParking}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={handleChange}
							variant="outlined"
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
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
						{property_desc?.user_id ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">User Id:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="user_id"
							value={property_desc?.user_id}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							variant="outlined"
						/>
						<Buttons
							styles={{ cursor: "not-allowed" }}
							save={() => {}}
							discard={() => {}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
