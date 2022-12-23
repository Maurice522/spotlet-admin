import axios from "axios";

// const server_domain = "https://gorecceback.herokuapp.com";
// const server_domain = "https://nipunbacky.herokuapp.com"; //TEMP HOSTED SERVER
const server_domain = "http://localhost:8000";
// const server_domain = "https://spotlet.onrender.com"; //NEW HOSTED SERVER

//get no of users
export const noOfUsers = () => {
    return axios.get(server_domain + "/noofusers/");
}

//get no of locations
export const noOfLocations = () => {
    return axios.get(server_domain + "/nooflocations/");
}

//get no of bookings
export const noOfBookings = () => {
    return axios.get(server_domain + "/noofbookings/");
}

//get no of requests
export const noOfRequests = () => {
    return axios.get(server_domain + "/noofrequests/");
}

//get all locations`
export const getAllLocations = () => {
    return axios.get(server_domain + "/listalllocatons/");
}

//get user data by id
export const getUserData = (jwt_id) => {
    return axios.get(server_domain + "/user/" + jwt_id);
};

//get location
export const getLocation = ({ userId, locationId }) => {
    // console.log(userId + locationId);
    return axios.get(server_domain + "/users/" + userId + locationId);
}

//announcement
export const Announcement = ({ form, data }) => {
    return axios.post(server_domain + "/announcement/", { form: form, userlist: data });
};

//get temp location
export const getTempLocation = (location_id) => {
    return axios.get(server_domain + "/templocation/" + location_id);
}

//update location
export const updateLocation = (data) => {
    return axios.post(server_domain + "/updatelocation/", data);
}

//upload location pics
export const uploadLocationPics = (formData) => {
    return axios.post(server_domain + "/uploadlocpic", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

//upload gst docs
export const uploadGstDocs = (formData) => {
    return axios.post(server_domain + "/uploadgst", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

//delete files from storage
export const deleteFiles = (form) => {
    return axios.delete(server_domain + `/deletefile`, { data: form });
};

//upload blog pics
export const uploadBlogPics = (formData) => {
    console.log(formData);
    return axios.post(server_domain + "/uploadblogpic", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};