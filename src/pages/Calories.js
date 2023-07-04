import React, { useEffect, useState } from 'react'; // Imports React libraries as well as useEffect and useState

function Calories () {
    const [data, setData] = useState(null);
    const [food, setFood] = useState('');

    // targets the value(food) in which the user is looking for
    const handleFoodChange = (event) => {
        setFood(event.target.value);
    };

    // handles the submit in our search to fetch data from api
    const handleFormSubmit = (event) => {
        event.preventDefault();
        fetchData();
    };

    // updated fetch call 
    const fetchData = () => {
        fetch(`https://api.edamam.com/api/food-database/v2/parser?ingr=${encodeURIComponent(food)}&app_id=314fbe88&app_key=25dfafdd8b307eb5f55d06bca92f4d08`)
        .then(response => response.json())
        .then(data => {
            setData(data)
            console.log(data)
            const foodName = data.text;
            const kCal = data.parsed[0].food.nutrients.ENERC_KCAL;
            console.log('SEARCHED FOOD:', foodName);
            console.log('CALORIES:', kCal);
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor='food-search'>Search for a food:</label>
                <input id="food-search" type='text' value={food} onChange={handleFoodChange} />
                <button type='submit'>Search</button>
            </form>
            {data && <pre>{JSON.stringify(data.parsed[0].food.nutrients.ENERC_KCAL, null, 2)}</pre>}
        </div>
    );
};

export default Calories;