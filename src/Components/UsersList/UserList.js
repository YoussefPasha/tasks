import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../userContext";
import "./UserList.css";
const UserList = () => {
  const { user } = useContext(userContext);
  const [users, setUsers] = useState([]);
  const [storeUsers, setStoreUsers] = useState([]);
  useEffect(() => {
    let arr = [];
    let retrievedData = localStorage.getItem("users");
    let jsonUsers = JSON.parse(retrievedData);
    for (let i in jsonUsers) {
      arr.push(jsonUsers[i]);
    }
    setStoreUsers(arr);
    arr = arr.filter(function (obj) {
      return obj.email !== user;
    });
    setUsers(arr);
  }, [user]);
  const handleDeleteClick = (email) => {
    let arr = [...storeUsers];
    let arr1 = [...users];
    arr = arr.filter(function (obj) {
      return obj.email !== email;
    });
    arr1 = arr1.filter(function (obj) {
      return obj.email !== email;
    });
    setStoreUsers(arr);
    setUsers(arr1);
    console.log(email);
    console.log(arr);
    localStorage.setItem("users", JSON.stringify(arr));
  };
  return (
    <div>
      <div className="card">
        {users.map((human) => (
          <div key={Math.random()} className="passing__human">
            <div className="card-body">
              <h5 className="card-title">{human.fullName}</h5>
              <p className="card-text">{human.email}</p>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteClick(human.email)}
              >
                Delete User
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
