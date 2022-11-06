import MovieCard from "../MovieCard";
import { FILMS } from "../../db/films";

const MoviesContent = () => {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col col d-flex justify-content-end">
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary rounded-0 dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Director
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary rounded-0 dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort By
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Title
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Release Date
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-3">
        {FILMS.map((film) => {
          return (
            <div className="col" key={film?.id}>
              <MovieCard film={film} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesContent;
