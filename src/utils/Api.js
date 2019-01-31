import axios from "axios";

// var zKey = require("dotenv").config();
const config = {
    headers: {
      'user-key': '4ef06bf14aba6e0bcd3f7668a7b86e17'
    }
  };

axios.defaults.headers.common['user-key'] = '4ef06bf14aba6e0bcd3f7668a7b86e17'

export default {
    getRandomRestaurantArray: function() {
    return axios.get("https://developers.zomato.com/api/v2.1/search?entity_id=302&entity_type=city&count=20&sort=rating", {config})
        .then((response) => {
            const randomRestArray = [];
            for(var i = 0; i < 20; i++) {
                randomRestArray.push(response.data.restaurants[i])
            }
            return randomRestArray;
        })
        .catch ((error) => {
            console.log("axios error:", error);
        });

    }
}