import React, { useEffect, useState } from 'react'
import axios from 'axios'

function useApiCalling() {
    let [allRestaurantArr,setAllRestaurantArr] = useState([])
    useEffect(()=>{
        async function calling(){
            const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            let resp = await axios.get(API)

            // Search through all cards to find the one containing restaurant data
            const restaurantCard = resp.data.data.cards.find(
                (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            )

            if (restaurantCard) {
                console.log(restaurantCard.card.card.gridElements.infoWithStyle.restaurants)
                setAllRestaurantArr(restaurantCard.card.card.gridElements.infoWithStyle.restaurants)
            } else {
                console.warn("Restaurant list card not found in API response")
            }
        }
        calling()
    } , [])
  return allRestaurantArr;
}

export default useApiCalling