import React from "react";
import "./styles.js";

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
