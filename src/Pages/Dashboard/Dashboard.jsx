//import axios from "axios";
import React, { useState, useEffect } from "react";
//import { Container, Row, Col } from "reactstrap";
import UserList from "../../Shared/User/UserList";
//import { getUser } from "../../utils/common";
//import "./Dashboard.css";
//export const API_BASE_URL = process.env.REACT_APP_SERVER_URL;

const users = [
  {
    id: 1,
    name: "Anil",
    image: "D:PhotosHomeMeIMG_0987",
  },
  {
    id: 2,
    name: "Ankur",
    image: "D:PhotosHomeMeIMG_0987",
  },
  {
    id: 3,
    name: "Himanshu",
    image: "D:PhotosHomeMeIMG_0987",
  },
];

const Dashboard = () => {
  // const [reqUser, setReqUser] = useState(null);
  // const [acceptUser, setAcceptUser] = useState(null);
  // const emailId = getUser();

  // useEffect(() => {
  //   const fetchData = () => {
  //     axios
  //       .get(API_BASE_URL + "/user/login", { userId: emailId })
  //       .then((res) => {
  //         setReqUser(res.data.reuest_section);
  //         setAcceptUser(res.data.accept_section);
  //       })
  //       .catch((err) => console.log(err));
  //   };
  //   emailId && fetchData();
  // }, [emailId]);

  return (
    <div className="main-container">
      <div className="request-section">
        <span
          style={{ marginLeft: "450px", fontSize: "20px", fontWeight: "bold" }}
        >
          User's Request Section
        </span>
        <UserList item={users} />
      </div>
      <div className="accept-section">
        <span style={{ fontSize: "20px", fontWeight: "bold" }}>
          User's Accept Section
        </span>
        <UserList item={users} isAcceptSection={true} />
      </div>
      <div className="chat-section"></div>
    </div>
  );
};

export default Dashboard;
