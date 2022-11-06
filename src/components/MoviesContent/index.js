import MovieCard from "../MovieCard";
import { FILMS } from "../../db/films";

const MoviesContent = () => {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col col d-flex justify-content-end">
          <div class="dropdown">
            <button
              class="btn btn-outline-secondary rounded-0 dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Director
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <button
              class="btn btn-outline-secondary rounded-0 dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort By
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Title
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Release Date
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2 g-3">
        {FILMS.map((film) => {
          return (
            <div class="col">
              <MovieCard film={film} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesContent;
