import React, { useEffect, useRef, useState } from "react";

import UserInbox from "../components/Chats/UserInbox";

import "../style/Chats/Messages.css";
import {
  SearchOutlined,
  Send,
  SentimentSatisfiedOutlined,
} from "@mui/icons-material";

import MessageThread from "../components/Chats/MessageThread";
import { contactList, getBookingDetail, getLocation, messsageRoom, sendMessage } from "../services/api";
import { toast } from "react-toastify";

export default function Messages() {
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [firstUser, setFirstUser] = useState(null);
  const [secondUser, setSecondUser] = useState(null);
  const [locationData, setLocationData] = useState({});
  const scrollRef = useRef();
  const [bookingDetail, setBookingDetail] = useState({});
  const bookingId = currentChat?.bookingId;
  const locationId = currentChat?.locationId;
  const endTime =( Number(bookingDetail?.time?.substr(0,2))+Number(bookingDetail?.duration_in_hours))%24;
  const date = new Date(bookingDetail?.timestamp?._seconds*1000)
	const yyyy = date.getFullYear();
	let mm = date.getMonth() + 1; // Months start at 0!
	let dd = date.getDate();

		if (dd && dd < 10) dd = '0' + dd;
		if (mm && mm < 10) mm = '0' + mm;

  useEffect(() => {
    getLocation(locationId).then(res => setLocationData(res.data))
    .catch(err => console.log(err))
  }, [locationId])

  // //get booking detail
  useEffect(() => {
    getBookingDetail(currentChat?.bookingId, {locationId : currentChat?.locationId} )
    .then(res => setBookingDetail(res.data))
    .catch(err => console.log(err))
  }, [currentChat])
  //console.log(messages);
  

  useEffect(() => {
      contactList()
        .then((response) => {
          setConversations(response.data);
        })
        .catch((error) => {
          toast.error(error.response.data);
        });
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, []);
  //console.log(messages);
  console.log(currentChat)
  useEffect(() => {
    const firstId = currentChat?.members?.at(0);
    const secondId = currentChat?.members?.at(1);
    setFirstUser(currentChat?.users[firstId]);
    setSecondUser(currentChat?.users[secondId]);
  }, [currentChat]);

  useEffect(() => {
      messsageRoom(currentChat?.id)
        .then((res) => setMessages(res.data))
        .catch((error) => toast.error(error.response.data));
  }, [currentChat]);
  function toMonthName(monthNumber) {
		const date = new Date();
		date.setMonth(monthNumber - 1);
	  
		return date.toLocaleString('en-US', {
		  month: 'long',
		});
	  }
  return (
    <div>
      <div className="messages">
        <div className="chat-inbox">
          {conversations.length > 0 ? (
            conversations.map((conversation) => {
              return (
                <div onClick={() => setCurrentChat(conversation)}>
                  <UserInbox conversation={conversation}  />
                </div>
              );
            })
          ) : (
            <h2 style={{ textAlign: "center", marginTop: "80%" }}>
              No users...
            </h2>
          )}
        </div>
        <div className="main-chat">
          {currentChat ? (
            <div className="chat-sec">
              <div className="chat-head">
                  <img src={locationData?.images?.at(0)} alt="profile" />
                <div>
                  <h5>{currentChat?.locationId}</h5>
                  <p>{firstUser?.personalInfo.fullName}, owner - {secondUser?.personalInfo.fullName}</p>
                </div>
                {/* <SearchOutlined className="searchIcon" /> */}
              </div>
              <div className="convo-main">
                <div>
                  
                  {messages?.map((message, index) => {
                    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
                    return (
                      <div>
                        <MessageThread
                          message={message}
                          own={message.senderId === currentChat?.members?.at(0)}
                          id={index}
                        />
                      </div>
                    );
                  })}
                  <div className="bottom-chat" ref={scrollRef}>
                    {" "}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="no-chat">
              <h4>Your Messages</h4>
            </div>
          )}
        </div>
       
        <div className="chat-propery-info">
        {
          currentChat ? (
            <>
            <img src={locationData?.images?.at(0)} alt="property-img" />
          <div>
            <h2>{locationId}</h2>
            <h4>{locationData?.property_address?.address}</h4>
            <h5>Rs {bookingDetail?.total_amt}</h5>
            <h4>Reserved Date</h4>
            <h5>{dd}th {toMonthName(mm)} {yyyy}</h5>
            <h4>Reserved Time</h4>
            <h5>{bookingDetail?.time + " - " + endTime + bookingDetail?.time?.substr(2)}</h5>
            <h4>Attendies</h4>
            <h5>{bookingDetail?.attendies} people</h5>
          </div>
        
            </>
          ) : (
            <div className="no-chat">
            <h4>Your Location</h4>
          </div>
          )
        }
        </div>
      </div>
    </div>
  );
}
