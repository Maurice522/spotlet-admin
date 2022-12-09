import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogTable = () => {
	const userColumns = [
		{ field: "id", headerName: "ID", width: 250 },
		{
			field: "title",
			headerName: "Title",
			width: 130,
			renderCell: (params) => {
				return <div className="cellWithImg">{params.row.title}</div>;
			},
		},
		{
			field: "subheading",
			headerName: "SubHeading",
			width: 200,
		},
		{
			field: "date",
			headerName: "Date",
			width: 150,
		},
	];
	const [data, setData] = useState([]);

	useEffect(() => {
		var data2 = [];
		axios
			.get("https://spotlet.onrender.com/getBlogs")
			.then((response) => {
				const data = response.data;
				console.log(data);
				for (let i = 0; i < data.length; i++) {
					const user = {
						id: data[i].id,
						title: data[i].title,
						subheading: data[i].subheading,
						date: data[i].date,
					};
					data2 = [...data2, user];
				}
			})
			.then(() => {
				setData(data2);
			});
	}, []);
	return (
		<div className="datatable">
			<div className="datatableTitle">
				Blogs
				<Link to="/createblog" className="link">
					Add Blog
				</Link>
			</div>
			<DataGrid
				className="datagrid"
				rows={data}
				columns={userColumns}
				pageSize={9}
				rowsPerPageOptions={[9]}
			/>
		</div>
	);
};

export default BlogTable;
