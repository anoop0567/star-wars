import React from "react";

import "./style.css";

const MoviesActions = ({ sortByValue, onSortByChange }) => {
  const isSelected = (value) => {
    return value === sortByValue;
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-secondary rounded-0 dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-funnel"></i>
        <span className="mx-2">Sort By</span>
      </button>
      <ul className="dropdown-menu">
        <li onClick={() => onSortByChange("TITLE")}>
          <span className={`dropdown-item ${isSelected("TITLE") && "active"}`}>
            Title
          </span>
        </li>
        <li onClick={() => onSortByChange("RELEASE_DATE")}>
          <span
            className={`dropdown-item ${
              isSelected("RELEASE_DATE") && "active"
            }`}
          >
            Release Date
          </span>
        </li>
      </ul>
    </div>
  );
};

export default MoviesActions;
