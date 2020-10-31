import React from "react";
import UserItem from "./UserItem";

const UserList = (props) => {
  if (props.item.length === 0) {
    return (
      <div className="no-user-list">
        <h2>No users present</h2>
      </div>
    );
  }
  return (
    <ul className="user-list">
      {props.item.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          isAcceptSection={props.isAcceptSection}
        />
      ))}
    </ul>
  );
};

export default UserList;
