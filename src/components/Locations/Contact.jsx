import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { Avatar } from "@mui/material";
import Buttons from "./Buttons";
import { TextField } from "@mui/material";
import { updateLocation } from "../../services/api";
import { toast } from "react-toastify";

const Contact = ({ data, fetchData }) => {
	// console.log(data);

	const initialState = {
		contact_name: data?.contact_det?.contact_name,
		designation: data?.contact_det?.designation,
		mobile_num: data?.contact_det?.mobile_num,
		email: data?.contact_det?.email,
		alt_name: data?.contact_det?.alt_name,
		alt_mobile: data?.contact_det?.alt_mobile,
		pan_no: data?.contact_det?.pan_no,
		aadhar_no: data?.contact_det?.aadhar_no,
		img: data?.personalInfo?.profile_pic,
	};

	const [contact_det, setContact_det] = useState(initialState);

	const handleChange = (e) => {
		setContact_det({
			...contact_det,
			[e.target.name]: e.target.value,
		});
	};

	const handleSave = async (e) => {
		e.preventDefault();
		if (
			!contact_det.contact_name.length ||
			!contact_det.designation.length ||
			!contact_det.mobile_num.length ||
			!contact_det.email.length ||
			!contact_det.pan_no.length ||
			!contact_det.aadhar_no.length
		)
			return toast.error("Please fill all required fields!!!");
		const form = {
			newLocData: {
				...data,
				contact_det,
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
		setContact_det(initialState);
	};

	return (
		<div>
			<div className="location-primary-heading">Contact Details</div>

			<div className="location-content">
				<Avatar
					sx={{
						width: "102px",
						height: "102px",
						marginBottom: "30px",
					}}
					src={data?.initialState?.img}
					alt="User-Profile"
				/>
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}
					>
						{contact_det?.contact_name ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Name:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="contact_name"
							value={contact_det?.contact_name}
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
						{contact_det?.mobile_num ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Mobile Number:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="mobile_num"
							value={contact_det?.mobile_num}
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
						{contact_det?.email ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Email:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="email"
							value={contact_det?.email}
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
						{contact_det?.designation ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Designation:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="designation"
							value={contact_det?.designation}
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
						{contact_det?.pan_no ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Pan Noumber:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="pan_no"
							value={contact_det?.pan_no}
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
						{contact_det?.aadhar_no ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Aadhar Number:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="aadhar_no"
							value={contact_det?.aadhar_no}
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
				{data?.contact_det?.alt_name && (
					<div className="location-subcontent-wrapper">
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "5px",
								marginBottom: "0px",
							}}
						>
							{contact_det?.alt_name ? (
								<GoPrimitiveDot color="#6439ff" />
							) : (
								<GoPrimitiveDot color="#ff6767" />
							)}{" "}
							<div className="location-secondary-heading ">Alternate Name:</div>
						</div>
						<div className="location-info">
							<TextField
								id="filled-select-currency"
								name="alt_name"
								value={contact_det?.alt_name}
								// onClick={handleClickalt_name}
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
				)}
				{data?.contact_det?.alt_mobile && (
					<div className="location-subcontent-wrapper">
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "5px",
								marginBottom: "0px",
							}}
						>
							{contact_det?.alt_mobile ? (
								<GoPrimitiveDot color="#6439ff" />
							) : (
								<GoPrimitiveDot color="#ff6767" />
							)}{" "}
							<div className="location-secondary-heading "></div>
							Alternate Mobile Number:
						</div>
						<div className="location-info">
							<TextField
								id="filled-select-currency"
								name="alt_mobile"
								value={contact_det?.alt_mobile}
								// onClick={handleClickalt_mobile}
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
				)}
			</div>
		</div>
	);
};

export default Contact;
