import React, { useEffect, useState } from 'react'
import "./datatable.scss";
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Sidebar from '../sidebar/Sidebar'
import Navbar from "../navbar/Navbar"
import axios from "axios";
import { toast } from 'react-toastify';
import { uploadBlogPics } from '../../services/api';

const CreateBlog = () => {
    const [blog, setblog] = useState({
        title: "",
        subheading: "",
        date: "",
        image: {},
        content: ""
    });

    useEffect(() => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;
        setblog({ ...blog, date: today })

    }, [])

    const handleClick = () => {
        document.getElementById("imageUploadBlog").click();
    };

    const handleChange = async (e) => {
        try {
            console.log(e.target.files);
            let formData = new FormData();
            formData = { "pic": e.target.files[0] }
            const response = await uploadBlogPics(formData);
            console.log(response);
            setblog({ ...blog, image: { url: response.data.url, imageRef: response.data.fileRef } });
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit = () => {
        console.log(blog);
        axios.post(`${process.env.REACT_APP_API_URL}/createblog`, blog)
            .then((response) => console.log(response.status))
        toast.success("Blog Created!")
        window.location.reload()
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
                        <Button
                            variant="contained"
                            component="label"
                            onClick={handleClick}
                        >
                            Upload Image
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                id="imageUploadBlog"
                                style={{ display: "none" }}
                                onChange={handleChange}
                            />
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