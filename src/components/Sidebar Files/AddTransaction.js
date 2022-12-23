import React, { useState } from 'react'
import "./datatable.scss";
import { MenuItem, Select, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Sidebar from '../sidebar/Sidebar'
import Navbar from "../navbar/Navbar"
import axios from 'axios';
import { toast } from 'react-toastify';

const AddTransaction = () => {
    const [transaction, setTransaction] = useState({
        bookingid: "",
        bookingdate: "",
        amount: "",
        locationid: "",
        hostname: "",
        bookingname: "",
        date: "",
        status: "",
    });

    const onSubmit = () => {
        console.log(transaction);
        axios.post('http://localhost:8000/createtransaction', transaction)
            .then((response) => console.log(response.status))
        toast.success("Transaction Created!")
        window.location.reload()
    }

    return (
        <div>
            <div className="list">
                <Sidebar />
                <div className="listContainer">
                    <Navbar />
                    <div className='datatable fl'>
                        <h2>Add a New Transaction</h2>
                        <br />
                        <h3>Booking ID</h3>
                        <TextField fullWidth id="fullWidth" style={{ fontSize: 20 }} onChange={(e) => { setTransaction({ ...transaction, bookingid: e.target.value }) }} />
                        <br />
                        <h3>Booking Date</h3>
                        <TextField type="date" fullWidth id="fullWidth" style={{ fontSize: 20 }} onChange={(e) => { setTransaction({ ...transaction, bookingdate: e.target.value }) }} />
                        <br />
                        <h3>Amount</h3>
                        <TextField fullWidth id="fullWidth" style={{ fontSize: 20 }} onChange={(e) => { setTransaction({ ...transaction, amount: e.target.value }) }} />
                        <br />
                        <h3>Location ID</h3>
                        <TextField fullWidth id="fullWidth" style={{ fontSize: 20 }} onChange={(e) => { setTransaction({ ...transaction, locationid: e.target.value }) }} />
                        <br />
                        <h3>Host Name</h3>
                        <TextField fullWidth id="fullWidth" style={{ fontSize: 20 }} onChange={(e) => { setTransaction({ ...transaction, hostname: e.target.value }) }} />
                        <br />
                        <h3>Booking Name</h3>
                        <TextField fullWidth id="fullWidth" style={{ fontSize: 20 }} onChange={(e) => { setTransaction({ ...transaction, bookingname: e.target.value }) }} />
                        <br />
                        <h3>Date</h3>
                        <TextField type="date" fullWidth id="fullWidth" style={{ fontSize: 20 }} onChange={(e) => { setTransaction({ ...transaction, date: e.target.value }) }} />
                        <br />
                        <h3>Status</h3>
                        <Select select defaultValue="pending" fullWidth id="fullWidth" style={{ fontSize: 20 }} onChange={(e) => { setTransaction({ ...transaction, status: e.target.value }) }}>
                            <MenuItem value="approved">Approved</MenuItem>
                            <MenuItem value="pending">Pending</MenuItem>
                        </Select>
                        <br />
                        <Button variant="contained" endIcon={<SendIcon />} onClick={onSubmit}>
                            Add Transaction
                        </Button>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTransaction