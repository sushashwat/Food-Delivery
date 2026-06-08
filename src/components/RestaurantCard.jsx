import React from "react";

function RestaurantCard({ restrray }) {
  return (
    <div className="flex flex-wrap">
      {restrray.map((item) => (
        <div key={item.info.id} className="m-8">
          <img
            className="w-58 h-42 rounded-2xl"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.info.cloudinaryImageId}`}
            alt={item.info.name}
          />

          <h1 className="font-bold">{item.info.name}</h1>

          <span className="font-bold">{item.info.avgRating}</span>

          <span className="mx-3">{item.info.sla.slaString}</span>

          <p>{item.info.cuisines.join(", ")}</p>

          <p>{item.info.locality}</p>
        </div>
      ))}
    </div>
  );
}

export default RestaurantCard;