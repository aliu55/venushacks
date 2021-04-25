import axios from "axios";
import moment from 'moment';
import 'moment-duration-format';
require("dotenv").config();

const YT_KEY = process.env.REACT_APP_YT_KEY;
var videoLink = "youtube.com/watch?v=";

const Youtube = ({lengthChoice}) => {

    const getFitnessVideo = async (length) => {
        console.log("test");
        let duration = parseInt(length.slice(0,2));
        const res = await axios.get("https://www.googleapis.com/youtube/v3/search", { 
            params: {
                part: 'snippet',
                maxResults: 5,
                key: YT_KEY,
                type: 'video',
                q: length + ' fitness workouts'
            }
           });
        console.log(videoLink + getRandomVideo(duration, res.data.items));
        // getRandomVideo(duration, res.data.items)
      }

      const checkVideoDuration = async (duration, vidID) => {
        const res = await axios.get("https://www.googleapis.com/youtube/v3/videos", { 
            params: {
                part: 'contentDetails',
                key: YT_KEY,
                id: vidID
            }
        });
    
        const vidLength = res.data.items[0].contentDetails.duration;
        const lenAsNum = parseVideoLength(vidLength);
        console.log(duration, lenAsNum, duration + 10);
        const result = duration <= lenAsNum && lenAsNum <= duration + 10;
        console.log(typeof(result));
        return result;
    
      }
    
      const parseVideoLength = (vidLen) => {
        console.log(vidLen);
        const time = moment.duration(vidLen).format('h:mm:ss');
        const result = time.split(':');
        const duration = parseFloat(result[0]) + parseFloat(result[1]/60);
        return duration;
      }
    
      const randomInt = (max) => {
        return Math.floor(max * Math.random());
      }
    
      const getRandomVideo = (duration, videos) => {
        var randomIndex = randomInt(videos.length);
        var video = videos[randomIndex];
        var vidID = video.id.videoId;

        console.log(videos);

        if (checkVideoDuration(duration, vidID) === true) {
            console.log('duration good');
            return vidID;
        }
        else {
            console.log('bad');
            videos.splice(randomIndex, 1);
            getRandomVideo(duration, videos);
        }
      }
    
      

    return (
        <div>
            <button type="button" onClick={() => getFitnessVideo(lengthChoice)}>Get Video</button>
            {/* <button type="button" onClick={() => parseVideoLength("PT30M35S")}>Get Video</button> */}
        </div>
    )
}

export default Youtube;

