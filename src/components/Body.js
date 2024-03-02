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
  const [facetList, setFacetList] = useState([]);
  const [showCloseBtn, setShowCloseBtn] = useState(false);

  const handleFilterChange = (filter) => {
    setFilteredCuisine(filter.action.text);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleShowCloseBtn = () => {
    setShowCloseBtn(!showCloseBtn);
  };

  const filteredRestaurants =
    filteredCuisine === "All"
      ? swiggyData.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      : swiggyData.filter(
        (restaurant) =>
          restaurant.info.cuisines.includes(filteredCuisine) &&
          restaurant.info.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
      );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.106926&lng=85.357232&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
      setFacetList(jsonData.data.cards[1].card.card.facetList);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return swiggyData.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="body-content lg:px-[16px]">
        <div className="search-box relative mt-[30px]">
          <input
            type="text"
            className="search-input border-[rgba(40,44,63,.2)] border-[1px] rounded-[4px] h-[48] w-full px-[16px]"
            placeholder="Search for restaurants and food"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <svg
            viewBox="5 -1 12 25"
            height="17"
            width="17"
            fill="#686b78"
            className="absolute right-0 top-[50%] translate-y-[-50%] right-[16px]"
          >
            <path d="M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"></path>
          </svg>
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
        <div className="flex flex-wrap pb-[32px] pt-[16px]">
          {facetList.map((face) => (
            <div
              className="facet-div px-[12px] py-[8px] border-[rgb(54, 57, 62)] border-[1px] rounded-[500px] mr-[10px]"
              onClick={handleShowCloseBtn}
              key={face.id}
            >
              <span>{face.label}</span>
              {showCloseBtn && <span>X</span>}
            </div>
          ))}
        </div>
        <div className="res-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] md:px-[16px] lg:px-0">
          <RestaurantList restaurants={filteredRestaurants} />
        </div>
        <span className="hr my-[24px] lg:my-[32px] block border border-[rgb(240, 240, 245)]" />
      </div>
    </div>
  );
};
