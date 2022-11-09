import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import Buttons from "./Buttons";
import { TextField } from "@mui/material";

const Timing = ({ data }) => {
	const [monTimings, setMonTimings] = useState(
		data.timings.monday.open === false
			? "Closed"
			: data.timings.monday.isSetHours === false
			? "Open all day"
			: `Open from ${data.timings.monday.time.start} to ${data.timings.monday.time.end}`
	);
	let tmp_monTimings =
		data.timings.monday.open === false
			? "Closed"
			: data.timings.monday.isSetHours === false
			? "Open all day"
			: `Open from ${data.timings.monday.time.start} to ${data.timings.monday.time.end}`;
	const handleClickMonTimings = (e) => {
		tmp_monTimings = e.target.value;
	};
	const handleSaveMonTimings = () => {
		console.log("Edit data in backend");
		tmp_monTimings = monTimings;
	};
	const handleDiscardMonTimings = () => {
		setMonTimings(tmp_monTimings);
	};

	const [tueTimings, setTueTimings] = useState(
		data.timings.tuesday.open === false
			? "Closed"
			: data.timings.tuesday.isSetHours === false
			? "Open all day"
			: `Open from ${data.timings.tuesday.time.start} to ${data.timings.tuesday.time.end}`
	);
	let tmp_tueTimings =
		data.timings.tuesday.open === false
			? "Closed"
			: data.timings.tuesday.isSetHours === false
			? "Open all day"
			: `Open from ${data.timings.tuesday.time.start} to ${data.timings.tuesday.time.end}`;
	const handleClickTueTimings = (e) => {
		tmp_tueTimings = e.target.value;
	};
	const handleSaveTueTimings = () => {
		console.log("Edit data in backend");
		tmp_tueTimings = tueTimings;
	};
	const handleDiscardTueTimings = () => {
		setTueTimings(tmp_tueTimings);
	};

	const [wedTimings, setWedTimings] = useState(
		data.timings.wednesday.open === false
			? "Closed"
			: data.timings.wednesday.isSetHours === false
			? "Open all day"
			: `Open from ${data.timings.wednesday.time.start} to ${data.timings.wednesday.time.end}`
	);
	let tmp_wedTimings =
		data.timings.wednesday.open === false
			? "Closed"
			: data.timings.wednesday.isSetHours === false
			? "Open all day"
			: `Open from ${data.timings.wednesday.time.start} to ${data.timings.wednesday.time.end}`;
	const handleClickWedTimings = (e) => {
		tmp_wedTimings = e.target.value;
	};
	const handleSaveWedTimings = () => {
		console.log("Edit data in backend");
		tmp_wedTimings = wedTimings;
	};
	const handleDiscardWedTimings = () => {
		setWedTimings(tmp_wedTimings);
	};

	const [thuTimings, setThuTimings] = useState(
		data.timings.thursday.open === false
			? "Closed"
			: data.timings.thursday.isSetHours === false
			? "Open all day"
			: `Open from ${data.timings.thursday.time.start} to ${data.timings.thursday.time.end}`
	);
	let tmp_thuTimings =
		data.timings.thursday.open === false
			? "Closed"
			: data.timings.thursday.isSetHours === false
			? "Open all day"
			: `Open from ${data.timings.thursday.time.start} to ${data.timings.thursday.time.end}`;
	const handleClickThuTimings = (e) => {
		tmp_thuTimings = e.target.value;
	};
	const handleSaveThuTimings = () => {
		console.log("Edit data in backend");
		tmp_thuTimings = thuTimings;
	};
	const handleDiscardThuTimings = () => {
		setThuTimings(tmp_thuTimings);
	};

	const [friTimings, setFriTimings] = useState(
		data.property_desc.location_type
	);
	let tmp_friTimings = data.property_desc.location_type;
	const handleClickFriTimings = (e) => {
		tmp_friTimings = e.target.value;
	};
	const handleSaveFriTimings = () => {
		console.log("Edit data in backend");
		tmp_friTimings = friTimings;
	};
	const handleDiscardFriTimings = () => {
		setFriTimings(tmp_friTimings);
	};

	const [satTimings, setSatTimings] = useState(
		data.timings.saturday.open === false
			? "Closed"
			: data.timings.saturday.isSetHours === false
			? "Open all day"
			: `Open from ${data.timings.saturday.time.start} to ${data.timings.saturday.time.end}`
	);
	let tmp_satTimings =
		data.timings.saturday.open === false
			? "Closed"
			: data.timings.saturday.isSetHours === false
			? "Open all day"
			: `Open from ${data.timings.saturday.time.start} to ${data.timings.saturday.time.end}`;
	const handleClickSatTimings = (e) => {
		tmp_satTimings = e.target.value;
	};
	const handleSaveSatTimings = () => {
		console.log("Edit data in backend");
		tmp_satTimings = satTimings;
	};
	const handleDiscardSatTimings = () => {
		setSatTimings(tmp_satTimings);
	};

	const [sunTimings, setSunTimings] = useState(
		data.timings.sunday.open === false
			? "Closed"
			: data.timings.sunday.isSetHours === false
			? "Open all day"
			: `Open from ${data.timings.sunday.time.start} to ${data.timings.sunday.time.end}`
	);
	let tmp_sunTimings =
		data.timings.sunday.open === false
			? "Closed"
			: data.timings.sunday.isSetHours === false
			? "Open all day"
			: `Open from ${data.timings.sunday.time.start} to ${data.timings.sunday.time.end}`;
	const handleClickSunTimings = (e) => {
		tmp_sunTimings = e.target.value;
	};
	const handleSaveSunTimings = () => {
		console.log("Edit data in backend");
		tmp_sunTimings = sunTimings;
	};
	const handleDiscardSunTimings = () => {
		setSunTimings(tmp_sunTimings);
	};

	return (
		<div>
			<div className="location-primary-heading">Timings</div>
			<div className="location-content">
				<div className="location-subcontent-wrapper">
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
							marginBottom: "0px",
						}}>
						<GoPrimitiveDot color="#ff6767" />
						<div className="location-secondary-heading ">Monday:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={monTimings}
							onClick={handleClickMonTimings}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setMonTimings(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons
							save={handleSaveMonTimings}
							discard={handleDiscardMonTimings}
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
						<GoPrimitiveDot color="#ff6767" />
						<div className="location-secondary-heading ">Tuesday:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={tueTimings}
							onClick={handleClickTueTimings}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setTueTimings(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons
							save={handleSaveTueTimings}
							discard={handleDiscardTueTimings}
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
						<GoPrimitiveDot color="#ff6767" />
						<div className="location-secondary-heading ">Wednesday:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={wedTimings}
							onClick={handleClickWedTimings}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setWedTimings(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons
							save={handleSaveWedTimings}
							discard={handleDiscardWedTimings}
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
						<GoPrimitiveDot color="#ff6767" />
						<div className="location-secondary-heading ">Thursday:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={thuTimings}
							onClick={handleClickThuTimings}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setThuTimings(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons
							save={handleSaveThuTimings}
							discard={handleDiscardThuTimings}
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
						<GoPrimitiveDot color="#ff6767" />
						<div className="location-secondary-heading ">Friday:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={friTimings}
							onClick={handleClickFriTimings}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setFriTimings(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons
							save={handleSaveFriTimings}
							discard={handleDiscardFriTimings}
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
						<GoPrimitiveDot color="#ff6767" />
						<div className="location-secondary-heading ">Saturday:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={satTimings}
							onClick={handleClickSatTimings}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setSatTimings(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons
							save={handleSaveSatTimings}
							discard={handleDiscardSatTimings}
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
						<GoPrimitiveDot color="#ff6767" />
						<div className="location-secondary-heading ">Sunday:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={sunTimings}
							onClick={handleClickSunTimings}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setSunTimings(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons
							save={handleSaveSunTimings}
							discard={handleDiscardSunTimings}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Timing;
