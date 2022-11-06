import React from "react";
import "./style.css";

const MovieCard = ({ film }) => {
  const { title, releaseDate, producers, director, openingCrawl } = film;
  return (
    <div className="card rounded-0 text-bg-dark h-100">
      <div className="card-header">
        <h5 className="card-title text-uppercase fw-bold mb-0">{title}</h5>
      </div>
      <div className="card-body">
        <p className="card-text">{openingCrawl}</p>
      </div>
      <div className="card-footer">
        <p class="card-text">
          <div class="text-muted">🎬 Director - {director}</div>
          <div class="text-muted">💰 Producers - {producers.join(", ")}</div>
          <div class="text-muted">🗓️ Released - {releaseDate}</div>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
