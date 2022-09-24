import React from "react";

const Photo = ({ data }) => {
	return (
		<div>
			<div className="location-primary-heading">Photo Gallery</div>
			<div className="location-photo-gallery">
				{data.images.map((item, ind) => (
					<img src={item} alt="Location" className="location-photo" key={ind} />
				))}
			</div>
		</div>
	);
};

export default Photo;
