import React, { useRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Search({ setSearchValue, handleSearch }) {
  const inputRef = useRef(null);
  return (
    <>
      <form
        onSubmit={(e) => {
          handleSearch(e);
          inputRef.current.blur();
        }}
      >
        <FaMagnifyingGlass />
        <input
          ref={inputRef}
          type="text"
          name="search"
          id="search"
          placeholder="City..."
          required
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
    </>
  );
}

export default Search;
