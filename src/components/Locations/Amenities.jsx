import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const Amenities = ({ data }) => {
	return (
		<div>
			<div className="location-primary-heading">Amenities</div>
			<div className="location-content">
				{data.amenities.map((item, index) => (
					<div className="location-subcontent-wrapper" key={index}>
						<GoPrimitiveDot color="#ff6767" />
						<div className="location-info">{item}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Amenities;
