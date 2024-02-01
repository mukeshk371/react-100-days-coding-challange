import { RestaurantCard } from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { whatsInYourMind } from "../utils/whatsInYourMind";
import { FILTER_LOGO_URL } from "../utils/constants";
import { useState } from "react";

const RestaurantList = ({ restaurants }) => (
  <>
    {restaurants.map((restaurant, index) => (
      <RestaurantCard key={index} restaurant={restaurant} />
    ))}
  </>
);

const RestaurantFilter = ({ filters, onSelectFilter }) => (
  <>
    {filters.map((filter) => (
      <button className="filter-anchor" key={filter.id} onClick={() => onSelectFilter(filter)}>
        <img src={FILTER_LOGO_URL+filter.imageId} />
      </button>
    ))}
  </>
);

export const Body = () => {
  const [filteredCuisine, setFilteredCuisine] = useState("All");

  const handleFilterChange = (filter) => {
    setFilteredCuisine(filter.action.text);
  };

  const filteredRestaurants =
    filteredCuisine === "All"
      ? resList
      : resList.filter((restaurant) =>
          restaurant.info.cuisines.includes(filteredCuisine)
        );

  return (
    <div className="body">
      <div className="body-content">
        <div className="whats-in-your-mind">
          <h1>MUKESH, what's on your mind?</h1>
          <div className="whitespace-nowrap">
            <RestaurantFilter
              filters={whatsInYourMind}
              onSelectFilter={handleFilterChange}
            />
          </div>
        </div>
        <span className="hr" />
        <h1>Restaurants with online food delivery in Muzaffarpur</h1>
        <div className="res-container grid grid-cols-1 md:grid-cols-4 gap-8">
          <RestaurantList restaurants={filteredRestaurants} />
        </div>
        <span className="hr" />
      </div>
    </div>
  );
};
