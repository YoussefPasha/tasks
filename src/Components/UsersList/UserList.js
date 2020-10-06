import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../userContext";

const UserList = () => {
  const { user } = useContext(userContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let arr = [];
    let retrievedData = localStorage.getItem("users");
    let jsonUsers = JSON.parse(retrievedData);
    for (let i in jsonUsers) {
      arr.push(jsonUsers[i]);
    }
    arr = arr.filter(function (obj) {
      return obj.email !== user;
    });
    setUsers(arr);
  }, [user]);
  return (
    <div>
      <div className="card">
        {users.map((human) => (
          <div key={Math.random()} className="card-body">
            <h5 className="card-title">{human.fullName}</h5>
            <p className="card-text">{human.email}</p>
            <div className="btn btn-danger">Delete User</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
