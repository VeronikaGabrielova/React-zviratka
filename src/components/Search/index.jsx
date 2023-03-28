import React from "react";

const Search = ({ onChange }) => {
  return (
    <input
      style={{ display: "block", margin: "0 auto" }}
      onChange={onChange}
      type="text"
      placeholder="Hledej zvíře"
      id=""
    />
  );
};

export default Search;
