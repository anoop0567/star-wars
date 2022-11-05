import React from "react";
import "./style.css";

const MovieCard = ({ film }) => {
  const { title, releaseDate, producers, director, openingCrawl } = film;
  return (
    <div className="card text-bg-dark h-100">
      <div className="card-body">
        <h5 className="card-title text-uppercase fw-bold">{title}</h5>
        <p className="card-text">{openingCrawl}</p>
        <p class="card-text">
          <small class="text-muted">Director: {director}</small>
        </p>
        <p class="card-text">
          <small class="text-muted">Producers: {producers.join(",")}</small>
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Released {releaseDate}</small>
      </div>
    </div>
  );
};

export default MovieCard;
