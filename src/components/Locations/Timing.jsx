import React, { useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import Buttons from "./Buttons";
import { TextField } from "@mui/material";
import { updateLocation } from "../../services/api";
import { toast } from "react-toastify";
import "react-toggle/style.css"
import Toggle from "react-toggle";

const Timing = ({ data, fetchData }) => {
	console.log(data.timings);

	const [monOpen, setMonOpen] = useState(
		data?.timings?.monday?.open ? "Open" : "Closed"
	);
	const [monTimings, setMonTimings] = useState(
		data?.timings?.monday?.isSetHours === false
			? "Open all day"
			: data?.timings?.monday?.time
	);
	const [tueOpen, setTueOpen] = useState(
		data?.timings?.tuesday?.open ? "Open" : "Closed"
	);
	const [tueTimings, setTueTimings] = useState(
		data?.timings?.tuesday?.isSetHours === false
			? "Open all day"
			: data?.timings?.tuesday.time
	);
	const [wedOpen, setWedOpen] = useState(
		data?.timings?.wednesday?.open ? "Open" : "Closed"
	);
	const [wedTimings, setWedTimings] = useState(
		data?.timings?.wednesday?.isSetHours === false
			? "Open all day"
			: data?.timings?.wednesday.time
	);
	const [thuOpen, setThuOpen] = useState(
		data?.timings?.thursday?.open ? "Open" : "Closed"
	);
	const [thuTimings, setThuTimings] = useState(
		data?.timings?.thursday?.isSetHours === false
			? "Open all day"
			: data?.timings?.thursday.time
	);
	const [friOpen, setFriOpen] = useState(
		data?.timings?.friday?.open ? "Open" : "Closed"
	);
	const [friTimings, setFriTimings] = useState(
		data?.timings?.friday?.isSetHours === false
			? "Open all day"
			: data?.timings?.friday.time
	);
	const [satOpen, setSatOpen] = useState(
		data?.timings?.saturday?.open ? "Open" : "Closed"
	);
	const [satTimings, setSatTimings] = useState(
		data?.timings?.saturday?.isSetHours === false
			? "Open all day"
			: data?.timings?.saturday.time
	);
	const [sunOpen, setSunOpen] = useState(
		data?.timings?.sunday?.open ? "Open" : "Closed"
	);
	const [sunTimings, setSunTimings] = useState(
		data?.timings?.sunday?.isSetHours === false
			? "Open all day"
			: data?.timings?.sunday.time
	);
	const initialState = {
		monday: data?.timings?.monday,
		tuesday: data?.timings?.tuesday,
		wednesday: data?.timings?.wednesday,
		thursday: data?.timings?.thursday,
		friday: data?.timings?.friday,
		saturday: data?.timings?.saturday,
		sunday: data?.timings?.sunday,
	};

	const [timings, setTimings] = useState(initialState);

	const changeMon = (e) => {
		setTimings({
			...timings,
			monday: {
				open: timings.monday.open,
				isSetHours: timings.open.isSetHours,
				time: {
					start: timings.open.time.start,
					end: timings.open.time.end
				},
			},
		});
	};

	const handleSave = async (e) => {
		e.preventDefault();
		if (
			!timings?.monday &&
			!timings?.tuesday &&
			!timings?.wednesday &&
			!timings?.thursday &&
			!timings?.friday &&
			!timings?.saturday &&
			!timings?.sunday
		)
			return toast.error("Please fill timings!!!");
		const form = {
			newLocData: {
				...data,
				timings,
			},
			location_id: data.location_id,
		};
		console.log(form);
		// try {
		// 	const response = await updateLocation(form);
		// 	// window.location.reload(true);
		// 	toast.success(response.data);
		// } catch (error) {
		// 	toast.error(error.response.data);
		// }
	};

	const handleDiscard = (e) => {
		setTimings(initialState);
	};


const handleToggle=(day)=>{
	if(day==="monday"){
		setMonTimings(timings.monday?.isSetHours === false
			? data.timings?.monday?.time:"Open all day" )
		setTimings({
			...timings,
			monday: {
				open: timings.monday.open,
				isSetHours: !(timings.monday.isSetHours),
				time: {
					start: timings.tuesday.time.start,
					end: timings.tuesday.time.end}
				}
		});
	}
	if(day==="tuesday"){
		setTueTimings(timings.tuesday?.isSetHours === false
			? data.timings?.tuesday?.time:"Open all day" )
		setTimings({
			...timings,
			tuesday: {
				open: timings.tuesday.open,
				isSetHours: !(timings.tuesday.isSetHours),
				time:{
					start: timings.tuesday.time.start,
					end: timings.tuesday.time.end}
			},
		});
	}
	if(day==="wednesday"){
		setWedTimings(timings.wednesday?.isSetHours === false
			? data?.timings?.wednesday?.time:"Open all day" )
		setTimings({
			...timings,
			wednesday: {
				open: timings.wednesday.open,
				isSetHours: !(timings.wednesday.isSetHours),
				time: {
					start: timings.wednesday.time.start,
					end: timings.wednesday.time.end
				},
			},
		});
	}
	if(day==="thursday"){
		setThuTimings(timings.thursday?.isSetHours === false
			? data?.timings?.thursday?.time:"Open all day" )
		setTimings({
			...timings,
			thursday: {
				open: timings.thursday.open,
				isSetHours: !(timings.thursday.isSetHours),
				time: {
					start: timings.thursday.time.start,
					end: timings.thursday.time.end
				},
			},
		});
	}
	if(day==="friday"){
		setFriTimings(timings.friday?.isSetHours === false
			? data?.timings?.friday?.time:"Open all day" )
		setTimings({
			...timings,
			friday: {
				open: timings.friday.open,
				isSetHours: !(timings.friday.isSetHours),
				time: {
					start: timings.friday.time.start,
					end: timings.friday.time.end
				},
			},
		});
	}
	if(day==="saturday"){
		setSatTimings(timings.saturday?.isSetHours === false
			? data?.timings?.saturday?.time:"Open all day" )
		setTimings({
			...timings,
			saturday: {
				open: timings.saturday.open,
				isSetHours: !(timings.saturday.isSetHours),
				time: {
					start: timings.saturday.time.start,
					end: timings.saturday.time.end
				},
			},
		});
	}
	if(day==="sunday"){
		setSunTimings(timings.sunday?.isSetHours === false
			? data?.timings?.sunday?.time:"Open all day" )
		setTimings({
			...timings,
			sunday: {
				open: timings.sunday.open,
				isSetHours: !(timings.sunday.isSetHours),
				time: {
					start: timings.sunday.time.start,
					end: timings.sunday.time.end
				},
			},
		});
	}
	
}

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
						}}
					>
						{timings?.monday?.open ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}
						<div className="location-secondary-heading ">Monday:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={monOpen}
							// onClick={handleClickMonTimings}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								// console.log(e.target.value);
								// setMonTimings(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
					</div>
					<div className="location-info">
						<div style={{display:"flex",padding:".5rem 0 .5rem 1rem"}}>Is Open 24 hrs?
						<span style={{marginLeft:"1rem"}}>
						<Toggle
    					defaultChecked={!(timings?.monday?.isSetHours)}
    					icons={false}
   					 onChange={()=>handleToggle("monday")} />
					 </span>
						</div>
					</div>
					{timings?.monday?.isSetHours ? (
						<>
						<div className="location-info">
							<TextField
								id="filled-select-currency"
								value={monTimings.start}
								// onClick={handleClickMonTimings}
								fullWidth
								size="small"
								sx={{
									padding: "8px",
								}}
								onChange={(e) => {
									// console.log(e.target.value);
									// setMonTimings(e.target.value);
								}}
								variant="outlined"
							/>
							<TextField
								id="filled-select-currency"
								value={monTimings.end}
								// onClick={handleClickMonTimings}
								fullWidth
								size="small"
								sx={{
									padding: "8px",
								}}
								onChange={(e) => {
									// console.log(e.target.value);
									// setMonTimings(e.target.value);
								}}
								variant="outlined"
							/>
							<Buttons save={handleSave} discard={handleDiscard} />
						</div>
						{/* <div className="location-info">
								<TextField
									id="filled-select-currency"
									value={monTimings}
									// onClick={handleClickMonTimings}
									fullWidth
									size="small"
									sx={{
										padding: "8px",
									}}
									onChange={(e) => {
										// console.log(e.target.value);
										// setMonTimings(e.target.value);
									}}
									variant="outlined"
								/>
								<Buttons save={handleSave} discard={handleDiscard} />
							</div> */}
						</>
					) : (
						timings?.monday?.open && (
							<div className="location-info">
								<TextField
									id="filled-select-currency"
									value={monTimings}
									// onClick={handleClickMonTimings}
									fullWidth
									size="small"
									sx={{
										padding: "8px",
									}}
									onChange={(e) => {
										// console.log(e.target.value);
										// setMonTimings(e.target.value);
									}}
									variant="outlined"
								/>
								<Buttons save={handleSave} discard={handleDiscard} />
							</div>
						)
					)}
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
						{timings?.tuesday?.open ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Tuesday:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={tueOpen}
							// onClick={handleClickTueTimings}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								// console.log(e.target.value);
								// setTueTimings(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
						
					</div>
					<div className="location-info">
						<div style={{display:"flex",padding:".5rem 0 .5rem 1rem"}}>Is Open 24 hrs?
						<span style={{marginLeft:"1rem"}}>
						<Toggle
    					defaultChecked={!(timings.tuesday?.isSetHours)}
    					icons={false}
   					 onChange={()=>handleToggle("tuesday")} />
					 </span>
						</div>
					</div>
					{timings?.tuesday?.isSetHours ? (
						<div className="location-info">
							<TextField
								id="filled-select-currency"
								value={tueTimings.start}
								// onClick={handleClickMonTimings}
								fullWidth
								size="small"
								sx={{
									padding: "8px",
								}}
								onChange={(e) => {
									// console.log(e.target.value);
									// setMonTimings(e.target.value);
								}}
								variant="outlined"
							/>
							<TextField
								id="filled-select-currency"
								value={tueTimings.end}
								// onClick={handleClickMonTimings}
								fullWidth
								size="small"
								sx={{
									padding: "8px",
								}}
								onChange={(e) => {
									// console.log(e.target.value);
									// setMonTimings(e.target.value);
								}}
								variant="outlined"
							/>
							<Buttons save={handleSave} discard={handleDiscard} />
						</div>
					) : (
						timings?.tuesday?.open && (
							<div className="location-info">
								<TextField
									id="filled-select-currency"
									value={tueTimings}
									// onClick={handleClickMonTimings}
									fullWidth
									size="small"
									sx={{
										padding: "8px",
									}}
									onChange={(e) => {
										// console.log(e.target.value);
										// setMonTimings(e.target.value);
									}}
									variant="outlined"
								/>
								<Buttons save={handleSave} discard={handleDiscard} />
							</div>
						)
					)}
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
						{timings?.wednesday?.open ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Wednesday:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={wedOpen}
							// onClick={handleClickWedTimings}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								// console.log(e.target.value);
								// setWedTimings(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
					</div>
					<div className="location-info">
						<div style={{display:"flex",padding:".5rem 0 .5rem 1rem"}}>Is Open 24 hrs?
						<span style={{marginLeft:"1rem"}}>
						<Toggle
    					defaultChecked={!(timings.wednesday?.isSetHours)}
    					icons={false}
   					 onChange={()=>handleToggle("wednesday")} />
					 </span>
						</div>
					</div>
					{timings?.wednesday?.isSetHours ? (
						<div className="location-info">
							<TextField
								id="filled-select-currency"
								value={wedTimings.start}
								// onClick={handleClickMonTimings}
								fullWidth
								size="small"
								sx={{
									padding: "8px",
								}}
								onChange={(e) => {
									// console.log(e.target.value);
									// setMonTimings(e.target.value);
								}}
								variant="outlined"
							/>
							<TextField
								id="filled-select-currency"
								value={wedTimings.end}
								// onClick={handleClickMonTimings}
								fullWidth
								size="small"
								sx={{
									padding: "8px",
								}}
								onChange={(e) => {
									// console.log(e.target.value);
									// setMonTimings(e.target.value);
								}}
								variant="outlined"
							/>
							<Buttons save={handleSave} discard={handleDiscard} />
						</div>
					) : (
						timings?.wednesday?.open && (
							<div className="location-info">
								<TextField
									id="filled-select-currency"
									value={wedTimings}
									// onClick={handleClickMonTimings}
									fullWidth
									size="small"
									sx={{
										padding: "8px",
									}}
									onChange={(e) => {
										// console.log(e.target.value);
										// setMonTimings(e.target.value);
									}}
									variant="outlined"
								/>
								<Buttons save={handleSave} discard={handleDiscard} />
							</div>
						)
					)}
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
					
						{timings?.thursday?.open ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Thursday:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={thuOpen}
							// onClick={handleClickThuTimings}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								// console.log(e.target.value);
								// setThuTimings(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
					</div>
					<div className="location-info">
						<div style={{display:"flex",padding:".5rem 0 .5rem 1rem"}}>Is Open 24 hrs?
						<span style={{marginLeft:"1rem"}}>
						<Toggle
    					defaultChecked={!(timings.thursday?.isSetHours)}
    					icons={false}
   					 onChange={()=>handleToggle("thursday")} />
					 </span>
						</div>
					</div>
					{timings?.thursday?.isSetHours ? (
						<div className="location-info">
							<TextField
								id="filled-select-currency"
								value={thuTimings.start}
								// onClick={handleClickMonTimings}
								fullWidth
								size="small"
								sx={{
									padding: "8px",
								}}
								onChange={(e) => {
									// console.log(e.target.value);
									// setMonTimings(e.target.value);
								}}
								variant="outlined"
							/>
							<TextField
								id="filled-select-currency"
								value={thuTimings.end}
								// onClick={handleClickMonTimings}
								fullWidth
								size="small"
								sx={{
									padding: "8px",
								}}
								onChange={(e) => {
									// console.log(e.target.value);
									// setMonTimings(e.target.value);
								}}
								variant="outlined"
							/>
							<Buttons save={handleSave} discard={handleDiscard} />
						</div>
					) : (
						timings?.thursday?.open && (
							<div className="location-info">
								<TextField
									id="filled-select-currency"
									value={thuTimings}
									// onClick={handleClickMonTimings}
									fullWidth
									size="small"
									sx={{
										padding: "8px",
									}}
									onChange={(e) => {
										// console.log(e.target.value);
										// setMonTimings(e.target.value);
									}}
									variant="outlined"
								/>
								<Buttons save={handleSave} discard={handleDiscard} />
							</div>
						)
					)}
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
						{timings?.friday?.open ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Friday:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={friOpen}
							// onClick={handleClickFriTimings}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								// console.log(e.target.value);
								// setFriTimings(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
					</div>
					<div className="location-info">
						<div style={{display:"flex",padding:".5rem 0 .5rem 1rem"}}>Is Open 24 hrs?
						<span style={{marginLeft:"1rem"}}>
						<Toggle
    					defaultChecked={!(timings.friday?.isSetHours)}
    					icons={false}
   					 onChange={()=>handleToggle("friday")} />
					 </span>
						</div>
					</div>
					{timings?.friday?.isSetHours ? (
						<div className="location-info">
							<TextField
								id="filled-select-currency"
								value={friTimings.start}
								// onClick={handleClickMonTimings}
								fullWidth
								size="small"
								sx={{
									padding: "8px",
								}}
								onChange={(e) => {
									// console.log(e.target.value);
									// setMonTimings(e.target.value);
								}}
								variant="outlined"
							/>
							<TextField
								id="filled-select-currency"
								value={friTimings.end}
								// onClick={handleClickMonTimings}
								fullWidth
								size="small"
								sx={{
									padding: "8px",
								}}
								onChange={(e) => {
									// console.log(e.target.value);
									// setMonTimings(e.target.value);
								}}
								variant="outlined"
							/>
							<Buttons save={handleSave} discard={handleDiscard} />
						</div>
					) : (
						timings?.friday?.open && (
							<div className="location-info">
								<TextField
									id="filled-select-currency"
									value={friTimings}
									// onClick={handleClickMonTimings}
									fullWidth
									size="small"
									sx={{
										padding: "8px",
									}}
									onChange={(e) => {
										// console.log(e.target.value);
										// setMonTimings(e.target.value);
									}}
									variant="outlined"
								/>
								<Buttons save={handleSave} discard={handleDiscard} />
							</div>
						)
					)}
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
						{timings?.saturday?.open ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Saturday:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={satOpen}
							// onClick={handleClickSatTimings}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								// console.log(e.target.value);
								// setSatTimings(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
					</div>
					<div className="location-info">
						<div style={{display:"flex",padding:".5rem 0 .5rem 1rem"}}>Is Open 24 hrs?
						<span style={{marginLeft:"1rem"}}>
						<Toggle
    					defaultChecked={!(timings.saturday?.isSetHours)}
    					icons={false}
   					 onChange={()=>handleToggle("saturday")} />
					 </span>
						</div>
					</div>
					{timings?.saturday?.isSetHours ? (
						<div className="location-info">
							<TextField
								id="filled-select-currency"
								value={satTimings.start}
								// onClick={handleClickMonTimings}
								fullWidth
								size="small"
								sx={{
									padding: "8px",
								}}
								onChange={(e) => {
									// console.log(e.target.value);
									// setMonTimings(e.target.value);
								}}
								variant="outlined"
							/>
							<TextField
								id="filled-select-currency"
								value={satTimings.end}
								// onClick={handleClickMonTimings}
								fullWidth
								size="small"
								sx={{
									padding: "8px",
								}}
								onChange={(e) => {
									// console.log(e.target.value);
									// setMonTimings(e.target.value);
								}}
								variant="outlined"
							/>
							<Buttons save={handleSave} discard={handleDiscard} />
						</div>
					) : (
						timings?.saturday?.open && (
							<div className="location-info">
								<TextField
									id="filled-select-currency"
									value={satTimings}
									// onClick={handleClickMonTimings}
									fullWidth
									size="small"
									sx={{
										padding: "8px",
									}}
									onChange={(e) => {
										// console.log(e.target.value);
										// setMonTimings(e.target.value);
									}}
									variant="outlined"
								/>
								<Buttons save={handleSave} discard={handleDiscard} />
							</div>
						)
					)}
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
						{timings?.sunday?.open ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Sunday:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={sunOpen}
							// onClick={handleClickSunTimings}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								// console.log(e.target.value);
								// setSunTimings(e.target.value);
							}}
							variant="outlined"
						/>
						<Buttons save={handleSave} discard={handleDiscard} />
					</div>
					<div className="location-info">
						<div style={{display:"flex",padding:".5rem 0 .5rem 1rem"}}>Is Open 24 hrs?
						<span style={{marginLeft:"1rem"}}>
						<Toggle
    					defaultChecked={!(timings.sunday?.isSetHours)}
    					icons={false}
   					 onChange={()=>handleToggle("sunday")} />
					 </span>
						</div>
					</div>
					{timings?.sunday?.isSetHours ? (
						<div className="location-info">
							<TextField
								id="filled-select-currency"
								value={sunTimings.start}
								// onClick={handleClickMonTimings}
								fullWidth
								size="small"
								sx={{
									padding: "8px",
								}}
								onChange={(e) => {
									// console.log(e.target.value);
									// setMonTimings(e.target.value);
								}}
								variant="outlined"
							/>
							<TextField
								id="filled-select-currency"
								value={sunTimings.end}
								// onClick={handleClickMonTimings}
								fullWidth
								size="small"
								sx={{
									padding: "8px",
								}}
								onChange={(e) => {
									// console.log(e.target.value);
									// setMonTimings(e.target.value);
								}}
								variant="outlined"
							/>
							<Buttons save={handleSave} discard={handleDiscard} />
						</div>
					) : (
						timings?.sunday?.open && (
							<div className="location-info">
								<TextField
									id="filled-select-currency"
									value={sunTimings}
									// onClick={handleClickMonTimings}
									fullWidth
									size="small"
									sx={{
										padding: "8px",
									}}
									onChange={(e) => {
										// console.log(e.target.value);
										// setMonTimings(e.target.value);
									}}
									variant="outlined"
								/>
								<Buttons save={handleSave} discard={handleDiscard} />
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default Timing;
