import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import "./datatable.scss";

const LocReq = () => {
  const approveUser = (id) => {
    axios
    .put("https://nipunbacky.herokuapp.com/approveloc/"+id)
    .then(console.log("Approve Location"));
  };
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
      .get("https://nipunbacky.herokuapp.com/locreqs")
      .then((response) => {
        const data = response.data;
        for (let i = 0; i < data.locations.length; i++) {
          const user = {
            id: data.locations[i].location_id,
            email: data.locations[i].contact_det.email,
            username: data.locations[i].contact_det.name,
            mobile: data.locations[i].contact_det.mobile_num,
            img: data.locations[i].contact_det.img,
          };
          data2 = [...data2, user];
        }
      })
      .then(() => {
        setData(data2);
      });
  }, [data]);

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
            <div
              className="viewButton"
              onClick={() => approveUser(params.row.id)}
            >
              Approve
            </div>
            <div className="deleteButton">Incomplete</div>
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
      />
    </div>
  );
};

export default LocReq;
