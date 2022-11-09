import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { Avatar } from "@mui/material";
import Buttons from "./Buttons";
import { TextField } from "@mui/material";

const Contact = ({ data }) => {
	const [name, setname] = useState(data.contact_det.name);
	let tmp_name = data.contact_det.name;
	const handleClickname = (e) => {
		tmp_name = e.target.value;
	};
	const handleSavename = () => {
		console.log("Edit data in backend");
		tmp_name = name;
	};
	const handleDiscardname = () => {
		setname(tmp_name);
	};

	const [mobile_no, setmobile_no] = useState(data.contact_det.mobile_num);
	let tmp_mobile_no = data.contact_det.mobile_num;
	const handleClickmobile_no = (e) => {
		tmp_mobile_no = e.target.value;
	};
	const handleSavemobile_no = () => {
		console.log("Edit data in backend");
		tmp_mobile_no = mobile_no;
	};
	const handleDiscardmobile_no = () => {
		console.log(tmp_mobile_no);
		setmobile_no(tmp_mobile_no);
	};

	const [email, setemail] = useState(data.contact_det.email);
	let tmp_email = data.contact_det.email;
	const handleClickemail = (e) => {
		tmp_email = e.target.value;
	};
	const handleSaveemail = () => {
		console.log("Edit data in backend");
		tmp_email = email;
	};
	const handleDiscardemail = () => {
		setemail(tmp_email);
	};

	const [alt_name, setalt_name] = useState(
		data.contact_det.alt_name ? data.contact_det.alt_name : ""
	);
	let tmp_alt_name = data.contact_det.alt_name ? data.contact_det.alt_name : "";
	const handleClickalt_name = (e) => {
		tmp_alt_name = e.target.value;
	};
	const handleSavealt_name = () => {
		console.log("Edit data in backend");
		tmp_alt_name = alt_name;
	};
	const handleDiscardalt_name = () => {
		setalt_name(tmp_alt_name);
	};

	const [alt_mobile, setalt_mobile] = useState(
		data.contact_det.alt_mobile ? data.contact_det.alt_mobile : ""
	);
	let tmp_alt_mobile = data.contact_det.alt_mobile
		? data.contact_det.alt_mobile
		: "";
	const handleClickalt_mobile = (e) => {
		tmp_alt_mobile = e.target.value;
	};
	const handleSavealt_mobile = () => {
		console.log("Edit data in backend");
		tmp_alt_mobile = alt_mobile;
	};
	const handleDiscardalt_mobile = () => {
		setalt_mobile(tmp_alt_mobile);
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
					src={data.contact_det.img}
					alt="User-Profile"
				/>
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading ">Name:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={name}
							onClick={handleClickname}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setname(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons save={handleSavename} discard={handleDiscardname} />
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
						<div className="location-secondary-heading ">Mobile Number:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={mobile_no}
							onClick={handleClickmobile_no}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setmobile_no(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons
							save={handleSavemobile_no}
							discard={handleDiscardmobile_no}
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
						<div className="location-secondary-heading ">Email:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={email}
							onClick={handleClickemail}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setemail(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons save={handleSaveemail} discard={handleDiscardemail} />
					</div>
				</div>
				{data.contact_det.alt_name && (
					<div className="location-subcontent-wrapper">
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "5px",
								marginBottom: "0px",
							}}>
							<GoPrimitiveDot color="#6439ff" />
							<div className="location-secondary-heading ">Alternate Name:</div>
						</div>
						<div className="location-info">
							<TextField
								id="filled-select-currency"
								value={alt_name}
								onClick={handleClickalt_name}
								fullWidth
								size="small"
								sx={{
									padding: "8px",
								}}
								onChange={(e) => {
									console.log(e.target.value);
									setalt_name(e.target.value);
								}}
								variant="outlined"
							/>
							<Buttons
								save={handleSavealt_name}
								discard={handleDiscardalt_name}
							/>
							{data.contact_det.alt_name}
						</div>
					</div>
				)}
				{data.contact_det.alt_mobile && (
					<div className="location-subcontent-wrapper">
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "5px",
								marginBottom: "0px",
							}}>
							<GoPrimitiveDot color="#6439ff" />
							<div className="location-secondary-heading "></div>
							Alternate Mobile Number:
						</div>
						<div className="location-info">
							<TextField
								id="filled-select-currency"
								value={alt_mobile}
								onClick={handleClickalt_mobile}
								fullWidth
								size="small"
								sx={{
									padding: "8px",
								}}
								onChange={(e) => {
									console.log(e.target.value);
									setalt_mobile(e.target.value);
								}}
								variant="outlined"
							/>
							<Buttons
								save={handleSavealt_mobile}
								discard={handleDiscardalt_mobile}
							/>
							{data.contact_det.alt_mobile}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Contact;
