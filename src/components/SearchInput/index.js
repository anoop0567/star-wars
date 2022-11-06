import "./style.css";

const SearchInput = ({ value, onChange }) => {
  return (
    <form className="d-flex" role="search">
      <div className="search-container">
        <i className="bi bi-search"></i>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
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
