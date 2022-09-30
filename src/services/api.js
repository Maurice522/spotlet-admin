import axios from "axios";

const server_domain = "https://gorecce-backend.herokuapp.com";
// const server_domain = "http://localhost:8000";


//get user data by id
export const getUserData = (jwt_id) => {
  return axios.get(server_domain + "/user/" + jwt_id);
};
//get contact list of a user
export const contactList = () => {
  return axios.get(server_domain + '/allconversation');
};

//message room
export const messsageRoom = (conversation_id) => {
  return axios.get(server_domain + `/messages/${conversation_id}`);
};

//get location
export const getLocation = (locId) => {
  return axios.get(server_domain + "/getlocation/" + locId);
}
//get booking detail
export const getBookingDetail = (bookingId, form) => { 
  return axios.put(server_domain + `/getbookingdetail/${bookingId}`, form)
}