import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ApiCalling() {
    let [allRestaurantArr, setAllRestaurantArr] = useState([])
useEffect(() => {
    async function calling() {
        try {
            const SWIGGY_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            const API = "https://corsproxy.io/?" + encodeURIComponent(SWIGGY_URL)

            let resp = await axios.get(API)

            // Safely find the card that has restaurants
            const cards = resp.data.data.cards;
            const restaurantCard = cards.find(
                c => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
            );

            const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            console.log(restaurants);
            setAllRestaurantArr(restaurants);

        } catch (err) {
            console.error("Failed to fetch restaurants:", err);
        }
    }
    calling()
}, [])
    return allRestaurantArr;
}

export default ApiCalling