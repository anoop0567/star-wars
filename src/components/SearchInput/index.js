import "./style.css";

const SearchInput = () => {
  return (
    <form className="d-flex" role="search">
      <div className="search-container">
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </form>
  );
};

export default SearchInput;
