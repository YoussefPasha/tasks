import React, { useContext } from "react";
import { userContext } from "../../userContext";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  const { user } = useContext(userContext);
  const history = useHistory();
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand">
          {user ? (
            <button type="button" className="btn btn-primary">
              {user}
            </button>
          ) : (
            history.push("/login")
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
