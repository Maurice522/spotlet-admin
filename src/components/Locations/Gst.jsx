import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const Gst = ({ data }) => {
	return (
		<div>
			<div className="location-primary-heading">GST Details</div>
			<div className="location-content">
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Document Number:</div>
					<div className="location-info">{data.gst.doc_no}</div>
				</div>
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Document Link:</div>
					<div className="location-info">{data.gst.docs[0]}</div>
				</div>
			</div>
		</div>
	);
};

export default Gst;
