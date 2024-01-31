import { RestaurantCard } from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { whatsInYourMind } from "../utils/whatsInYourMind";
import { FILTER_LOGO_URL } from "../utils/constants";

export const Body = () => {
  return (
    <div className="body">
      <div className="body-content">
        <div className="whats-in-your-mind">
          <h1>MUKESH, what's on your mind?</h1>
          <div className="whitespace-nowrap">
            {whatsInYourMind.map((resFilter) => (
              <a href="#!" id={resFilter.id} className="filter-anchor inline-block">
                <img src={FILTER_LOGO_URL + resFilter.imageId} />
              </a>
            ))}
          </div>
        </div>
        <div className="res-container grid grid-cols-1 md:grid-cols-4 gap-8">
          {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};
