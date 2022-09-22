import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Datatable = () => {
  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
    {
      field: "mobile",
      headerName: "Phone Number",
      width: 200,
    }
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    var data2 = [];
    axios
      .get("https://gorecce-admin.herokuapp.com/deletereq")
      .then((response) => {
        const data = response.data;
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          const user = {
            id: i + 1,
            email: data[i].CustomerEmail,
            username: data[i].CustomerName,
            mobile: data[i].Mobile,
            img: data[i].CustomerImage,
          };
          data2 = [...data2, user];
        }
      })
      .then(() => {
        setData(data2);
      });
  }, []);

  console.log(data);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 400,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="viewButton">Deactivate</div>

            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Reject
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">Deactivate Account</div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
