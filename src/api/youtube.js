import axios from "axios";
require("dotenv").config();

const KEY = process.env.REACT_APP_YT_KEY;
var videoLink = "youtube.com/watch?v=";

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 2,
        key: KEY,
        type: 'video'
    }
})

async function getRandomVideo (length) {
    const data = await instance.get("/search", { 
        params: {
            q : length + " fitness workouts"
        }
       }).then((response) => {
           return response.data;
       });
    return data.items;
};


export default getRandomVideo;

