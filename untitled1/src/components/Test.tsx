import React,  { useState, useEffect } from "react";
// @ts-ignore
const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

const Test = () => {
// @ts-ignore
    const [meal, setMeal] = useState(undefined)
    // @ts-ignore
    useEffect( () => {
        async function getMeal() {
            fetch(API_URL)
                .then(res => res.json())
                .then(data => setMeal(data.meals[0])
                )
                // @ts-ignore
                .catch(console.log("Error"));
                }


// @ts-ignore
    getMeal();
}, [])
    // @ts-ignore

    if(!meal)return null;
    // @ts-ignore
    const {
        // @ts-ignore
        strMeal,
        // @ts-ignore
        strMealThumb,
        // @ts-ignore
        strInstructions,
        // @ts-ignore
        strArea,
        // @ts-ignore
        strCategory
    } = meal;
    return (
        // @ts-ignore
        <div className={"meal"}>
            <div className={"meal-img"}>
                <img src={strMealThumb} alt={strMeal}/>

            </div>
            <div className={"meal-details"}>
                <h1 className={"meal-title"}>{strMeal}</h1>
                <p className={"meal-instructions"}>{strInstructions.substring(0,1200)}</p>
                <ul className={"meal-info"}>
                    <li>
                        Category:
                        <strong> {strCategory}</strong>
                    </li>
                    <li>
                        Area:
                        <strong> {strArea}</strong>

                    </li>
                </ul>
                <button className={"btn"}> Learn More<i className="fas fa-arrow-alt-circle-right"></i>
                </button>
            </div>
        </div>
    );
};



export default Test;

//  }
// @ts-ignore
//  function onDeleteHandler(index) {
//     strMeal(
//   strMeal.filter((element, filterIndex) => index !== filterIndex)
//    );
//  }
//     )