import React from "react";
import "./Searchbar.css";
const Searchbar = (props) => {
  const onChangeValue = (e) => {
    e.preventDefault();
    props.onChangeValue(e.target.value);
  };
  return (
    <div className="SearchBox">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search With Email"
          onChange={onChangeValue.bind(this)}
          aria-label="Search"
        />
      </form>
    </div>
  );
};

export default Searchbar;
