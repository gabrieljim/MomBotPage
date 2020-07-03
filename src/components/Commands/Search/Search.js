import React from "react";
import "./Search.css";

const Search = props => {
  return (
    <input
      type="text"
      name="search"
      id="searchbar"
      value={props.search}
      placeholder="Search for a command..."
      onChange={e => props.handler(e)}
      autoComplete="off"
    />
  );
};

export default Search;
