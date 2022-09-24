import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const Details = ({ data }) => {
	// data = data[0];
	return (
		<div>
			<div className="location-primary-heading">Property Description</div>
			<div className="location-content">
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Location Type:</div>
					<div className="location-info">
						{data.property_desc.location_type}
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Proprty Info:</div>
					<div className="location-info">
						{data.property_desc.property_info}
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Property Size:</div>
					<div className="location-info">
						{data.property_desc.property_size}
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Security Camera:</div>
					<div className="location-info">
						{data.property_desc.security_camera}
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Street Parking:</div>
					<div className="location-info">
						{data.property_desc.street_parking}
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">User Id:</div>
					<div className="location-info">{data.property_desc.user_id}</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
