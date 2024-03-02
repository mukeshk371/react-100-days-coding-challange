import React, { useEffect, useState } from "react";
import Shimmer from "../Shimmer";

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const restaurantMenuData = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.106926&lng=85.357232&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await restaurantMenuData.json();
    console.log(jsonData);
    setRestaurantInfo(jsonData.data);
  };

  return restaurantInfo == null ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <h1>Restaurant Name</h1>
      <h2>Menu</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 1</li>
        <li>Item 1</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
