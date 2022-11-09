import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import Buttons from "./Buttons";
import { TextField } from "@mui/material";

const Pricing = ({ data }) => {
	const [corp_availability, setCorp_availability] = useState(
		data.pricing.corporate.isPresent === false ? "Not Available" : "Available"
	);
	let tmp_corp_availability =
		data.pricing.corporate.isPresent === false ? "Not Available" : "Available";
	const handleClickCorp_availability = (e) => {
		tmp_corp_availability = e.target.value;
	};
	const handleSaveCorp_availability = () => {
		console.log("Edit data in backend");
		tmp_corp_availability = corp_availability;
	};
	const handleDiscardCorp_availability = () => {
		setCorp_availability(tmp_corp_availability);
	};

	const [corp_hr, setCorp_hr] = useState(data.pricing.corporate.hourly_rate);
	let tmp_corp_hr = data.pricing.corporate.hourly_rate;
	const handleClickCorp_hr = (e) => {
		tmp_corp_hr = e.target.value;
	};
	const handleSaveCorp_hr = () => {
		console.log("Edit data in backend");
		tmp_corp_hr = corp_hr;
	};
	const handleDiscardCorp_hr = () => {
		console.log(tmp_corp_hr);
		setCorp_hr(tmp_corp_hr);
	};

	const [corp_type, setCorp_type] = useState(data.pricing.corporate.type);
	let tmp_corp_type = data.pricing.corporate.type;
	const handleClickCorp_type = (e) => {
		tmp_corp_type = e.target.value;
	};
	const handleSaveCorp_type = () => {
		console.log("Edit data in backend");
		tmp_corp_type = corp_type;
	};
	const handleDiscardCorp_type = () => {
		setCorp_type(tmp_corp_type);
	};

	const [film_availability, setFilm_availability] = useState(
		data.pricing.film_webseries_ad.isPresent === false
			? "Not Available"
			: "Available"
	);
	let tmp_film_availability =
		data.pricing.film_webseries_ad.isPresent === false
			? "Not Available"
			: "Available";
	const handleClickFilm_availability = (e) => {
		tmp_film_availability = e.target.value;
	};
	const handleSaveFilm_availability = () => {
		console.log("Edit data in backend");
		tmp_film_availability = film_availability;
	};
	const handleDiscardFilm_availability = () => {
		setFilm_availability(tmp_film_availability);
	};

	const [film_hr, setFilm_hr] = useState(
		data.pricing.film_webseries_ad.hourly_rate
	);
	let tmp_film_hr = data.pricing.film_webseries_ad.hourly_rate;
	const handleClickFilm_hr = (e) => {
		tmp_film_hr = e.target.value;
	};
	const handleSaveFilm_hr = () => {
		console.log("Edit data in backend");
		tmp_film_hr = film_hr;
	};
	const handleDiscardFilm_hr = () => {
		console.log(tmp_film_hr);
		setFilm_hr(tmp_film_hr);
	};

	const [film_type, setFilm_type] = useState(
		data.pricing.film_webseries_ad.type
	);
	let tmp_film_type = data.pricing.film_webseries_ad.type;
	const handleClickFilm_type = (e) => {
		tmp_film_type = e.target.value;
	};
	const handleSaveFilm_type = () => {
		console.log("Edit data in backend");
		tmp_film_type = film_type;
	};
	const handleDiscardFilm_type = () => {
		setFilm_type(tmp_film_type);
	};

	const [Tv_availability, setTv_availability] = useState(
		data.pricing.tv_series_other.isPresent === false
			? "Not Available"
			: "Available"
	);
	let tmp_Tv_availability =
		data.pricing.tv_series_other.isPresent === false
			? "Not Available"
			: "Available";
	const handleClickTv_availability = (e) => {
		tmp_Tv_availability = e.target.value;
	};
	const handleSaveTv_availability = () => {
		console.log("Edit data in backend");
		tmp_Tv_availability = Tv_availability;
	};
	const handleDiscardTv_availability = () => {
		setTv_availability(tmp_Tv_availability);
	};

	const [Tv_hr, setTv_hr] = useState(data.pricing.tv_series_other.hourly_rate);
	let tmp_Tv_hr = data.pricing.tv_series_other.hourly_rate;
	const handleClickTv_hr = (e) => {
		tmp_Tv_hr = e.target.value;
	};
	const handleSaveTv_hr = () => {
		console.log("Edit data in backend");
		tmp_Tv_hr = Tv_hr;
	};
	const handleDiscardTv_hr = () => {
		console.log(tmp_Tv_hr);
		setTv_hr(tmp_Tv_hr);
	};

	const [Tv_type, setTv_type] = useState(data.pricing.tv_series_other.type);
	let tmp_Tv_type = data.pricing.tv_series_other.type;
	const handleClickTv_type = (e) => {
		tmp_Tv_type = e.target.value;
	};
	const handleSaveTv_type = () => {
		console.log("Edit data in backend");
		tmp_Tv_type = Tv_type;
	};
	const handleDiscardTv_type = () => {
		setTv_type(tmp_Tv_type);
	};

	return (
		<div>
			<div className="location-primary-heading">Corporate Pricings</div>
			<div className="location-content">
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading ">Availability:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={corp_availability}
							onClick={handleClickCorp_availability}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setCorp_availability(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons
							save={handleSaveCorp_availability}
							discard={handleDiscardCorp_availability}
						/>
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading">Hourly Rates:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={corp_hr}
							onClick={handleClickCorp_hr}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setCorp_hr(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons save={handleSaveCorp_hr} discard={handleDiscardCorp_hr} />
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading ">Type:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={corp_type}
							onClick={handleClickCorp_type}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setCorp_type(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons
							save={handleSaveCorp_type}
							discard={handleDiscardCorp_type}
						/>
					</div>
				</div>
			</div>
			<div className="location-primary-heading">
				Film/Web-Series/Ad Pricings
			</div>
			<div className="location-content">
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading ">Availability:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={film_availability}
							onClick={handleClickFilm_availability}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setFilm_availability(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons
							save={handleSaveFilm_availability}
							discard={handleDiscardFilm_availability}
						/>
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading ">Hourly Rates:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={film_hr}
							onClick={handleClickFilm_hr}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setFilm_hr(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons save={handleSaveFilm_hr} discard={handleDiscardFilm_hr} />
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading ">Type:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={film_type}
							onClick={handleClickFilm_type}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setFilm_type(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons
							save={handleSaveFilm_type}
							discard={handleDiscardFilm_type}
						/>
					</div>
				</div>
			</div>
			<div className="location-primary-heading">TV-Shows/Others Pricings</div>
			<div className="location-content">
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading ">Availability:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={Tv_availability}
							onClick={handleClickTv_availability}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setTv_availability(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons
							save={handleSaveTv_availability}
							discard={handleDiscardTv_availability}
						/>
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading ">Hourly Rates:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={Tv_hr}
							onClick={handleClickTv_hr}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setTv_hr(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons save={handleSaveTv_hr} discard={handleDiscardTv_hr} />
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading ">Type:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={Tv_type}
							onClick={handleClickTv_type}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setTv_type(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons save={handleSaveTv_type} discard={handleDiscardTv_type} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
