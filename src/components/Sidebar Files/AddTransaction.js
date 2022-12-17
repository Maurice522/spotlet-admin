import React, { useState } from 'react'
import "./datatable.scss";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Sidebar from '../sidebar/Sidebar'
import Navbar from "../navbar/Navbar"
import axios from "axios";
import { toast } from 'react-toastify';

const AddTransaction = () => {
    const [blog, setblog] = useState({
        title: "",
        subheading: "",
        date: "",
        img: "",
        content: ""
    });
    const onSubmit = () => {

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
                        <TextField fullWidth id="fullWidth" style={{ fontSize: 20 }} />
                        <br />
                        <h3>Booking Date</h3>
                        <TextField fullWidth id="fullWidth" style={{ fontSize: 20 }} />
                        <br />
                        <h3>Amount</h3>
                        <TextField fullWidth id="fullWidth" style={{ fontSize: 20 }} />
                        <br />
                        <h3>Location ID</h3>
                        <TextField fullWidth id="fullWidth" style={{ fontSize: 20 }} />
                        <br />
                        <h3>Host Name</h3>
                        <TextField fullWidth id="fullWidth" style={{ fontSize: 20 }} />
                        <br />
                        <h3>Booking Name</h3>
                        <TextField fullWidth id="fullWidth" style={{ fontSize: 20 }} />
                        <br />
                        <h3>Date</h3>
                        <TextField fullWidth id="fullWidth" style={{ fontSize: 20 }} />
                        <br />
                        <h3>Status</h3>
                        <TextField fullWidth id="fullWidth" style={{ fontSize: 20 }} />
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