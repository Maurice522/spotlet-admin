import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import Buttons from "./Buttons";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";
import { updateLocation } from "../../services/api";

const Pricing = ({ data, fetchData }) => {
	// console.log(data);

	const initialState = {
		cleaningFee: data?.pricing?.cleaningFee,
		corporate: {
			hourly_rate: data?.pricing?.corporate?.hourly_rate,
			isPresent: data?.pricing?.corporate?.isPresent,
		},
		film_webseries_ad: {
			hourly_rate: data?.pricing?.film_webseries_ad?.hourly_rate,
			isPresent: data?.pricing?.film_webseries_ad?.isPresent,
		},
		individual: {
			hourly_rate: data?.pricing?.individual?.hourly_rate,
			isPresent: data?.pricing?.individual?.isPresent,
		},
		tv_series_other: {
			hourly_rate: data?.pricing?.tv_series_other?.hourly_rate,
			isPresent: data?.pricing?.tv_series_other?.isPresent,
		},
	};

	const [pricing, setPricing] = useState(initialState);

	const cleaningFeeChange = (e) => {
		setPricing({
			...pricing,
			cleaningFee: e.target.value,
		});
	};

	const corporateChange = (e) => {
		setPricing({
			...pricing,
			corporate: {
				...pricing.corporate,
				[e.target.name]: e.target.value,
			},
		});
	};

	const film_webseries_adChange = (e) => {
		setPricing({
			...pricing,
			film_webseries_ad: {
				...pricing.film_webseries_ad,
				[e.target.name]: e.target.value,
			},
		});
	};

	const individualChange = (e) => {
		setPricing({
			...pricing,
			individual: {
				...pricing.individual,
				[e.target.name]: e.target.value,
			},
		});
	};

	const tv_series_otherChange = (e) => {
		setPricing({
			...pricing,
			tv_series_other: {
				...pricing.tv_series_other,
				[e.target.name]: e.target.value,
			},
		});
	};

	const handleSave = async (e) => {
		e.preventDefault();
		if (
			!pricing?.corporate?.hourly_rate &&
			!pricing?.film_webseries_ad?.hourly_rate &&
			!pricing?.individual?.hourly_rate &&
			!pricing?.tv_series_other?.hourly_rate
		)
			return toast.error("Please fill atleast one pricing!!!");
		const form = {
			newLocData: {
				...data,
				pricing,
			},
			location_id: data.location_id,
		};
		console.log(form);
		try {
			const response = await updateLocation(form);
			await fetchData();
			// window.location.reload(true);
			toast.success(response.data);
		} catch (error) {
			toast.error(error.response.data);
		}
	};

	const handleDiscard = (e) => {
		setPricing(initialState);
	};

	return (
		<div>
			<div className="location-content">
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}
					>
						{pricing.cleaningFee ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Cleaning Fee:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="cleaningFee"
							value={pricing.cleaningFee}
							// onClick={handleClickCorp_availability}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={cleaningFeeChange}
							variant="outlined"
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
					</div>
				</div>
			</div>
			<div className="location-primary-heading">Corporate Pricings</div>
			<div className="location-content">
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}
					>
						{pricing.corporate.isPresent ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Availability:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="isPresent"
							value={pricing.corporate.isPresent}
							// onClick={handleClickCorp_availability}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={corporateChange}
							variant="outlined"
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}
					>
						{pricing.corporate.isPresent ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading">Hourly Rates:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="hourly_rate"
							value={pricing.corporate.hourly_rate}
							// onClick={handleClickCorp_hr}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={corporateChange}
							variant="outlined"
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
					</div>
				</div>
				{/* <div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}
					>
						<GoPrimitiveDot color="#6439ff" />
						<div className="location-secondary-heading ">Type:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							// value={corp_type}
							// onClick={handleClickCorp_type}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								// setCorp_type(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons
							// save={handleSaveCorp_type}
							// discard={handleDiscardCorp_type}
						/>
					</div>
				</div> */}
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
						}}
					>
						{pricing.film_webseries_ad.isPresent ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Availability:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="isPresent"
							value={pricing.film_webseries_ad.isPresent}
							// onClick={handleClickFilm_availability}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={film_webseries_adChange}
							variant="outlined"
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}
					>
						{pricing.film_webseries_ad.isPresent ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Hourly Rates:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="hourly_rate"
							value={pricing.film_webseries_ad.hourly_rate}
							// onClick={handleClickFilm_hr}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={film_webseries_adChange}
							variant="outlined"
						/>
						<Buttons save={handleSave} discard={handleSave} />
					</div>
				</div>
				{/* <div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}
					>
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
				</div> */}
			</div>
			<div className="location-primary-heading">Individual Pricings</div>
			<div className="location-content">
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}
					>
						{pricing.individual.isPresent ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Availability:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="isPresent"
							value={pricing.individual.isPresent}
							// onClick={handleClickTv_availability}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={individualChange}
							variant="outlined"
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}
					>
						{pricing.individual.isPresent ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Hourly Rates:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="hourly_rate"
							value={pricing.individual.hourly_rate}
							// onClick={handleClickTv_hr}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={individualChange}
							variant="outlined"
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
					</div>
				</div>
				{/* <div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}
					>
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
				</div> */}
			</div>
			<div className="location-primary-heading">TV-Series/Others Pricings</div>
			<div className="location-content">
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}
					>
						{pricing.tv_series_other.isPresent ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Availability:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="isPresent"
							value={pricing.tv_series_other.isPresent}
							// onClick={handleClickTv_availability}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={tv_series_otherChange}
							variant="outlined"
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
					</div>
				</div>
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}
					>
						{pricing.tv_series_other.isPresent ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Hourly Rates:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							name="hourly_rate"
							value={pricing.tv_series_other.hourly_rate}
							// onClick={handleClickTv_hr}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={tv_series_otherChange}
							variant="outlined"
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
					</div>
				</div>
				{/* <div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}
					>
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
				</div> */}
			</div>
		</div>
	);
};

export default Pricing;
