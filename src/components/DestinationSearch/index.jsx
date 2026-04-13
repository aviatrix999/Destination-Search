import { useState } from "react";
import DestinationItem from "../DestinationItem";
import "./index.css";
const DestinationSearch = ({ destinationList }) => {
  const [searchInput, setSearchInput] = useState("");

  const onChangeSearchInput = (event) => {
    setSearchInput(event.target.value);
  };
  const searchResults = destinationList.filter((eachDestination) =>
    eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
  );
  const onDeleteDestination = (id) => {
    console.log(id);
  };

  return (
    <div className="app-container">
      <div className="destinations-search-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-input-container">
          <input
            className="search-input"
            type="text"
            placeholder="search-destination"
            onChange={onChangeSearchInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>

        <ul className="destinations-list">
          {searchResults.map((eachDestination) => (
            <DestinationItem
              key={eachDestination.id}
              destinationDetails={eachDestination}
              onDeleteDestination={onDeleteDestination(
                () => eachDestination.id,
              )}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default DestinationSearch;
