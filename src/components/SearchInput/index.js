import React from "react";
import "./style.css";

const SearchInput = ({ value, onChange }) => {
  const handleOnChange = (e) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <form className="d-flex" role="search">
      <div className="search-container">
        <i className="bi bi-search"></i>
        <input
          value={value}
          onChange={handleOnChange}
          className="search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </form>
  );
};

export default SearchInput;
