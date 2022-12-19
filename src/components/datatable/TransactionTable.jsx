import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogTable = () => {
    const userColumns = [
        {
            field: "id",
            headerName: "Booking ID",
            width: 200
        },
        {
            field: "bookingDate",
            headerName: "Booking Date",
            width: 150
        },
        {
            field: "amount",
            headerName: "Amount",
            width: 150,
        },
        {
            field: "locId",
            headerName: "Location ID",
            width: 150,
        },
        {
            field: "hostName",
            headerName: "Host Name",
            width: 150,
        },
        {
            field: "bookingName",
            headerName: "Booking Name",
            width: 150,
        },
        {
            field: "date",
            headerName: "Date",
            width: 150,
        },
        {
            field: "status",
            headerName: "Status",
            width: 150,
        },
    ];
    const [data, setData] = useState([]);

    useEffect(() => {
        var data2 = [];
        axios
            .get("https://spotlet.onrender.com/users")
            .then((response) => {
                const data = response.data;

                for (let i = 0; i < data.length; i++) {
                    console.log(data[i].portfolio)
                    for (let j = 0; j < data[i].portfolio.length; j++) {
                        console.log(data[i])
                        const user = {
                            id: data[i].portfolio[j].bookingId,
                            bookingDate: data[i].portfolio[j].date,
                            amount: data[i].portfolio[j].final_amount,
                            locId: data[i].portfolio[j].property_id,
                            hostName: data[i].personalInfo.fullName,
                            status: data[i].portfolio[j].payment_status
                        };
                        data2 = [...data2, user];
                    }
                }
            })
            .then(() => {
                setData(data2);
            });
    }, []);
    return (
        <div className="datatable">
            <div className="datatableTitle">
                Transactions
                <Link to="/addtransaction" className="link">
                    Add
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
