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
	TextField,
} from "@mui/material";
import { toast } from "react-toastify";
import { updateLocation } from "../../services/api";

const Features = ({ data, fetchData }) => {
	// console.log(data);

	const initialState = data?.features;

	const [features, setFeatures] = useState(initialState);
	const [feature, setFeature] = useState("");

	const [openDelete, setOpenDelete] = useState(false);
	const [openCreate, setOpenCreate] = useState(false);

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

				<TextField
					fullWidth
					size="small"
					variant="outlined"
					label="Type in new Features"
					sx={{ marginTop: "10px" }}
					onChange={(e) => {
						setFeature(e.target.value);
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
