import React, { useEffect, useState } from 'react'; // Imports React libraries as well as useEffect and useState

function Calories () {
    const [data, setData] = useState(null);
    const [food, setFood] = useState('');

    const handleFoodChange = (event) => {
        setFood(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        fetchData();
    };

    const fetchData = () => {
        fetch('https://api.edamam.com/api/food-database/v2/parser?ingr=red%20apple&app_id=314fbe88&app_key=25dfafdd8b307eb5f55d06bca92f4d08')
        .then(response => response.json())
        .then(data => {
            setData(data)
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
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
};

export default Calories;