import React from "react";
import { Button, IconButton } from "@mui/material";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import SaveIcon from "@mui/icons-material/Save";

const Buttons = ({ save, discard }) => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				gap: "10px",
			}}>
			<IconButton
				onClick={save}
				aria-label="save changes"
				component="label"
				color="primary"
				sx={{
					border: "1px solid #1976d2",
					backgroundColor: "#e1e1e1",
				}}>
				<SaveIcon
					sx={{
						width: "20px",
						height: "20px",
					}}
				/>
			</IconButton>
			<IconButton
				onClick={discard}
				aria-label="discard changes"
				component="label"
				color="error"
				sx={{
					border: "1px solid #d32f2f",
					backgroundColor: "#e1e1e1",
				}}>
				<DoDisturbIcon
					sx={{
						width: "20px",
						height: "20px",
					}}
				/>
			</IconButton>
			{/* <Button
				variant="contained"
				color="error"
				sx={{
					padding: "6px 16px",
					width: "180px",
				}}>
				Discard Changes
			</Button> */}
		</div>
	);
};

export default Buttons;
