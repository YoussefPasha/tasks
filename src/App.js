import React, { useMemo, useState } from "react";
import "./App.css";
import Navbar from "./Components/NavigationBar/Navbar";
import UserList from "./Components/UsersList/UserList";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/SignUp";
import { userContext } from "./userContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <Router>
      <div className="App">
        <userContext.Provider value={value}>
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
        </userContext.Provider>
      </div>
    </Router>
  );
}

export default App;
