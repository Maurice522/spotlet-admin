import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const Timing = ({ data }) => {
	return (
		<div>
			<div className="location-primary-heading">Timings</div>
			<div className="location-content">
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Monday:</div>
					<div className="location-info">
						{data.timings.monday.open === false
							? "Closed"
							: data.timings.monday.isSetHours === false
							? "Open all day"
							: `Open from ${data.timings.monday.time.start} to ${data.timings.monday.time.end}`}
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Tuesday:</div>
					<div className="location-info">
						{data.timings.tuesday.open === false
							? "Closed"
							: data.timings.tuesday.isSetHours === false
							? "Open all day"
							: `Open from ${data.timings.tuesday.time.start} to ${data.timings.tuesday.time.end}`}
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Wednesday:</div>
					<div className="location-info">
						{data.timings.wednesday.open === false
							? "Closed"
							: data.timings.wednesday.isSetHours === false
							? "Open all day"
							: `Open from ${data.timings.wednesday.time.start} to ${data.timings.wednesday.time.end}`}
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Thursday:</div>
					<div className="location-info">
						{data.timings.thursday.open === false
							? "Closed"
							: data.timings.thursday.isSetHours === false
							? "Open all day"
							: `Open from ${data.timings.thursday.time.start} to ${data.timings.thursday.time.end}`}
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Friday:</div>
					<div className="location-info">
						{data.timings.friday.open === false
							? "Closed"
							: data.timings.friday.isSetHours === false
							? "Open all day"
							: `Open from ${data.timings.friday.time.start} to ${data.timings.friday.time.end}`}
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Saturday:</div>
					<div className="location-info">
						{data.timings.saturday.open === false
							? "Closed"
							: data.timings.saturday.isSetHours === false
							? "Open all day"
							: `Open from ${data.timings.saturday.time.start} to ${data.timings.saturday.time.end}`}
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<GoPrimitiveDot color="#ff6767" />
					<div className="location-secondary-heading ">Sunday:</div>
					<div className="location-info">
						{data.timings.sunday.open === false
							? "Closed"
							: data.timings.sunday.isSetHours === false
							? "Open all day"
							: `Open from ${data.timings.sunday.time.start} to ${data.timings.sunday.time.end}`}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Timing;
