import React from "react";
import "./style.css";

const MovieCard = ({ film }) => {
  const { title, releaseDate, producers, director, openingCrawl } = film;

  const formatDate = (releaseDate) => {
    const date = new Date(releaseDate);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en", options);
  };

  return (
    <div className="card rounded-0 text-bg-dark h-100">
      <div className="card-header">
        <h5 className="card-title text-uppercase fw-bold mb-0">{title}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">{openingCrawl}</p>
      </div>
      <div className="card-footer">
        <p className="card-text">
          <span className="d-block text-muted">🎬 Director - {director}</span>
          <span className="d-block text-muted">
            💰 Producers - {producers.join(", ")}
          </span>
          <span className="d-block text-muted">
            🗓️ Released - {formatDate(releaseDate)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
