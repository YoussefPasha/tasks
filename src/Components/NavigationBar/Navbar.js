import React, { useContext } from "react";
import { userContext } from "../../userContext";
import { useHistory } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const { user, setUser } = useContext(userContext);
  const history = useHistory();
  const handleClick = () => {
    setUser(null);
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand">
          {user ? (
            <div>
              <button type="button" className="btn btn-primary">
                {user}
              </button>
              <div className="logout__button">
                <button
                  type="button"
                  onClick={handleClick}
                  className="btn btn-danger"
                >
                  LOGOUT
                </button>
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
