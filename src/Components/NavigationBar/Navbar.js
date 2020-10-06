import React, { useContext } from "react";
import { userContext } from "../../userContext";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
const Navbar = () => {
  const { user } = useContext(userContext);
  const history = useHistory();
  const clickHandler = () => {
    Cookies.remove("user");
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-brand">
            {user ? (
              <div>
                <button type="button" className="btn btn-primary">
                  {user.split("@gmail.com")}
                </button>
              </div>
            ) : (
              history.push("/login")
            )}
          </div>
        </div>
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
      </nav>
    </div>
  );
};

export default Navbar;
