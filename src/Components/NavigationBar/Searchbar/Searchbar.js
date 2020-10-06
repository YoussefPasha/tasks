import React from "react";
import "./Searchbar.css";
const Searchbar = () => {
  return (
    <div className="SearchBox">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search With Email"
          aria-label="Search"
        />
      </form>
    </div>
  );
};

export default Searchbar;
