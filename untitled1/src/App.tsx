import React from 'react';
import {RandomMeal} from './components';
//import {SearchFunction} from './components';
import {Test} from './components';

function App() {
    // @ts-ignore
    return (
        <div className="App">
            <section className={"container"}>

                <h2>Featured Meal</h2>
                <section className={"container2"}>
                    <RandomMeal/>
                    <RandomMeal/>
                    <RandomMeal/>
                    <RandomMeal/>
                    <RandomMeal/>
                    <RandomMeal/>
                    <RandomMeal/>
                    <RandomMeal/>
                    <RandomMeal/>
                    <RandomMeal/>
                    <RandomMeal/>
                    
                </section>
                <section>
                    x


                </section>

                <section className={"search-result"}>
                    <h2>Search Results:</h2>
                </section>
            </section>
           <section>
           </section>

        </div>
    );
}

export default App;
