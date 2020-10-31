import React from "react";
//import "./UserItem.css";

const UserItem = (props) => {
  const buttonHnadler = () => {
    alert("Accept Button clicked");
  };
  return (
    <li className="user-item">
      <div className="user-item_image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="user-item_name">
        <h6>{props.name}</h6>
      </div>
      {props.isAcceptSection ? (
        <div className="button">
          <button onClick={buttonHnadler}>Accept</button>
        </div>
      ) : null}
    </li>
  );
};

export default UserItem;
