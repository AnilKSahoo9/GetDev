import React from "react";
//import { Container, Row, Col } from "reactstrap";
import UserList from "../../Shared/User/UserList";
//import "./Dashboard.css";

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
  return (
    // <Container>
    //   <Row>
    //     <Col xs="3">Request Section</Col>
    //     <Col xs="3">Accept Section</Col>
    //     <Col xs="3">Chat Section</Col>
    //   </Row>
    // </Container>
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

// import React from 'react';
// const Dashboard = () => {
//   return (
//     <div>
//       <h5>hi,,sweta...welcome to the world of devs welcome to the dashboard</h5>
//     </div>
//   );
// };
// export default Dashboard;
