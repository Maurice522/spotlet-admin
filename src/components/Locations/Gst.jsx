import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { Avatar } from "@mui/material";
import Buttons from "./Buttons";
import { TextField } from "@mui/material";

const Gst = ({ data }) => {
	const [name, setname] = useState(data.gst.doc_no);
	let tmp_name = data.gst.doc_no;
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

	const [mobile_no, setmobile_no] = useState(data.gst.docs[0]);
	let tmp_mobile_no = data.gst.docs[0];
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

	return (
		<div>
			<div className="location-primary-heading">GST Details</div>
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
						<div className="location-secondary-heading ">Document Number:</div>
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
						<div className="location-secondary-heading ">Document Link:</div>
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
			</div>
		</div>
	);
};

export default Gst;
