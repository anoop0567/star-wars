import "./style.css";

const SearchInput = () => {
  return (
    <form class="d-flex" role="search">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </form>
  );
};

export default SearchInput;
