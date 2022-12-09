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

const Dodont = ({ data, fetchData }) => {
	// console.log(data);

	const initialState = data?.do_and_dont;

	const [do_s, setDo_s] = useState(initialState?.do_s);
	const [dont_s, setDont_s] = useState(initialState?.dont_s);
	const [do_, setDo_] = useState("");
	const [dont_, setDont_] = useState("");

	const [openDelete, setOpenDelete] = useState(false);
	const [openCreate, setOpenCreate] = useState(false);

	const handleDeletePopUp = () => {
		setOpenDelete(true);
	};
	const handleCloseDelete = () => {
		setOpenDelete(false);
	};

	const handleDelete = async () => {
		let newDo = do_s;
		let newDont = dont_s;

		if (!do_) {
			newDont = dont_s.filter((element) => element !== dont_);
			setDont_s(newDont);
			setDo_("");
			setDont_("");
		}
		if (!dont_) {
			newDo = do_s.filter((element) => element !== do_);
			setDo_s(newDo);
			setDo_("");
			setDont_("");
		}

		const form = {
			newLocData: {
				...data,
				do_and_dont: {
					do_s: newDo,
					dont_s: newDont,
				},
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
		if (do_ !== "") {
			setOpenCreate(true);
		}
		if (dont_ !== "") {
			setOpenCreate(true);
		}
	};
	const handleCloseCreate = () => {
		setOpenCreate(false);
	};

	const handleCreate = async () => {
		console.log(do_, dont_);
		if (do_s.includes(do_)) {
			setOpenCreate(false);
			return toast.error("Rule Already Exsist");
		}
		if (dont_s.includes(dont_)) {
			setOpenCreate(false);
			return toast.error("Rule Already Exsist");
		}
		let newDo = do_s;
		let newDont = dont_s;
		if (do_ !== "") {
			newDo = [...do_s, do_];
			setDo_s(newDo);
			setDo_("");
		}
		if (dont_ !== "") {
			newDont = [...dont_s, dont_];
			setDont_s(newDont);
			setDont_("");
		}

		const form = {
			newLocData: {
				...data,
				do_and_dont: {
					do_s: newDo,
					dont_s: newDont,
				},
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
			<div className="location-primary-heading">DOs</div>
			<div className="location-content">
				{do_s?.map((item, index) => (
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
								setDo_(item);
								handleDeletePopUp();
							}}
						/>
					</div>
				))}

				<TextField
					fullWidth
					size="small"
					variant="outlined"
					label="Type in Rule"
					sx={{ marginTop: "10px" }}
					onChange={(e) => {
						setDo_(e.target.value);
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
					Add Rule
				</Button>
			</div>
			<div className="location-primary-heading">DON'Ts</div>
			<div className="location-content">
				{dont_s?.map((item, index) => (
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
								setDont_(item);
								handleDeletePopUp();
							}}
						/>
					</div>
				))}
				<TextField
					fullWidth
					size="small"
					variant="outlined"
					label="Type in Rule"
					sx={{ marginTop: "10px" }}
					onChange={(e) => {
						setDont_(e.target.value);
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
					Add Rule
				</Button>
			</div>

			<Dialog
				open={openDelete}
				onClose={handleCloseDelete}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Do you want to delete this Rule from the respective list.
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
						Do you want to add this Rule to the respective list.
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
	);
};

export default Dodont;
