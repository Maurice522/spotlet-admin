import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const Pricing = ({ data }) => {
	return (
		<div>
			<div className="location-primary-heading">Corporate Pricings</div>
			<div className="location-content">
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Availability:</div>
					<div className="location-info">
						{data.pricing.corporate.isPresent === false
							? "Not Available"
							: "Available"}
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Hourly Rates:</div>
					<div className="location-info">
						{data.pricing.corporate.hourly_rate}
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Type:</div>
					<div className="location-info">{data.pricing.corporate.type}</div>
				</div>
			</div>
			<div className="location-primary-heading">
				Film/Web-Series/Ad Pricings
			</div>
			<div className="location-content">
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Availability:</div>
					<div className="location-info">
						{data.pricing.film_webseries_ad.isPresent === false
							? "Not Available"
							: "Available"}
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Hourly Rates:</div>
					<div className="location-info">
						{data.pricing.film_webseries_ad.hourly_rate}
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Type:</div>
					<div className="location-info">
						{data.pricing.film_webseries_ad.type}
					</div>
				</div>
			</div>
			<div className="location-primary-heading">TV-Shows/Others Pricings</div>
			<div className="location-content">
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Availability:</div>
					<div className="location-info">
						{data.pricing.tv_series_other.isPresent === false
							? "Not Available"
							: "Available"}
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Hourly Rates:</div>
					<div className="location-info">
						{data.pricing.tv_series_other.hourly_rate}
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Type:</div>
					<div className="location-info">
						{data.pricing.tv_series_other.type}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
