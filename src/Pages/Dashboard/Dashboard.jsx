import React from "react";
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
    <div className="main-container">
      <div className="request-section">
        <h5>Request Section</h5>
        <UserList item={users} />
      </div>
      <div className="accept-section">
        <h5>AcceptSection</h5>
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
