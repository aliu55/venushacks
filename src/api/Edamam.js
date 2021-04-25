import axios from "axios";
require("dotenv").config();

const KEY = process.env.REACT_APP_EDAMAM_KEY;
const ID = process.env.REACT_APP_EDAMAM_ID;

const Edamam = async ({meal}) => {

    const bfastWords = ["eggs", "parfait", "fruit", "toast", "smoothie", "waffle",
                                "muffin", "yogurt", "baked", "oats", "quick"]
    const dinnerWords = ["salad", "pasta", "casserole", "sandwich", "chicken", "rice",
                            "soup", "egg", "ham", "saute", "vegetable"]

    const maxEntries = 20;
    const maxIngr = 5;

    if (meal === "breakfast"){
        var keyword = bfastWords[Math.floor(bfastWords.length * Math.random())];
    }
    else {
        var keyword = dinnerWords[Math.floor(dinnerWords.length * Math.random())];
    }
        
    const response = await axios.get(`https://api.edamam.com/search`, {params: 
        {q: keyword, app_id: ID, app_key: KEY, to: maxEntries, ingr: maxIngr, mealType: meal}
    })

    const hits = response.data.hits;
    const randIndex = Math.floor(hits.length * Math.random());
    const hitsMap = hits.map(x => [x.recipe.label, x.recipe.url, x.recipe.image]);

    return (
        hitsMap[randIndex]
    )
}

export default Edamam;