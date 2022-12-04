import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
	deleteFiles,
	updateLocation,
	uploadLocationPics,
} from "../../services/api";
import { toast } from "react-toastify";
import { Clear } from "@mui/icons-material";

const Photo = ({ data, fetchData }) => {
	// console.log(data);

	const [images, setImages] = useState([]);
	useEffect(() => {
		setImages(data?.imagesData);
	}, [data]);

	const handleChange = async (e) => {
		try {
			for (let i = 0; i < e.target.files.length; i++) {
				//console.log(e.target.files[i]);
				const formData = new FormData();
				formData.append("pic", e.target.files[i]);
				const response = await uploadLocationPics(formData);

				const newImagesData = [
					...images,
					{ image: response.data.url, imageRef: response.data.fileRef },
				];
				setImages(newImagesData);
				console.log(newImagesData);
				const form = {
					newLocData: {
						...data,
						imagesData: newImagesData,
					},
					location_id: data.location_id,
				};
				console.log(form);

				try {
					const response = await updateLocation(form);
					await fetchData();
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
		document.getElementById("imageUpload").click();
	};

	const deleteImage = async (imageData, index) => {
		console.log(imageData);
		try {
			await deleteFiles({
				image: imageData.image,
				fileRef: imageData.imageRef,
			});
			const newImagesData = images.filter((img, i) => i !== index);
			setImages(newImagesData);
			console.log(newImagesData);
			const form = {
				newLocData: {
					...data,
					imagesData: newImagesData,
				},
				location_id: data.location_id,
			};
			console.log(form);

			try {
				const response = await updateLocation(form);
				await fetchData();
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
			<div className="location-primary-heading">Photo Gallery</div>
			<div className="location-photo-gallery">
				{images?.map((item, ind) => (
					<div key={ind}>
						<Clear
							sx={{
								cursor: "pointer",
								position: "absolute",
							}}
							onClick={() => deleteImage(item, ind)}
						/>
						<img src={item?.image} alt="Location" className="location-photo" />
					</div>
				))}
				<div
					className="location-photo"
					onClick={handleClick}
					style={{
						border: "1px solid #6439ff",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						cursor: "pointer",
					}}
				>
					<input
						type="file"
						accept="image/*"
						multiple
						id="imageUpload"
						style={{ display: "none" }}
						onChange={handleChange}
					/>
					<AddIcon
						sx={{
							width: "40px",
							height: "40px",
							color: "#6439ff",
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Photo;
