import React, { useState, useContext } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { userContext } from "../../userContext";
import Cookies from "js-cookie";
const Login = () => {
  let history = useHistory();
  const { setUser } = useContext(userContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const serachForEmail = (users, email, password) => {
    console.log(email);
    for (let i in users) {
      if (users[i].email === email) {
        if (users[i].password === password) {
          return true;
        }
        console.log("Password err");
      }
    }
    return false;
  };
  const handleChange = (event) => {
    if (event.target.id === "email") {
      setEmail(event.target.value);
    } else if (event.target.id === "password") {
      setPassword(event.target.value);
    } else if (event.target.id === "check") {
      setRememberMe(true);
    }
  };
  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      let retrievedData = await localStorage.getItem("users");
      let jsonUsers = JSON.parse(retrievedData);
      let users = [];
      for (let i in jsonUsers) {
        users.push(jsonUsers[i]);
      }
      if (serachForEmail(users, email, password)) {
        setUser(email);
        history.push("/");
        Cookies.set("user", email);
      } else {
        console.log("denied");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="login" onSubmit={handleFormSubmit}>
      <h3>Sign In</h3>

      <div className="login__container">
        <label>Email address</label>
        <input
          id="email"
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={handleChange}
          value={email}
        />
      </div>

      <div className="login__container">
        <label>Password</label>
        <input
          id="password"
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={handleChange}
        />
      </div>

      <div className="login__container">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label
            id="check"
            className="custom-control-label"
            htmlFor="customCheck1"
            checked={rememberMe}
            onChange={handleChange}
          >
            Remember me
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <p className="forgot-password text-right">
        Create Account <Link to="/signup">sign up?</Link>
      </p>
    </form>
  );
};
export default Login;
