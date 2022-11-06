import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { FILMS_QUERY } from "./api";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MoviesContent from "./components/MoviesContent";
import "./App.css";

function App() {
  const [films, setFilms] = useState([]);
  const [sortBy, setSortBy] = useState("TITLE");
  const [director, setDirector] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const { data, loading, error } = useQuery(FILMS_QUERY);

  useEffect(() => {
    if (!data) {
      setFilms([]);
      return;
    }
    let FILMS = data?.allFilms?.films || [];
    if (director) {
      FILMS = [...FILMS].filter((film) => {
        return film.director == director;
      });
    }
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
    if (searchValue) {
      FILMS = FILMS.filter((film) => {
        return film.title.toLowerCase().includes(searchValue.toLowerCase());
      });
    }
    setFilms([...FILMS]);
  }, [data, sortBy, director, searchValue]);

  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <MoviesContent
        loading={loading}
        films={films}
        sortBy={sortBy}
        setSortBy={setSortBy}
        director={director}
        setDirector={setDirector}
        error={error}
      />
      <Footer />
    </>
  );
}

export default App;
