import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { Avatar } from "@mui/material";

const Contact = ({ data }) => {
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
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Name:</div>
					<div className="location-info">{data.contact_det.name}</div>
				</div>
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Mobile Number:</div>
					<div className="location-info">{data.contact_det.mobile_num}</div>
				</div>
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Email:</div>
					<div className="location-info">{data.contact_det.email}</div>
				</div>
				{data.contact_det.alt_name && (
					<div className="location-subcontent-wrapper">
						<GoPrimitiveDot color="#ff6767" />
						<div className="location-secondary-heading ">Alternate Name:</div>
						<div className="location-info">{data.contact_det.alt_name}</div>
					</div>
				)}
				{data.contact_det.alt_mobile && (
					<div className="location-subcontent-wrapper">
						<GoPrimitiveDot color="#ff6767" />
						<div className="location-secondary-heading ">
							Alternate Mobile Number:
						</div>
						<div className="location-info">{data.contact_det.alt_mobile}</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Contact;
