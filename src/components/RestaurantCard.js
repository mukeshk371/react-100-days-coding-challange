import { CDN_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div className="res-card">
      <div className="res-card-content">
        <img
          alt="res-img"
          width="100%"
          height="200px"
          src={CDN_URL + cloudinaryImageId}
        />
        <section>
          <h3>{name}</h3>
          <span>{cuisines.join(", ")}</span>
          <span>{avgRating} Stars</span>
          <span>{deliveryTime} Minutes</span>
          <span>{costForTwo}</span>
        </section>
      </div>
    </div>
  );
};
