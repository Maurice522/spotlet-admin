import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import Buttons from "./Buttons";
import { TextField } from "@mui/material";
import { updateLocation } from "../../services/api";
import { toast } from "react-toastify";

const Location = ({ data }) => {
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
			window.location.reload(true);
			toast.success(response.data);
		} catch (error) {
			toast.error(error.response.data);
		}
	};

	const handleDiscard = (e) => {
		setProperty_address(initialState);
	};

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
						<GoPrimitiveDot color="#6439ff" />
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
						<GoPrimitiveDot color="#6439ff" />
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
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading">City:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="city"
							value={property_address.city}
							// onClick={handleClickCity}
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
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading">State:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="state"
							value={property_address.state}
							// onClick={handleClickState}
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
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading">Country:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="country"
							value={property_address.country}
							// onClick={handleClickCountry}
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
						<GoPrimitiveDot color="#6439ff" />
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
						<GoPrimitiveDot color="#6439ff" />
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
