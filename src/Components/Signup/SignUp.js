import React, { Component, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
const SignUp = () => {
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };
  const [data, setData] = useState({
    email: "",
    fullName: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const serachForEmail = (users, email) => {
    for (let i in users) {
      if (users[i].email === email) {
        return false;
      }
    }
    return true;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm(errors)) {
      try {
        if (localStorage.getItem("users")) {
          let retrievedData = await localStorage.getItem("users");
          let jsonUsers = JSON.parse(retrievedData);
          let users = [];
          for (let i in jsonUsers) {
            users.push(jsonUsers[i]);
          }
          if (serachForEmail(users, data.email)) {
            users.push(data);
            localStorage.setItem("users", JSON.stringify(users));
          } else {
            console.log("error");
          }
        } else {
          let users = [];
          users.push(data);
          localStorage.setItem("users", JSON.stringify(users));
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      console.error("Invalid Form");
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let err = { ...errors };
    let val = { ...data };
    switch (name) {
      case "fullName":
        err.fullName =
          value.length < 5
            ? "Full Name must be at least 5 characters long!"
            : "";
        val.fullName = value.length < 5 ? "" : value;
        break;
      case "email":
        err.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        val.email = validEmailRegex.test(value) ? value : "";
        break;
      case "password":
        err.password =
          value.length < 8
            ? "Password must be at least 8 characters long!"
            : "";

        val.password = value.length < 8 ? "" : value;
        break;
      default:
        break;
    }
    setErrors(err);
    setData(val);
  };

  return (
    <form className="signin" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div className="signin__container">
        <label>Full name</label>
        <input
          type="text"
          name="fullName"
          onChange={handleChange}
          className="form-control"
          placeholder="Full name"
          noValidate
        />
        {errors.fullName.length > 0 && (
          <span className="error">{errors.fullName}</span>
        )}
      </div>

      <div className="signin__container">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="form-control"
          placeholder="Enter email"
          noValidate
        />
        {errors.email.length > 0 && (
          <span className="error">{errors.email}</span>
        )}
      </div>

      <div className="signin__container">
        <label>Password</label>
        <input
          name="password"
          onChange={handleChange}
          type="password"
          className="form-control"
          noValidate
          placeholder="Enter password"
        />
        {errors.password.length > 0 && (
          <span className="error">{errors.password}</span>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <Link to="/login">sign in?</Link>
      </p>
    </form>
  );
};
export default SignUp;
