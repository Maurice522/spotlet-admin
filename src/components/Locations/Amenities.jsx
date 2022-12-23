import React, { useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import DeleteIcon from "@mui/icons-material/Delete";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
import { toast } from "react-toastify";
import { updateLocation } from "../../services/api";
import Select from "react-select";

const Amenities = ({ data, fetchData }) => {
	const initialState = data?.amenities;

	const [amenities, setAmenities] = useState(initialState);
	const [amenity, setAmenity] = useState("");

	const [openDelete, setOpenDelete] = useState(false);
	const [openCreate, setOpenCreate] = useState(false);

	const options = [
		{ value: "Air Conditioning", label: "Air Conditioning" },
		{
			value: "Access to public transportation",
			label: " Access to public transportation",
		},
		{ value: "All utilities included", label: " All utilities included" },
		{ value: "Balcony", label: " Balcony" },
		{ value: "Bark Parks", label: " Bark Parks" },
		{ value: "Bike Parking", label: " Bike Parking" },
		{ value: "Business Center", label: " Business Center" },
		{ value: "Cable ready", label: " Cable ready" },
		{
			value: "Ceiling Fans in All Bedrooms",
			label: " Ceiling Fans in All Bedrooms",
		},
		{
			value: "Clubhouse with Lounge Seating",
			label: " Clubhouse with Lounge Seating",
		},
		{ value: "Co-Working Spaces", label: " Co-Working Spaces" },
		{ value: "Community Lounge", label: " Community Lounge" },
		{
			value: "Computer Desks In Each Unit",
			label: " Computer Desks In Each Unit",
		},
		{ value: "Conference Rooms", label: " Conference Rooms" },
		{ value: "Courtyard", label: " Courtyard" },
		{ value: "Covered Parking", label: " Covered Parking" },
		{
			value: "Custom Cabinetry and Large Kitchen Islands",
			label: " Custom Cabinetry and Large Kitchen Islands",
		},
		{
			value: "Custom Colored Accent walls",
			label: " Custom Colored Accent walls",
		},
		{ value: "Dining Room", label: " Dining Room" },
		{ value: "Dishwasher", label: " Dishwasher" },
		{ value: "Dual Sinks", label: " Dual Sinks" },
		{ value: "Fire Pits", label: " Fire Pits" },
		{ value: "Fitness Center", label: " Fitness Center" },
		{
			value: "Fitness Center – Technogym Equipped",
			label: " Fitness Center – Technogym Equipped",
		},
		{ value: "Food Shopping", label: " Food Shopping" },
		{ value: "Frameless Shower Doors", label: " Frameless Shower Doors" },
		{ value: "Furnished apartments", label: " Furnished apartments" },
		{ value: "Garages", label: " Garages" },
		{ value: "Gated Access", label: " Gated Access" },
		{ value: "Golf Simulators", label: " Golf Simulators" },
		{
			value: "Greater Amounts of Storage",
			label: " Greater Amounts of Storage",
		},
		{ value: "Grilling Pavilion", label: " Grilling Pavilion" },
		{ value: "Hair and Nail Salons", label: " Hair and Nail Salons" },
		{
			value: "High-speed internet access",
			label: " High-speed internet access",
		},
		{ value: "In-unit washer and dryer", label: " In-unit washer and dryer" },
		{ value: "Indoor Basketball", label: " Indoor Basketball" },
		{
			value: "Indoor Mail Boxes and Mobile Package Service Alerts",
			label: " Indoor Mail Boxes and Mobile Package Service Alerts",
		},
		{ value: "Lake", label: " Lake" },
		{ value: "Laundry Facility", label: " Laundry Facility" },
		{ value: "Library", label: " Library" },
		{ value: "Luxury Bathrooms", label: " Luxury Bathrooms" },
		{ value: "Movie Theater", label: " Movie Theater" },
		{ value: "Multi-Purpose Game Room", label: " Multi-Purpose Game Room" },
		{ value: "Online Payments", label: " Online Payments" },
		{
			value: "Oversized Balconies Over Looking Pool",
			label: " Oversized Balconies Over Looking Pool",
		},
		{ value: "Pet friendly", label: " Pet friendly" },
		{ value: "Pet-Friendly", label: " Pet-Friendly" },
		{ value: "Pets allowed", label: " Pets allowed" },
		{
			value: "Plush Carpeting in Bedrooms",
			label: " Plush Carpeting in Bedrooms",
		},
		{
			value: "Private Balconies and Patios",
			label: " Private Balconies and Patios",
		},
		{
			value: "Private Bedrooms and Bathrooms",
			label: " Private Bedrooms and Bathrooms",
		},
		{ value: "Private Meeting Rooms", label: " Private Meeting Rooms" },
		{
			value: "Quartz Countertops with Tile Backsplash",
			label: " Quartz Countertops with Tile Backsplash",
		},
		{ value: "Resort-Style Pools", label: " Resort-Style Pools" },
		{ value: "Roof-Top Terraces", label: " Roof-Top Terraces" },
		{
			value: "Screening Room with 128” Projector screen",
			label: " Screening Room with 128” Projector screen",
		},
		{ value: "Some utilities included", label: " Some utilities included" },
		{
			value: "Sound-Proof Music JamRoom with Piano",
			label: " Sound-Proof Music JamRoom with Piano",
		},
		{ value: "Spa", label: " Spa" },
		{ value: "Spacious Walk-In Closets", label: " Spacious Walk-In Closets" },
		{
			value: "Stainless Steel Appliances",
			label: " Stainless Steel Appliances",
		},
		{ value: "Sun Deck", label: " Sun Deck" },
		{ value: "Sun Tanning Salon", label: " Sun Tanning Salon" },
		{ value: "Swimming Pool", label: " Swimming Pool" },
		{ value: "Swimming pool", label: " Swimming pool" },
		{ value: "Toddler Room", label: " Toddler Room" },
		{ value: "Utilities Included", label: " Utilities Included" },
		{ value: "Valet Parking", label: " Valet Parking" },
		{
			value: "Washer and dryer connections",
			label: " Washer and dryer connections",
		},
		{ value: "Washer and Dryers", label: " Washer and Dryers" },
		{ value: "Wireless internet access", label: " Wireless internet access" },
		{
			value: "Wood-Style Flooring in Living and Dining Areas",
			label: " Wood-Style Flooring in Living and Dining Areas",
		},
		{
			value: "“Smart” Sensors that Control Lighting and Temperature",
			label: " “Smart” Sensors that Control Lighting and Temperature",
		},
	];

	const handleDeletePopUp = () => {
		setOpenDelete(true);
	};
	const handleCloseDelete = () => {
		setOpenDelete(false);
	};

	const handleDelete = async () => {
		const newAmenities = amenities?.filter((element) => element !== amenity);
		setAmenities(newAmenities);

		const form = {
			newLocData: {
				...data,
				amenities: newAmenities,
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
		setOpenDelete(false);
	};

	const handleCreatePopUp = () => {
		if (amenity !== "") {
			setOpenCreate(true);
		}
	};
	const handleCloseCreate = () => {
		setOpenCreate(false);
	};
	const handleCreate = async () => {
		if (amenities.includes(amenity)) {
			setOpenCreate(false);
			return toast.error("Amenity Already Exsist");
		}
		const newAmenities = [...amenities, amenity];
		setAmenities(newAmenities);
		setAmenity("");

		const form = {
			newLocData: {
				...data,
				amenities: newAmenities,
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
		setOpenCreate(false);
	};

	return (
		<div>
			<div className="location-primary-heading">Amenities</div>
			<div className="location-content">
				{amenities?.map((item, index) => (
					<div
						key={index}
						style={{
							display: "grid",
							gridTemplateColumns: "0.01fr 0.5fr auto",
							gap: "5px",
							marginBottom: "15px",
						}}
					>
						<FiberManualRecordIcon
							sx={{
								marginTop: "6px",
								color: "#6439ff",
								width: "13px",
								height: "13px",
							}}
						/>
						<div className="location-info">{item}</div>
						<DeleteIcon
							color="error"
							sx={{
								marginLeft: "10px",
								cursor: "pointer",
							}}
							onClick={() => {
								setAmenity(item);
								handleDeletePopUp();
							}}
						/>
					</div>
				))}

				<Select
					fullWidth
					size="small"
					variant="outlined"
					options={options}
					label="Type in new Amenity"
					sx={{ marginTop: "10px" }}
					defaultValue={amenity}
					onChange={(e) => {
						setAmenity(e.value);
					}}
				/>
				<Button
					variant="contained"
					sx={{
						backgroundColor: "#6439ff",
						color: "#fff",
						marginTop: "10px",
					}}
					onClick={handleCreatePopUp}
				>
					Add new Amenity
				</Button>

				<Dialog
					open={openDelete}
					onClose={handleCloseDelete}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							Do you want to delete this amenity.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleCloseDelete}>Disagree</Button>
						<Button
							onClick={handleDelete}
							autoFocus
							color="error"
							variant="outlined"
						>
							Delete
						</Button>
					</DialogActions>
				</Dialog>

				<Dialog
					open={openCreate}
					onClose={handleCloseCreate}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							Do you want to add this new amenity.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleCloseCreate} color="error">
							No
						</Button>
						<Button onClick={handleCreate} autoFocus variant="contained">
							Yes
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		</div>
	);
};

export default Amenities;
