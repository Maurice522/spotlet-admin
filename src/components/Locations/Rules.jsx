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
import { updateLocation } from "../../services/api";
import { toast } from "react-toastify";

const Rules = ({ data }) => {
	// console.log(data);

	const initialState = data?.rules;

	const [rules, setRules] = useState(initialState);
	const [rule, setRule] = useState("");

	const [openDelete, setOpenDelete] = useState(false);
	const [openCreate, setOpenCreate] = useState(false);

	const handleDeletePopUp = () => {
		setOpenDelete(true);
	};
	const handleCloseDelete = () => {
		setOpenDelete(false);
	};

	const handleDelete = async () => {
		setRules((prev) => prev.filter((element) => element !== rule));
		console.log(rules);
		const form = {
			newLocData: {
				...data,
				rules,
			},
			location_id: data.location_id,
		};
		console.log(form);
		// try {
		// 	const response = await updateLocation(form);
		// 	window.location.reload(true);
		// 	toast.success(response.data);
		// } catch (error) {
		// 	toast.error(error.response.data);
		// }
		setOpenDelete(false);
	};

	const handleCreatePopUp = () => {
		if (rule !== "") {
			setOpenCreate(true);
		}
	};
	const handleCloseCreate = () => {
		setOpenCreate(false);
	};
	const handleCreate = async () => {
		if (rules.includes(rule)) {
			setOpenCreate(false);
			return toast.error("Rule Already Exsist");
		}
		setRules((prev) => [...prev, rule]);
		console.log(rules);
		const form = {
			newLocData: {
				...data,
				rules,
			},
			location_id: data.location_id,
		};
		console.log(form);
		// try {
		// const response = await updateLocation(form);
		// 	window.location.reload(true);
		// 	toast.success(response.data);
		// } catch (error) {
		// toast.error(error.response.data);
		// }
		setOpenCreate(false);
	};

	return (
		<div>
			<div className="location-primary-heading">Rules</div>
			<div className="location-content">
				{rules?.map((item, index) => (
					<div
						key={index}
						style={{
							display: "grid",
							gridTemplateColumns: "0.01fr 1fr auto",
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
								setRule(item);
								handleDeletePopUp();
							}}
						/>
					</div>
				))}

				<TextField
					fullWidth
					size="small"
					variant="outlined"
					label="Type in new rule"
					sx={{ marginTop: "10px" }}
					onChange={(e) => {
						setRule(e.target.value);
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
					Add new rule
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
							Do you want to delete this rule.
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
							Do you want to add this new rule.
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

export default Rules;
