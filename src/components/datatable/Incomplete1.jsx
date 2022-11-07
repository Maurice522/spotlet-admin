import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./datatable.scss";

const Incomplete1 = () => {
  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="" />
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
    },
  ];

  const [data, setData] = useState([]);
  useEffect(() => {
    var data2 = [];
    axios
      .get("https://nipunbacky.herokuapp.com/incomplist")
      .then((response) => {
        const data = response.data;
        for (let i = 0; i < data.length; i++) {
          const user = {
            id: data[i].id,
          };
          data2 = [...data2, user];
        }
      })
      .then(() => {
        setData(data2);
      });
  }, []);

  const actionColumn = [
    {
      field: "action",
      headerName: "View",
      width: 400,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">Requests</div>
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

export default Incomplete1;
