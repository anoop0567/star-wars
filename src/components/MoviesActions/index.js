import React from "react";

import "./style.css";

const DIRECTORS = ["George Lucas", "Richard Marquand", "Irvin Kershner"];

const MoviesActions = ({
  sortByValue,
  onSortByChange,
  director,
  onDirectorChange,
}) => {
  const isSelected = (value) => {
    return value === sortByValue;
  };

  const isSelectedDirector = (value) => {
    return value === director;
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-secondary rounded-0 dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-film"></i>
        <span className="mx-2">Director</span>
      </button>
      <ul className="dropdown-menu">
        {DIRECTORS.map((director, index) => {
          return (
            <li onClick={() => onDirectorChange(director)} key={index}>
              <span
                className={`dropdown-item ${
                  isSelectedDirector(director) && "active"
                }`}
              >
                {director}
              </span>
            </li>
          );
        })}
      </ul>
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
