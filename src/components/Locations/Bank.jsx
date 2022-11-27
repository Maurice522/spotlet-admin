import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import Buttons from "./Buttons";
import { TextField } from "@mui/material";
import { updateLocation } from "../../services/api";
import { toast } from "react-toastify";

const Bank = ({ data }) => {
	// console.log(data);

	const initialState = {
		account_holder_name: data?.bankDetails?.account_holder_name,
		bank_name: data?.bankDetails?.bank_name,
		ifsc_code: data?.bankDetails?.ifsc_code,
		account_number: data?.bankDetails?.account_number,
	};

	const [bankDetails, setBankDetails] = useState(initialState);

	const handleChange = (e) => {
		setBankDetails({
			...bankDetails,
			[e.target.name]: e.target.value,
		});
	};

	const handleSave = async (e) => {
		e.preventDefault();
		if (
			!bankDetails.account_holder_name.length ||
			!bankDetails.account_number.length ||
			!bankDetails.bank_name.length ||
			!bankDetails.ifsc_code.length
		)
			return toast.error("Please fill all required fields!!!");
		const form = {
			newLocData: {
				...data,
				bankDetails,
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
		setBankDetails(initialState);
	};

	return (
		<div>
			<div className="location-primary-heading">Bank Details</div>
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
						<div className="location-secondary-heading ">
							Account Holder Name:
						</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="account_holder_name"
							value={bankDetails.account_holder_name}
							// onClick={handleClickname}
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
						<div className="location-secondary-heading ">Account Number:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="account_number"
							value={bankDetails.account_number}
							// onClick={handleClickmobile_no}
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
						<div className="location-secondary-heading ">Bank Name:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="bank_name"
							value={bankDetails.bank_name}
							// onClick={handleClickemail}
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
						<div className="location-secondary-heading ">IFSC Code:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="ifsc_code"
							value={bankDetails.ifsc_code}
							// onClick={handleClickemail}
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

export default Bank;
