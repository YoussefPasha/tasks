import React from "react";
import "./App.css";
import Navbar from "./Components/NavigationBar/Navbar";
import UserList from "./Components/UsersList/UserList";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Navbar />
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
