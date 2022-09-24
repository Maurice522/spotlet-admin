import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const Dodont = ({ data }) => {
	return (
		<div>
			<div className="location-primary-heading">DOs</div>
			<div className="location-content">
				{data.do_and_dont.do_s.map((item, index) => (
					<div className="location-subcontent-wrapper" key={index}>
						<GoPrimitiveDot color="#ff6767" />
						<div className="location-info">{item}</div>
					</div>
				))}
			</div>
			<div className="location-primary-heading">DON'Ts</div>
			<div className="location-content">
				{data.do_and_dont.dont_s.map((item, index) => (
					<div className="location-subcontent-wrapper" key={index}>
						<GoPrimitiveDot color="#ff6767" />
						<div className="location-info">{item}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Dodont;
