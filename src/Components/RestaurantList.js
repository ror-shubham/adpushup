import React, {useEffect, useRef, useState} from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantList({title, restaurants, disableMore, scrollPosn, changeSelectedCategory}) {
  const myRef = useRef(null);
  useEffect(()=>{
    const fromTop = myRef.current.getBoundingClientRect().top;
    const fromBottom = myRef.current.getBoundingClientRect().bottom;
    if (fromTop < 50 && fromBottom > 0) {
      changeSelectedCategory(title);
    }
  }, [title, changeSelectedCategory, scrollPosn] );
  const [numLoaded, changeNumLoaded] = useState(0);
  useEffect(() => {
    changeNumLoaded(disableMore ? restaurants.length : 5)
  },[restaurants, disableMore]);
  return (
    <div ref={myRef}>
      <div className='category-title'>{title}</div>
      <div className="restaurant-list">
        {restaurants.slice(0, numLoaded).map(restaurant => (
          <RestaurantCard restaurant={restaurant}/>
        ))}
        {numLoaded < restaurants.length &&
        <button className="load-more" onClick={() => changeNumLoaded(numLoaded + 6 > restaurants.length ? restaurants.length : numLoaded + 6)}>
          + {restaurants.length - numLoaded} MORE
        </button>
        }
      </div>
    </div>
  )
}

export default RestaurantList;
