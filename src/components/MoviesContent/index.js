import React, { useEffect } from "react";

import MovieCard from "../MovieCard";
import Loader from "../Loader";
import MoviesActions from "../MoviesActions";
import DataNotFound from "../DataNotFound";

const MoviesContent = ({
  loading,
  error,
  films,
  sortBy,
  setSortBy,
  director,
  setDirector,
}) => {
  useEffect(() => {
    if (!films || films.length == 0) return;
  }, [films]);
  return (
    <main className="container my-4">
      <div className="row my-3">
        <div className="col d-flex justify-content-end">
          <MoviesActions
            sortByValue={sortBy}
            onSortByChange={(value) => setSortBy(value)}
            director={director}
            onDirectorChange={(value) => setDirector(value)}
          />
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : error || films.length == 0 ? (
        <DataNotFound />
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
    </main>
  );
};

export default MoviesContent;
