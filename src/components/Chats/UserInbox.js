import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../style/Chats/UserInbox.css";
import { getLocation } from "../../services/api";

function UserInbox({ conversation }) {
  const [user, setUser] = useState(null);
  const [locationData, setLocationData] = useState({});
  const locationId = conversation?.locationId;
  // const {state, dispatch} = useContext(UserContext);
  // const [online, setOnline] = useState(null);
  useEffect(() => {
    getLocation(locationId).then(res => setLocationData(res.data))
    .catch(err => console.log(err))
  }, [locationId])

//   useEffect(() => {
//     const friendUser = async function () {
//       const friendId = await conversation.members.find((m) => m !== user_id);
//       setUser(conversation.users[friendId]);
//     };
//     friendUser();
//   }, [conversation]);
  return (
    <div className="user-inbox">
      <div className="online"></div>
        <img src={locationData?.images?.at(0)} alt="profile" />
      <div>
        <h6>{locationId} </h6>
      </div>
    </div>
  );
}

export default UserInbox;
