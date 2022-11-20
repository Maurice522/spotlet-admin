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
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";

const Dodont = ({ data }) => {
	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(false);

	const [rule, setRule] = useState("");

	const handleClickOpen = () => {
		if (rule !== "") {
			setOpen(true);
		}
	};
	const handleClose = () => {
		console.log("Delete this rule");
		setOpen(false);
	};

	const handleClickOpen2 = () => {
		if (rule !== "") {
			setOpen2(true);
		}
	};
	const handleClose2 = () => {
		console.log("Add this rule", rule);
		setOpen2(false);
	};

	return (
		<div>
			<div className="location-primary-heading">DOs</div>
			<div className="location-content">
				{data?.do_and_dont?.do_s?.map((item, index) => (
					<div
						key={index}
						style={{
							display: "grid",
							gridTemplateColumns: "0.01fr 0.5fr auto",
							gap: "5px",
							marginBottom: "15px",
						}}>
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
							onClick={handleClickOpen}
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
					onClick={handleClickOpen2}>
					Add new rule
				</Button>
			</div>
			<div className="location-primary-heading">DON'Ts</div>
			<div className="location-content">
				{data?.do_and_dont?.dont_s?.map((item, index) => (
					<div
						key={index}
						style={{
							display: "grid",
							gridTemplateColumns: "0.01fr 0.5fr auto",
							gap: "5px",
							marginBottom: "15px",
						}}>
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
							onClick={handleClickOpen}
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
					onClick={handleClickOpen2}>
					Add new rule
				</Button>
			</div>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description">
				<DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Do you want to delete this rule from the respective list.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Disagree</Button>
					<Button
						onClick={handleClose}
						autoFocus
						color="error"
						variant="outlined">
						Delete
					</Button>
				</DialogActions>
			</Dialog>

			<Dialog
				open={open2}
				onClose={handleClose2}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description">
				<DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Do you want to add this new rule to the respective list.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose2} color="error">
						No
					</Button>
					<Button onClick={handleClose2} autoFocus variant="contained">
						Yes
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default Dodont;
