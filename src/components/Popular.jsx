import { useEffect, useState } from "react"
import data from "../dummy.json"
function Popular() {
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        // getPopular();
        setPopular(data.recipes)
    }, [])
    // console.log(data)

    // async function getPopular() {
    //     const apiData = await (await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)).json();
    //     // console.log(apiData)
    //     // setPopular(apiData.recipes)
    // }
    return (
        <div>
            {
                popular.map((recipe) => {
                    // <p>{recipe.gaps}</p>
                    return (
                        <div key={recipe.id}>
                            <p >
                                {recipe.title}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Popular