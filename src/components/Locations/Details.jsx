import React, { useState } from "react";
import Buttons from "./Buttons";
import { GoPrimitiveDot } from "react-icons/go";
import { TextField, MenuItem} from "@mui/material";
import Select from "react-select";
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
	const [lType, setLType] = useState(0);

	const opt = [
		{ value: "Apartment Parking", label: "Apartment Parking" },
		{ value: "Banquet Halls", label: "Banquet Halls" },
		{ value: "Beach House", label: "Beach House" },
		{ value: "BT roads (open roads)", label: "BT roads (open roads)" },
		{ value: "Bus Stand", label: "Bus Stand" },
		{ value: "Civil Court", label: "Civil Court" },
		{ value: "College", label: "College" },
		{ value: "Convention Centres", label: "Convention Centres" },
		{ value: "Corporate Office", label: "Corporate Office" },
		{ value: "Dhaba", label: " Dhaba" },
		{ value: "Event auditoriums", label: "Event auditoriums" },
		{ value: "Factory", label: "Factory" },
		{ value: "Farmhouse", label: " Farmhouse" },
		{ value: "Farmland", label: "Farmland" },
		{ value: "Forest", label: "Forest" },
		{ value: "Forest Stay", label: "Forest Stay" },
		{ value: "Gated Community", label: "Gated Community" },
		{ value: "Hospital", label: "Hospital" },
		{ value: "Hotel", label: "Hotel" },
		{ value: "Hotel Stay", label: "Hotel Stay" },
		{ value: "Industry", label: "Industry" },
		{ value: "Jail", label: "Jail" },
		{ value: "Lake House", label: "Lake House" },
		{ value: "Lake Stay", label: "Lake Stay" },
		{ value: "Lakes", label: "Lakes" },
		{ value: "Manduva House", label: "Manduva House" },
		{ value: "Movie Theatres", label: "Movie Theatres" },
		{ value: "Police station", label: "Police station" },
		{ value: "Pubs", label: "Pubs" },
		{ value: "Railway station", label: "Railway station" },
		{ value: "Resorts", label: "Resorts" },
		{ value: "Restaurants", label: "Restaurants" },
		{ value: "Rich house", label: "Rich house" },
		{ value: "School", label: "School" },
		{ value: "Shooting floors", label: "Shooting floors" },
		{ value: "Shopping Malls", label: "Shopping Malls" },
		{ value: "Sports auditoriums", label: "Sports auditoriums" },
		{ value: "Studio Floors", label: "Studio Floors" },
		{ value: "TV Stations", label: "TV Stations" },
		{ value: "Village atmosphere", label: "Village atmosphere" },
		{ value: "Weekend Farming", label: "Weekend Farming" },
		{ value: "Wooden house", label: "Wooden house" },
	];

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
						{console.log(property_desc.location_type)}
						<Select
							id="filled-select-currency"
							name="location_type"
							options={opt}
							// onClick={handleClickLoc_type}
							value={opt[lType]}
							defaultValue={property_desc.location_type}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								opt.map((item, index) => {
									if (e.value === item.value) {
									  setLType(index);
									}
								  });
								  setPropertyDescr({ ...property_desc, location_type: e.value });
								}}
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
							select
							defaultValue={property_desc.security_camera}
							size="small"
							sx={{
								padding: "8px",
							}}
							variant="outlined"
							onChange={handleChange}
						>
							<MenuItem value="yes">yes</MenuItem>
                            <MenuItem value="no">no</MenuItem>
						</TextField>
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
							select
							value={property_desc?.street_parking}
							defaultValue={property_desc?.street_parking}
							// onClick={handleClickStreet_parking}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={handleChange}
							variant="outlined"
						>
							<MenuItem value="yes">yes</MenuItem>
                            <MenuItem value="no">no</MenuItem>
						</TextField>
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
							select
							value={property_desc?.house_parking}
							defaultValue={property_desc?.house_parking}
							// onClick={handleClickHouseParking}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={handleChange}
							variant="outlined"
						>
							<MenuItem value="yes">yes</MenuItem>
                            <MenuItem value="no">no</MenuItem>
						</TextField>
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
							save={() => { }}
							discard={() => { }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
