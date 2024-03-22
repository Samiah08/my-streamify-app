import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input className="Search-Input-Text"
        type="text"
        placeholder="Search Movies....."
        value={searchTerm}
        onChange={handleChange}
      />
      <Button variant="secondary" size="lg" type="submit">
        Search
        {"\t"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </Button>
    </form>
  );
};

export default SearchBar;