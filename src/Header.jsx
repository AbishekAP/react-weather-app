import React from "react";
import Search from "./Search";

function Header({ searchValue, setSearchValue, handleSearch }) {
  return (
    <>
      <header>
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearch={handleSearch}
        />
      </header>
    </>
  );
}

export default Header;
