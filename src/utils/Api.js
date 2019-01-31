import axios from "axios";

//var zKey = require("dotenv").config();
const config = {
    headers: {
      'user-key': 'process.env.apiKey'
    }
  };

axios.defaults.headers.common['user-key'] = 'process.env.apiKey'

export default {
    getRandomRestaurant: function() {
    return axios.get("https://developers.zomato.com/api/v2.1/search?entity_id=302&entity_type=city&count=25&sort=rating", {config})
        .then((response) => {
            for(var i = 0; i < 20; i++)
            console.log(response.data.restaurants[i]);
        })
        .catch ((error) => {
            console.log("axios error:", error);
        });
    },

    getUserbyUsername: function(username) {
        return axios.get("/api/login/" + username);
    },

    getUserByID : function(id) {
        return axios.get("/api/" + id)
    },

    removeUser : function(id) {
        return axios.delete("/api/" + id);
    },

    createUser : function(userData) {
        return axios.post("/api/" , userData);
    },

    updateUser : function(id , userData) {
        return axios.put("/api/" + id , userData);
    },

    getFavorites : function(id) {
        return axios.get("/api/favorites/" + id);
    }

}