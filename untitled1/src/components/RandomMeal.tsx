import React,  { useState, useEffect } from "react";
const API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
// @ts-ignore
const RandomMeal = () => {
    // @ts-ignore
    const [meal, setMeal] = useState([])
    const [search, setSearch] = useState("")
    useEffect (()  => {
        // fetch(API_URL)
        //     .then((res) => res.json())
        //    .then((res) => {
        // @ts-ignore
        //        const meal = setMeal(res.meals[0])
        //});
        async function getMeal() {
            const res = await fetch(API_URL);
            const data = await res.json();
            setMeal(data.meals[0]);

            console.log(data);
        }

        getMeal();
    }, [])

    const filteredMeals = meal.filter( mealy => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        return strMeal.toLowerCase().includes(search.toLowerCase())




    })


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
        <div>
     <form className={"search-form"}>
         {search}
         <input id = {"search-term"} className={"search-bar"} type="text" onChange = { e => setSearch(e.target.value)}/>
         {filteredMeals.map((meal, index) => {}}
         <button className={"search-btn"} type="submit">Search
         </button>
     </form>
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
             <button className={"btn"}> Learn More    <i className="fas fa-arrow-alt-circle-right"></i>
             </button>
         </div>
     </div>
    </div>
 );
};


export default RandomMeal;
