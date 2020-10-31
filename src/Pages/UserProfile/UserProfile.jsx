//import { render } from "@testing-library/react";
import React from "react";
//import EditProfile from "./EditProfile";

const UserProfile = () => {
  const data = {
    image: "hii",
    name: "Anil",
    emailId: "asa@gmail.com",
    gender: "male",
    bio: "Plant Lover",
    location: "Cuttack",
    workProfile: "Frontend Developer",
    githubUrl: "asaaa",
    linkedinUrl: "asssss",
    skills: ["java", "javascript"],
    projects: [
      {
        name: "fitness",
      },
      {
        name: "getdev",
      },
    ],
  };
  //   const handleOnClick = () => {
  //     // return (
  //     //   <div>
  //     //     alert("Edit button clicked");
  //     //     {/* <EditProfile />; */}
  //     //     {/* <h4>Hii</h4> */}
  //     //   </div>
  //     // );
  //     //{ <EditProfile /> }
  //     //alert("Edit button clicked");
  //     //return console.log("Hii");
  //   };

  return (
    <div className="user-section">
      <div className="user-image">
        <img src={data.image} alt={data.name} />{" "}
      </div>{" "}
      <div className="user-detiails">
        <div className="basic-user-details">
          <h5> Name: {data.name} </h5> <h5> Email Id: {data.emailId} </h5>{" "}
          <h5> Gender: {data.gender} </h5> <h5> Bio: {data.bio} </h5>{" "}
          <h5> Location: {data.location} </h5>{" "}
        </div>{" "}
        <div className="work-user-details">
          <h5> Work Profile: {data.workProfile} </h5>{" "}
          <h5> GitHub: {data.githubUrl} </h5>{" "}
          <h5> LinkedIn: {data.linkedinUrl} </h5> <h5> Skills: </h5>{" "}
          {data.skills.map((item) => (
            <li> {item} </li>
          ))}{" "}
          <h5> Projects Done: </h5>{" "}
          {data.projects.map((item) => (
            <li> {item.name} </li>
          ))}{" "}
        </div>{" "}
        {/* <div className="edit-button">
                      <button onClick={handleOnClick}>Edit User Profile</button>
                    </div> */}{" "}
      </div>{" "}
    </div>
  );
};

export default UserProfile;
