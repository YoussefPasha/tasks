import React from "react";
import "./Searchbar.css";
const Searchbar = (props) => {
  const handleChange = (event) => {
    props.getSearchedVal(event.target.value);
  };
  return (
    <div className="SearchBox">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search With Email"
          aria-label="Search"
          onChange={handleChange.bind(this)}
        />
      </form>
    </div>
  );
};

export default Searchbar;
