import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const Rules = ({ data }) => {
	return (
		<div>
			<div className="location-primary-heading">Rules</div>
			<div className="location-content">
				{data.rules.map((item, index) => (
					<div className="location-subcontent-wrapper" key={index}>
						<GoPrimitiveDot color="#ff6767" />
						<div className="location-info">{item}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Rules;
