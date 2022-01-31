import React, { useState } from "react";
import Data from "../components/AuctionArray/contactinfo.json";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = Data.filter((value) => {
        return value.username.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };
  
    const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    };
  
    return (
      <div className="search">
          <h1>How can the team help you today?</h1>
        <div className="searchInputs">
          <input
            type="text"
            placeholder="Search AuctionIt Help!"
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
        {filteredData.length != 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <a className="dataItem" href={value.link} target="_blank">
                  <h2>{value.username}</h2>
                  <h3>{value.first_name}</h3>
                  <p>{value.Country}</p>
                  <p>{value.email}</p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    );
  }
  
  export default SearchBar;