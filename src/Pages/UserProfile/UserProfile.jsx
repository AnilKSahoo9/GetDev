//import { render } from "@testing-library/react";
import React from "react";
//import EditProfile from "./EditProfile";
import "./UserProfile.css";
import image from "../../assets/Mahi.jpg";

const UserProfile = () => {
  const data = {
    //image: "hii",
    name: "Ankur Malhotra",
    emailId: "ankur@gmail.com",
    gender: "Male",
    bio: "Plant Lover,Bibliophile",
    location: "Bhadrak,Odisha,India",
    workProfile: "Frontend Developer",
    githubUrl: "www.github.com/ankur",
    linkedinUrl: "www.linkedin.com/ankur",
    skills: ["Java", "JavaScript", "PHP", "MySQL", "Python", "C", "C++"],
    projects: [
      {
        name: "Fitness Tracking and Visualisation System",
        description:
          "This project is basically for fitness enthusiastic persons. Who loves to stay fit and healthy",
      },
      {
        name: "Blood Donor Finder",
        description:
          "This a android project in which we can find different blood donors details by using respective blood group and location",
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
      <div className="user-card">
        <div className="user-image">
          <img className="image" src={image} alt={data.name} />
        </div>
        <span className="heading">{data.name}</span>
      </div>
      <div className="user-card">
        <div className="info">
          <span style={{ fontSize: "30px" }}>
            {" "}
            <u>Basic Details</u>{" "}
          </span>
          <br />
          <span> Email Id: {data.emailId} </span>
          <br />
          <span> Gender: {data.gender} </span>
          <br />
          <span> Bio: {data.bio} </span>
          <br />
          <span> Location: {data.location} </span>
        </div>
      </div>
      <div className="user-card">
        <div className="info">
          <span style={{ fontSize: "30px" }}>
            {" "}
            <u>Tech Details</u>{" "}
          </span>
          <br />
          <span> Work Profile: {data.workProfile} </span>
          <br />
          <span> GitHub: {data.githubUrl} </span>
          <br />
          <span> LinkedIn: {data.linkedinUrl} </span>
          <br />
          <span> Skills: </span>
          {data.skills.map((item) => (
            <li className="list"> {item} </li>
          ))}
        </div>
      </div>
      <div className="user-card">
        <div className="info">
          <span style={{ fontSize: "30px" }}>
            {" "}
            <u>Projects</u>{" "}
          </span>
          {data.projects.map((item) => (
            <div>
              <li id="list"> {item.name} </li>
              <ul id="description">{item.description}</ul>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="user-detiails">
        <div className="basic-user-details">
          <h5> Name: {data.name} </h5>
          <h5> Email Id: {data.emailId} </h5>
          <h5> Gender: {data.gender} </h5>
          <h5> Bio: {data.bio} </h5>
          <h5> Location: {data.location} </h5>
        </div>
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
      </div>{" "} */}
    </div>
  );
};

export default UserProfile;
