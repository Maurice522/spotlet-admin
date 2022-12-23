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

const Features = ({ data, fetchData }) => {
	const initialState = data?.features;

	const [features, setFeatures] = useState(initialState);
	const [feature, setFeature] = useState("");

	const [openDelete, setOpenDelete] = useState(false);
	const [openCreate, setOpenCreate] = useState(false);

	const options = [
		{ value: "Alarm system", label: " Alarm system" },
		{
			value: "Architectural details, such as crown moldings, chair rails, etc.",
			label:
				" Architectural details, such as crown moldings, chair rails, etc.",
		},
		{
			value: "Builder’s name, if well known in the area",
			label: " Builder’s name, if well known in the area",
		},
		{ value: "Central air conditioning", label: " Central air conditioning" },
		{ value: "Deck", label: " Deck" },
		{ value: "Energy efficiency", label: " Energy efficiency" },
		{ value: "Exercise room", label: " Exercise room" },
		{ value: "Exterior lighting", label: " Exterior lighting" },
		{ value: "Finished basement", label: " Finished basement" },
		{
			value: "Fireplaces and wood-burning stoves",
			label: " Fireplaces and wood-burning stoves",
		},
		{
			value: "Garage – heated, three-car, etc.",
			label: " Garage – heated, three-car, etc.",
		},
		{
			value: "Granite countertops in kitchen",
			label: " Granite countertops in kitchen",
		},
		{ value: "Great for entertaining", label: " Great for entertaining" },
		{
			value: "Heat pump or other energy-efficient systems",
			label: " Heat pump or other energy-efficient systems",
		},
		{ value: "Home theater", label: " Home theater" },
		{ value: "Hot tub", label: " Hot tub" },
		{ value: "In-ground pool", label: " In-ground pool" },
		{
			value: "In-law or extra apartment with rental potential",
			label: " In-law or extra apartment with rental potential",
		},
		{
			value: "Kitchen – gourmet, great for entertaining, etc.",
			label: " Kitchen – gourmet, great for entertaining, etc.",
		},
		{ value: "Landscaping", label: " Landscaping" },
		{ value: "Light-filled or bright", label: " Light-filled or bright" },
		{
			value: "Master suite with separate bath",
			label: " Master suite with separate bath",
		},
		{ value: "Move-in condition", label: " Move-in condition" },
		{ value: "New bathrooms or kitchen", label: " New bathrooms or kitchen" },
		{
			value:
				"New improvements, such as roof, furnace, electrical service or wiring",
			label:
				" New improvements, such as roof, furnace, electrical service or wiring",
		},
		{ value: "New septic system", label: " New septic system" },
		{ value: "Open floor plan", label: " Open floor plan" },
		{
			value:
				"Outbuildings that can be used for shops, storage, rental income, etc.",
			label:
				" Outbuildings that can be used for shops, storage, rental income, etc.",
		},
		{
			value: "Pride of ownership that shows",
			label: " Pride of ownership that shows",
		},
		{
			value: "Solar heating or electrical",
			label: " Solar heating or electrical",
		},
		{
			value: "Square footage (if it represents a good value for your price)",
			label: " Square footage (if it represents a good value for your price)",
		},
		{ value: "Town sewers", label: " Town sewers" },
		{
			value: "Upscale appliances that appeal to luxury-oriented buyers",
			label: " Upscale appliances that appeal to luxury-oriented buyers",
		},
		{
			value: "Views of mountains, lakes, sunsets, sunrises",
			label: " Views of mountains, lakes, sunsets, sunrises",
		},
		{
			value: "Window – new and energy efficient",
			label: " Window – new and energy efficient",
		},
		{ value: "Wood floors", label: " Wood floors" },
	];

	const handleDeletePopUp = () => {
		setOpenDelete(true);
	};
	const handleCloseDelete = () => {
		setOpenDelete(false);
	};

	const handleDelete = async () => {
		const newFeatures = features.filter((element) => element !== feature);
		setFeatures(newFeatures);

		const form = {
			newLocData: {
				...data,
				features: newFeatures,
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
		if (feature !== "") {
			setOpenCreate(true);
		}
	};
	const handleCloseCreate = () => {
		setOpenCreate(false);
	};
	const handleCreate = async () => {
		if (features.includes(feature)) {
			setOpenCreate(false);
			return toast.error("Feature Already Exsist");
		}
		const newFeatures = [...features, feature];
		setFeatures(newFeatures);
		setFeature("");

		const form = {
			newLocData: {
				...data,
				features: newFeatures,
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
			<div className="location-primary-heading">Features</div>
			<div className="location-content">
				{features?.map((item, index) => (
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
								setFeature(item);
								handleDeletePopUp();
							}}
						/>
					</div>
				))}

				<Select
					fullWidth
					size="small"
					options={options}
					variant="outlined"
					label="Type in new Features"
					sx={{ marginTop: "10px" }}
					defaultValue={feature}
					onChange={(e) => {
						setFeature(e.value);
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
					Add new Feature
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
							Do you want to delete this feature.
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
							Do you want to add this new feature.
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

export default Features;
