import React from "react";

import MovieCard from "../MovieCard";
import Loader from "../Loader";
import MoviesActions from "../MoviesActions";

const MoviesContent = ({ loading, films, sortBy, setSortBy }) => {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col d-flex justify-content-end">
          <MoviesActions
            sortByValue={sortBy}
            onSortByChange={(value) => setSortBy(value)}
          />
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-3">
          {films.map((film) => {
            return (
              <div className="col" key={film?.id}>
                <MovieCard film={film} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MoviesContent;
