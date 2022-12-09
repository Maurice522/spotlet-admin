import React, { useEffect, useState } from 'react'
import "./datatable.scss";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Sidebar from '../sidebar/Sidebar'
import Navbar from "../navbar/Navbar"
import axios from 'axios';
import { Announcement } from '../../services/api';
import { toast } from 'react-toastify';

const ContactUsers = () => {
    const [form, setform] = useState({
        title: "",
        date: "",
        content: "",
        admin: true
    });
    const [data, setData] = useState([]);

    useEffect(() => {
        var data2 = [];
        axios
            .get("https://spotlet.onrender.com/users")
            .then((response) => {
                const data = response.data;
                for (let i = 0; i < data.length; i++) {
                    const user = {
                        id: data[i].id,
                        email: data[i].personalInfo.email,
                        username: data[i].personalInfo.fullName,
                        mobile: data[i].personalInfo.mobile,
                    };
                    data2 = [...data2, user];
                }
            })
            .then(() => {
                setData(data2);
            });
    }, []);

    useEffect(() => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;
        setform({ ...form, date: today })

    }, [])


    const onSubmit = async () => {
        try {
            // console.log(form);
            const res = await Announcement({ form, data });
            toast.success(res.data)
            console.log(res.data);
            window.location.reload(true);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div className="list">
                <Sidebar />
                <div className="listContainer">
                    <Navbar />
                    <div className='datatable fl'>
                        <h2>Contact Users</h2>
                        <br />
                        <h3>Title</h3>
                        <TextField fullWidth id="fullWidth" style={{ fontSize: 20 }} onChange={(e) => { setform({ ...form, title: e.target.value }) }} />
                        <br />
                        <h3>Content</h3>
                        <TextareaAutosize
                            maxRows={30}
                            aria-label="maximum height"
                            style={{ width: 1330, height: 500, fontSize: 20 }}
                            onChange={(e) => { setform({ ...form, content: e.target.value }) }}
                        />
                        <br />
                        <br />
                        <Button variant="contained" endIcon={<SendIcon />} onClick={onSubmit}>
                            SEND
                        </Button>
                    </div>
                </div>
            </div>

        </div>)
}

export default ContactUsers