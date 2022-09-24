import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const Features = ({ data }) => {
	return (
		<div>
			<div className="location-primary-heading">Features</div>
			<div className="location-content">
				{data.features.map((item, index) => (
					<div className="location-subcontent-wrapper" key={index}>
						<GoPrimitiveDot color="#ff6767" />
						<div className="location-info">{item}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Features;
