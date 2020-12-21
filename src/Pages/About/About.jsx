import React from "react";
import "./About.css";
const About = () => {
  return (
    <div
      className="container"
      // style={{ marginLeft: "0px", marginTop: "-20px" }}
    >
      <div className="text">
        <h1> About GetDev</h1>
        <br />
        <br />
        <p>
          In the recent era, information technology plays a major role in
          everyone’s life and is used everywhere. So the demand to learn
          information technology or computer science is growing nowadays. As the
          manpower in the IT field increasing, new ideas flourish in the minds
          of different IT professionals. So to work on these new ideas, they
          either need some other developers who’re best in those fields or just
          simply they can do it by themselves. In the first case our project
          comes into the scenario because this project provides a platform for
          developers to collaborate with each other.
        </p>
        <br />
        <p>
          This project is basically for the developers who want to execute the
          new ideas for solving real life problems or for gaining some extra
          practical knowledge of what they know before. Using these ideas
          developers can collaborate with each other for accomplishing the ideas
          they have. Here developers will give the skills, technical knowledge
          and projects they have done earlier, in their profile section. If any
          developer wants to collaborate with each other by visiting his/her
          profile, then he/she can make request to that developer. After
          accepting the request from the developer they can collaborate and
          share ideas about the respective project.
        </p>
      </div>
      {/* <div className="back"></div> */}
    </div>
  );
};

export default About;
