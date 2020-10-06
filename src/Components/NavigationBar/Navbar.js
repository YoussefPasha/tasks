import React, { useContext } from "react";
import { userContext } from "../../userContext";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import Cookies from "js-cookie";
const Navbar = () => {
  const { user, setUser } = useContext(userContext);
  const history = useHistory();
  const clickHandler = () => {
    Cookies.remove("user");
  };
  return (
    <div>
      {console.log("ds", user)}
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand">
          {user ? (
            <div>
              <button type="button" className="btn btn-primary">
                {user}
              </button>
              <div className="logout__button">
                <Link to="/login">
                  <button
                    type="button"
                    onClick={clickHandler}
                    className="btn btn-danger"
                  >
                    LOGOUT
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            history.push("/login")
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
