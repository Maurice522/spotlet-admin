import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import Buttons from "./Buttons";
import { TextField, MenuItem, Select } from "@mui/material";
import { updateLocation } from "../../services/api";
import { toast } from "react-toastify";
import { Country, State, City } from "country-state-city";

const Location = ({ data, fetchData }) => {
	// console.log(data);

	const initialState = {
		address: data?.property_address?.address,
		area: data?.property_address?.area,
		city: data?.property_address?.city,
		state: data?.property_address?.state,
		country: data?.property_address?.country,
		pincode: data?.property_address?.pincode,
		landmark: data?.property_address?.landmark,
		location_detail: data?.property_address?.location_detail,
	};

	const [property_address, setProperty_address] = useState(initialState);

	const handleChange = (e) => {
		setProperty_address({
			...property_address,
			[e.target.name]: e.target.value,
		});
	};

	const handleSave = async (e) => {
		e.preventDefault();
		if (
			!property_address?.city?.length ||
			!property_address?.state?.length ||
			!property_address?.area?.length ||
			!property_address?.country?.length ||
			!property_address?.pincode?.length ||
			!property_address?.address?.length ||
			!property_address?.address?.length
		)
			return toast.error("Please fill all required fields!!!");
		const form = {
			newLocData: {
				...data,
				property_address,
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
		setProperty_address(initialState);
		setCountry("");
		setState("");
		setCity("");
	};

	const [country, setCountry] = useState("");
	const [state, setState] = useState("");
	const [city, setCity] = useState("");

	const changeCountry = (id) => {
		setCountry(id);
	};
	const changeState = (id) => {
		setState(id);
	};
	const changeCity = (name) => {
		setCity(name);
	};

	let stateArray = State.getAllStates().filter(
		(item) => item.countryCode === country
	);
	let cityArray = City.getCitiesOfState(country, state).filter(
		(item) => item.countryCode === country
	);

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
						}}
					>
						{property_address?.address ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading">Address:</div>
					</div>

					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="address"
							value={property_address.address}
							// onClick={handleClickAddress}
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
						{property_address?.area ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading">Area:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="area"
							value={property_address.area}
							// onClick={handleClickArea}
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
						{property_address?.country ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading">Country:</div>
					</div>
					<div className="location-info">
						<Select
							id="filled-select-currency"
							name="country"
							value={property_address.country}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={handleChange}
							variant="outlined"
						>
							{Country.getAllCountries().map((item) => (
								<MenuItem
									value={item.name}
									onClick={changeCountry.bind(this, item.isoCode)}
									key={item.name}
								>
									{item.name}
								</MenuItem>
							))}
						</Select>
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
						{property_address?.state ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading">State:</div>
					</div>
					<div className="location-info">
						{stateArray.length ? (
							<Select
								id="filled-select-currency"
								name="state"
								value={property_address.state}
								fullWidth
								size="small"
								sx={{
									padding: "8px",
								}}
								onChange={handleChange}
								variant="outlined"
							>
								{stateArray.map((item) => (
									<MenuItem
										value={item.name}
										onClick={changeState.bind(this, item.isoCode)}
										key={item.name}
									>
										{item.name}
									</MenuItem>
								))}
							</Select>
						) : (
							<TextField
								id="filled-select-currency"
								name="state"
								value={property_address.state}
								fullWidth
								size="small"
								sx={{
									padding: "8px",
								}}
								disabled
								variant="outlined"
							/>
						)}
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
						{property_address?.city ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading">City:</div>
					</div>
					<div className="location-info">
						{cityArray.length ? (
							<Select
								id="filled-select-currency"
								name="city"
								value={property_address.city}
								fullWidth
								size="small"
								sx={{
									padding: "8px",
								}}
								onChange={handleChange}
								variant="outlined"
							>
								{cityArray.map((item) => (
									<MenuItem
										value={item.name}
										onClick={changeCity.bind(this, item.name)}
										key={item.name}
									>
										{item.name}
									</MenuItem>
								))}
							</Select>
						) : (
							<TextField
								id="filled-select-currency"
								name="city"
								value={property_address.city}
								fullWidth
								size="small"
								sx={{
									padding: "8px",
								}}
								disabled
								variant="outlined"
							/>
						)}
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
						{property_address?.landmark ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading">Landmark:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="landmark"
							value={property_address.landmark}
							// onClick={handleClickLandmark}
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
						{property_address?.pincode ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading">Pincode:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="pincode"
							value={property_address.pincode}
							// onClick={handleClickPincode}
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
			</div>
		</div>
	);
};

export default Location;
