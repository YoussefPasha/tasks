import { combineReducers } from "redux";

const GetUsers = () => {
  let arr = [];
  let retrievedData = localStorage.getItem("users");
  let jsonUsers = JSON.parse(retrievedData);
  for (let i in jsonUsers) {
    arr.push(jsonUsers[i]);
  }
  return [arr];
};

const selectUserToDelete = (selectedUser = null, action) => {
  if (action.type === "DELETE_USER") {
    return action.payload;
  }
  return selectedUser;
};

const LogOut = (logoutForm = null, action) => {
  if (action.type === "LOG_OUT") {
    return action.payload;
  }
  return logoutForm;
};
const LogIn = (loginForm = null, action) => {
  if (action.type === "LOG_IN") {
    return action.payload;
  }
  return loginForm;
};

export default combineReducers({
  users: GetUsers,
  deleteUSer: selectUserToDelete,
  logout: LogOut,
  login: LogIn,
});
