import React, {useState} from "react";
import {getRandomImage} from "../helpers";

function RestaurantCard({restaurant}) {
  const [foodType] = useState(restaurant.food_types.reduce((acc, curr) => acc + ', ' + curr))
  return (
    <div className='restaurant-card'>
      <img src={getRandomImage()} alt=""/>
      <div className='title'>
        {restaurant.name}
      </div>
      <div className="subtitle1">{foodType}</div>
      <div className="details">
        <span className='rating'>
          &#9733; {restaurant.ratings}
        </span>
        .
        <span className='subtitle2'>{restaurant.delivery_time}</span>
        .
        <span className='subtitle2'>₹{restaurant.price_for_two} for two</span>
      </div>
    </div>
  )
}

export default RestaurantCard;
