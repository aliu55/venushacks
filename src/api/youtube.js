import axios from "axios";
require("dotenv").config();

const YT_KEY = process.env.REACT_APP_YT_KEY;
var videoLink = "youtube.com/watch?v=";
const playlistIDs = ['PL7DXUYkcsukWqgGIBzkzd6jykTdS2l2Tl', 'PLsGnm_jbLRKdqlru_shRc-xmKmUaagNJT', 'PL7DXUYkcsukUcQgjcbh2CGL5cP1Fc-BHl'];

const getChosenPlaylist = (duration) => {
    if(duration === 5) {
        return playlistIDs[0];
    }
    else if (duration === 10) {
        return playlistIDs[1];
    }
    else {
        return playlistIDs[2];
    }
}

const randomInt = (max) => {
    return Math.floor(max * Math.random());
}

const getRandomVideo = (videos) => {
    var randomIndex = randomInt(videos.length);
    var video = videos[randomIndex];
    return video;
}

const Youtube = async (lengthChoice) => {

    let duration = parseInt(lengthChoice[0]);
    let chosenPlaylist = getChosenPlaylist(duration);

    const res = await axios.get("https://www.googleapis.com/youtube/v3/playlistItems", { 
        params: {
            part: 'snippet',
            key: YT_KEY,
            playlistId: chosenPlaylist,
            maxResults: 50
        }
    });

    const videos = res.data.items;
    const randomVid = getRandomVideo(videos);

    return ([randomVid.snippet.title, videoLink + randomVid.id, randomVid.snippet.thumbnails.standard.url]);    
}

export default Youtube;

