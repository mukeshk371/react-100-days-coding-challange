import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { whatsInYourMind } from "../utils/whatsInYourMind";
import { FILTER_LOGO_URL } from "../utils/constants";

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
      <button
        className="filter-anchor w-[80px] md:w-[144px] mr-[12px] lg:mr-[24px]"
        key={filter.id}
        onClick={() => onSelectFilter(filter)}
      >
        <img src={FILTER_LOGO_URL + filter.imageId} alt={filter.name} />
      </button>
    ))}
  </>
);

export const Body = () => {
  const [filteredCuisine, setFilteredCuisine] = useState("All");
  const [swiggyData, setSwiggyData] = useState([]);

  const handleFilterChange = (filter) => {
    setFilteredCuisine(filter.action.text);
  };

  const filteredRestaurants =
    filteredCuisine === "All"
      ? resList
      : resList.filter((restaurant) =>
          restaurant.info.cuisines.includes(filteredCuisine)
        );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setSwiggyData(data);
      console.log(data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="body">
      <div className="body-content lg:px-[16px]">
        <div className="whats-in-your-mind lg:py-[16px]">
          <h1 className="p-[16px] lg:px-0 text-[20px] lg:text-[24px] font-extrabold tracking-[-.4px]">
            MUKESH, what's on your mind?
          </h1>
          <div className="whitespace-nowrap overflow-x-auto px-[16px] lg:px-0">
            <RestaurantFilter
              filters={whatsInYourMind}
              onSelectFilter={handleFilterChange}
            />
          </div>
        </div>
        <span className="hr my-[24px] lg:my-[32px] block border border-[rgb(240, 240, 245)]" />
        <h1 className="p-[16px] lg:px-0 text-[20px] lg:text-[24px] font-extrabold tracking-[-.4px]">
          Restaurants with online food delivery in Muzaffarpur
        </h1>
        <div className="res-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] md:px-[16px] lg:px-0">
          <RestaurantList restaurants={filteredRestaurants} />
        </div>
        <span className="hr my-[24px] lg:my-[32px] block border border-[rgb(240, 240, 245)]" />
      </div>
    </div>
  );
};