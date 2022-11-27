import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { Avatar } from "@mui/material";
import Buttons from "./Buttons";
import { TextField } from "@mui/material";

const Gst = ({ data }) => {
	const [name, setname] = useState(data?.gst?.doc_no);
	let tmp_name = data?.gst?.doc_no;
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

	const [gstdoc, setgstdoc] = useState(data?.gst?.docs);
	let tmp_gstdoc = data?.gst?.docs[0];
	const handleClickgstdoc = (e) => {
		tmp_gstdoc = e.target.value;
	};
	const handleSavegstdoc = () => {
		console.log("Edit data in backend");
		tmp_gstdoc = gstdoc;
	};
	const handleDiscardgstdoc = () => {
		console.log(tmp_gstdoc);
		setgstdoc(tmp_gstdoc);
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
						}}
					>
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
						}}
					>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading ">Documents:</div>
					</div>
					{gstdoc?.map((doc, index) => (
						<div className="location-info" key={index}>
							{/* <TextField
							id="filled-select-currency"
							value={gstdoc}
							onClick={handleClickgstdoc}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setgstdoc(e.target.value);
							}}
							variant="outlined"
						/> */}
							<embed src={doc?.file} width="100%" height="450px" />
							<Buttons save={handleSavegstdoc} discard={handleDiscardgstdoc} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Gst;
