import React, { useState } from "react";

const Search = () => {
  const [zipcode, setZipcode] = useState("");

  const handdleClick = (e) => {
    e.preventDefault();
    setZipcode("");
    };

  return (
    <div>
      <input 
      type="text" 
      placeholder="Search..."
      value={zipcode} 
      />
      <button onClick={handdleClick} >Buscar!</button>
    </div>
  );
};

export default Search;
