import React, { useEffect, useState } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import Buttons from "./Buttons";
import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import { deleteFiles, updateLocation, uploadGstDocs } from "../../services/api";

const Gst = ({ data, fetchData }) => {
	// console.log(data);

	const initialState = {
		doc_no: data?.gst?.doc_no,
		docs: data?.gst?.docs,
	};
	const [gstData, setGstData] = useState(initialState);
	const [gstDocs, setGstDocs] = useState([]);

	useEffect(() => {
		setGstDocs(data?.gst?.docs);
	}, [data]);

	const handleChangeDocNo = (e) => {
		setGstData({
			...gstData,
			doc_no: e.target.value,
		});
	};

	const handleSave = async (e) => {
		e.preventDefault();

		const form = {
			newLocData: {
				...data,
				gst: gstData,
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
		setGstData(initialState);
	};

	const handleChange = async (e) => {
		try {
			for (let i = 0; i < e.target.files.length; i++) {
				//console.log(e.target.files[i]);
				const formData = new FormData();
				formData.append("pic", e.target.files[i]);
				const response = await uploadGstDocs(formData);

				const newGstData = [
					...gstDocs,
					{ file: response.data.url, fileRef: response.data.fileRef },
				];
				setGstDocs(newGstData);
				console.log(newGstData);
				const form = {
					newLocData: {
						...data,
						gst: {
							doc_no: data.gst.doc_no,
							docs: newGstData,
						},
					},
					location_id: data.location_id,
				};
				console.log(form);

				try {
					const response = await updateLocation(form);
					toast.success(response.data);
				} catch (error) {
					toast.error(error.response.data);
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleClick = () => {
		document.getElementById("gstUpload").click();
	};

	const deleteGST = async (fileData, index) => {
		console.log(fileData);
		try {
			await deleteFiles({
				file: fileData.file,
				fileRef: fileData.fileRef,
			});
			const newGstData = gstDocs.filter((doc, i) => i !== index);
			setGstDocs(newGstData);
			console.log(newGstData);
			const form = {
				newLocData: {
					...data,
					gst: {
						doc_no: data.gst.doc_no,
						docs: newGstData,
					},
				},
				location_id: data.location_id,
			};
			console.log(form);

			try {
				const response = await updateLocation(form);
				toast.success(response.data);
			} catch (error) {
				toast.error(error.response.data);
			}
		} catch (error) {
			toast.error(error.response.data);
		}
	};

	return (
		<div>
			<div className="location-primary-heading">GST Details</div>
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
						{gstData?.doc_no ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Document Number:</div>
					</div>
					<div className="location-info">
						<TextField
							id="filled-select-currency"
							value={gstData.doc_no}
							// onClick={handleClickname}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={handleChangeDocNo}
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
						{gstData?.docs ? (
							<GoPrimitiveDot color="#6439ff" />
						) : (
							<GoPrimitiveDot color="#ff6767" />
						)}{" "}
						<div className="location-secondary-heading ">Documents:</div>
					</div>
					{gstData?.docs?.map((doc, index) => (
						<div
							className="location-info"
							key={index}
							style={{ padding: "1rem" }}
						>
							{/* <TextField
							id="filled-select-currency"
							value={gstdoc}
							onClick={handleClickgstdoc}
							fullWidth
							size="small"
							sx={{
								padding: "8px",
							}}
							onChange={(e) => {
								console.log(e.target.value);
								setgstdoc(e.target.value);
							}}
							variant="outlined"
						/> */}
							<embed src={doc.file} width="100%" height="450px" />
							{/* <Buttons save={handleSave} discard={handleDiscard} /> */}
							<DeleteIcon
								color="error"
								sx={{
									// marginLeft: "10px",
									cursor: "pointer",
								}}
								onClick={() => deleteGST(doc, index)}
							/>
						</div>
					))}
					<div
						onClick={handleClick}
						style={{
							border: "1px solid #6439ff",
							margin: "1rem",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							cursor: "pointer",
						}}
					>
						<input
							type="file"
							accept=".xlsx,.xls,,.doc, .docx,.ppt, .pptx,.txt,.pdf"
							multiple
							id="gstUpload"
							style={{ display: "none" }}
							onChange={handleChange}
						/>
						<AddIcon
							sx={{
								width: "30px",
								height: "30px",
								color: "#6439ff",
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gst;
