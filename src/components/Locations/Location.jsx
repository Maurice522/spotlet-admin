import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const Location = ({ data }) => {
	// data = data[0];
	return (
		<div>
			<div className="location-primary-heading">Property Address</div>
			<div className="location-content">
				<div className="location-subcontent-wrapper">
					<div className="location-secondary-heading with-dot">
						<GoPrimitiveDot color="#ff6767" />
						Address:
					</div>

					<div className="location-info">{data.property_address.address}</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div className="location-secondary-heading with-dot">
						<GoPrimitiveDot color="#ff6767" />
						City:
					</div>
					<div className="location-info">{data.property_address.city}</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div className="location-secondary-heading with-dot">
						<GoPrimitiveDot color="#ff6767" />
						State:
					</div>
					<div className="location-info">{data.property_address.state}</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div className="location-secondary-heading with-dot">
						<GoPrimitiveDot color="#ff6767" />
						Country:
					</div>
					<div className="location-info">{data.property_address.country}</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div className="location-secondary-heading with-dot">
						<GoPrimitiveDot color="#ff6767" />
						Landmark:
					</div>
					<div className="location-info">{data.property_address.landmark}</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div className="location-secondary-heading with-dot">
						<GoPrimitiveDot color="#ff6767" />
						Location Details:
					</div>
					<div className="location-info">
						{data.property_address.location_detail}
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div className="location-secondary-heading with-dot">
						<GoPrimitiveDot color="#ff6767" />
						Pincode:
					</div>
					<div className="location-info">{data.property_address.pincode}</div>
				</div>
			</div>
		</div>
	);
};

export default Location;
