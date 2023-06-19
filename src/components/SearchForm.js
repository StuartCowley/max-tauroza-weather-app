import React from "react";

const SearchForm = ({ searchText, setSearchText, onSubmit }) => {
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <div className="search-form">
      <label htmlFor="location-search">
        Change location
        <input
          type="text"
          placeholder="Enter a town or city"
          id="location-search"
          onChange={handleInputChange}
          value={searchText}
        />
        <button type="submit" onClick={onSubmit}>
          Search
        </button>
      </label>
    </div>
  );
};

export default SearchForm;
