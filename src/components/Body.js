import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { whatsInYourMind } from "../utils/whatsInYourMind";
import { FILTER_LOGO_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

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
  const [restaurantHeading, setRestaurantHeading] = useState(
    "Restaurants with online food delivery"
  );
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (filter) => {
    setFilteredCuisine(filter.action.text);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRestaurants =
    filteredCuisine === "All"
      ? swiggyData.filter((restaurant) =>
          restaurant.info.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : swiggyData.filter((restaurant) =>
          restaurant.info.cuisines.includes(filteredCuisine) &&
          restaurant.info.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.59051311404269&lng=73.78173284232614&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      console.log(jsonData);
      const restaurantList =
        jsonData.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
      setSwiggyData(restaurantList);
      setRestaurantHeading(jsonData.data.cards[0].card.card.title);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return swiggyData.length == 0 ? <Shimmer /> : (
    <div className="body">
      <div className="body-content lg:px-[16px]">
        <div className="search-box">
          <input
            type="text"
            className="search-input border-[rgba(40,44,63,.2)] border-[1px] rounded-[4px] h-[48] w-full"
            placeholder="Search for restaurants and food"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
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
          {restaurantHeading}
        </h1>
        <div className="res-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] md:px-[16px] lg:px-0">
          <RestaurantList restaurants={filteredRestaurants} />
        </div>
        <span className="hr my-[24px] lg:my-[32px] block border border-[rgb(240, 240, 245)]" />
      </div>
    </div>
  );
};
