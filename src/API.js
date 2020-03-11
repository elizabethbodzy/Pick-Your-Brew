import axios from "axios";
const SEARCH_URL = "https://api.punkapi.com/v2/beers?=";

export default {
    //gets beer with given query
    getPunkApiSearch: function (query) {
        return axios.get(SEARCH_URL + query)
    },

    //get all beers
    getBeers: function () {
        return axios.get("/api/beers")
    },

    getBeer: function (id) {
        return axios.get("/api/beers/" + id)
    }
}