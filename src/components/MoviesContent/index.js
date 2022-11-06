import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import MovieCard from "../MovieCard";
import Loader from "../Loader";
import { FILMS_QUERY } from "../../api";
import MoviesActions from "../MoviesActions";

const MoviesContent = () => {
  const [films, setFilms] = useState([]);
  const [sortBy, setSortBy] = useState("TITLE");

  const { data, loading, error } = useQuery(FILMS_QUERY);

  useEffect(() => {
    if (!data) {
      setFilms([]);
      return;
    }
    let FILMS = data?.allFilms?.films || [];
    if (sortBy === "TITLE") {
      FILMS = [...FILMS].sort((a, b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
      });
    } else if (sortBy === "RELEASE_DATE") {
      FILMS = [...FILMS].sort((a, b) => {
        const aTime = new Date(a.releaseDate).getTime();
        const bTime = new Date(b.releaseDate).getTime();
        if (aTime > bTime) return 1;
        if (aTime < bTime) return -1;
        return 0;
      });
    }
    setFilms([...FILMS]);
  }, [data, sortBy]);

  if (error) return <pre>{error.message}</pre>;

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
