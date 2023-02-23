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
    const [files, setFiles] = useState({});
    const [blog, setblog] = useState({
        title: "",
        subheading: "",
        date: "",
        image: {},
        content: ""
    });

   

  //ON CHOOSING FILE
const handleFileChoosen=(event)=>{
    if (event.target.files && event.target.files.length > 0) {
      setFiles((prevFiles) => {
        const filesToAdd = [...event.target.files];
        const imageObj = {};
        filesToAdd.forEach((file) => {
          imageObj[file.name] = {
            file,
            imageSrc: URL.createObjectURL(file),
            croppedImage: "",
            watermarkImage: "",
            preview: false,
            uploaded: false
          };
        });
        return { ...prevFiles, ...imageObj };
      });
    }
  }

  useEffect(()=>{
    if(JSON.stringify(files)==="{}"){return}
    handleUpload()
    },[files])




  const handleUpload=async()=>{
    try {
      const fileNames = Object.keys(files);
      for (let i = 0; i < fileNames.length; i++) {
        const flobj = files[fileNames[i]];
        console.log(fileNames[i])
        console.log("flobj",flobj)
        if (flobj.uploaded) continue;
        const file = await urltoFile(
          flobj.imageSrc,
          fileNames[i],
          "text/plain"
        );
        const formData = new FormData();
        formData.append("pic", file);
        const response = await uploadBlogPics(formData);
        setblog({ ...blog, image: response.data.url });
        setFiles((prevData) => {
          prevData[fileNames[i]].uploaded = true;
          return { ...prevData };
        });
        toast.success(`${fileNames[i]} has been uploaded`, 300);
      }
    } catch (error) {
      console.log(error);
    }
  }

  //CONVERT IMG TO URL
function urltoFile(url, filename, mimeType) {
    console.log(url, filename, mimeType)
    return fetch(url)
      .then(function (res) {
        return res.arrayBuffer();
      })
      .then(function (buf) {
        return new File([buf], Date.now() + filename, { type: mimeType });
      });
  }

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

    // const handleChange = async (e) => {
    //     try {
    //         console.log(e.target.files);
    //         let formData = new FormData();
    //         formData = { "pic": e.target.files[0] }
    //         const response = await uploadBlogPics(formData);
    //         console.log(response);
    //         setblog({ ...blog, image: { url: response.data.url, imageRef: response.data.fileRef } });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const onSubmit = () => {
        console.log(blog);
        // axios.post(`${process.env.REACT_APP_API_URL}/createblog`, blog)
        axios.post("/createblog", blog)
            .then((response) => console.log(response,response.status))
        toast.success("Blog Created!")
        // window.location.reload()
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
                                onChange={handleFileChoosen}
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