import React, { useState } from 'react'
import "./datatable.scss";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Sidebar from '../sidebar/Sidebar'
import Navbar from "../navbar/Navbar"
import axios from "axios";

const CreateBlog = () => {
    const [blog, setblog] = useState({
        title: "",
        subheading: "",
        date: "",
        img: "",
        content: ""
    });
    const onSubmit = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        setblog({ ...blog, date: today })
        console.log(blog);
        axios.post('https://nipunbacky.herokuapp.com/createblog',blog)
        .then((response)=>console.log(response.status))
    }
    return (
        <div>
            <div className="list">
                <Sidebar />
                <div className="listContainer">
                    <Navbar />
                    <div className='datatable fl'>
                        <h2>Add a New Blog</h2>
                        <br />
                        <h3>Title</h3>
                        <TextField fullWidth id="fullWidth" style={{ fontSize: 20 }} onChange={(e) => { setblog({ ...blog, title: e.target.value }) }} />
                        <br />
                        <h3>Sub Heading</h3>
                        <TextField fullWidth id="fullWidth" style={{ fontSize: 20 }} onChange={(e) => { setblog({ ...blog, subheading: e.target.value }) }} />
                        <br />
                        <h3>Content</h3>
                        <TextareaAutosize
                            maxRows={30}
                            aria-label="maximum height"
                            style={{ width: 1330, height: 500, fontSize: 20 }}
                            onChange={(e) => { setblog({ ...blog, content: e.target.value }) }}
                        />
                        <br />
                        <Button variant="contained" component="label">
                            Upload Image
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                        <br />
                        <Button variant="contained" endIcon={<SendIcon />} onClick={onSubmit}>
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog