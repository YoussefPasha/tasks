import React, { useContext, useState } from "react";
import { userContext } from "../../userContext";
import { Link, useHistory } from "react-router-dom";
import Searchbar from "./Searchbar/Searchbar";
import Cookies from "js-cookie";
import UserList from "../UsersList/UserList";
const Navbar = () => {
  const { user, setUser } = useContext(userContext);
  const history = useHistory();
  const [searchValue, setSearchValue] = useState(" ");
  const clickHandler = () => {
    Cookies.remove("user");
  };
  const onChangeValue = (newValue) => {
    setSearchValue(newValue);
    console.log(searchValue);
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
          <Searchbar onChangeValue={onChangeValue.bind(this)} />
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
      <UserList />
    </div>
  );
};

export default Navbar;
