import axios from "axios";

// const server_domain = "https://gorecceback.herokuapp.com";
// const server_domain = "https://nipunbacky.herokuapp.com"; //TEMP HOSTED SERVER
const server_domain = "http://localhost:8000";

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

//get no of requests
export const getAllLocations = () => {
    return axios.get(server_domain + "/listalllocatons/");
}

//get user data by id
export const getUserData = (jwt_id) => {
    return axios.get(server_domain + "/user/" + jwt_id);
};

//get location
export const getLocation = ({ userId, locationId }) => {
    console.log(userId + locationId);
    return axios.get(server_domain + "/users/" + userId + locationId);
}
