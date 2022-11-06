const SearchButton = () => {
  return (
    <div className="d-flex">
      <button
        type="button"
        className="btn btn-outline-secondary rounded-0 w-100 text-start"
      >
        <i class="bi bi-search"></i>
        <span className="mx-2">Search</span>
      </button>
    </div>
  );
};

export default SearchButton;
