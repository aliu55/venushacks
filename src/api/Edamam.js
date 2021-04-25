import axios from "axios";
require("dotenv").config();

const KEY = process.env.REACT_APP_EDAMAM_KEY;
const ID = process.env.REACT_APP_EDAMAM_ID;

const Edamam = ({meal}) => {
    const handleClick = async () => {

        // random food names / ingredients
        const bfastWords = ["eggs", "parfait", "fruit", "toast", "smoothie", "waffle",
                                "muffin", "yogurt", "baked", "oats", "quick"]
        const linnerWords = ["salad", "pasta", "casserole", "sandwich", "chicken", "rice",
                            "soup", "egg", "ham", "saute", "vegetable"]

        const maxEntries = 20;
        const maxIngr = 5;

        if (meal == "Breakfast"){
            var keyword = bfastWords[Math.floor(bfastWords.length * Math.random())];
            console.log(keyword);
        }
        else {
            var keyword = linnerWords[Math.floor(linnerWords.length * Math.random())];
            console.log(keyword);
        }

        
        const response = await axios.get(`https://api.edamam.com/search`, {params: 
            {q: keyword, app_id: ID, app_key: KEY, to: maxEntries, ingr: maxIngr, mealType: meal}
        })

        const hits = response.data.hits
        const randIndex = Math.floor(hits.length * Math.random());
        const hitsMap = hits.map(x => [x.recipe.label, x.recipe.url]);
        
        console.log(randIndex);
        console.log(hitsMap[randIndex]);
    }

    return (
        <div>
            <button type="button" onClick={handleClick}>Get Recipe</button>
        </div>
    )
}

export default Edamam;