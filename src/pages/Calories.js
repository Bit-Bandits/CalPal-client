import React, { useEffect, useState } from 'react'; // Imports React libraries as well as useEffect and useState

function Calories() {
    const [foodData, setFoodData] = useState([]);
    const [food, setFood] = useState('');
    const [totalCalories, setTotalCalories] = useState(0);

        // targets the value(food) in which the user is looking for
        const handleFoodChange = (event) => {
            setFood(event.target.value);
        };
    
        // handles the submit in our search to fetch data from api
        const handleFormSubmit = (event) => {
            event.preventDefault();
            fetchFoodData();
        };

        useEffect(() => {
        }, [food]);
        
        

    const fetchFoodData = async () => {
        const apiUrl = `https://api.edamam.com/api/food-database/v2/parser?ingr=${encodeURIComponent(food)}&app_id=314fbe88&app_key=25dfafdd8b307eb5f55d06bca92f4d08`
        try {
            const response = await fetch(apiUrl)
            const data = await response.json()
            console.log('APICall:', data.hints);
            setFoodData(data.hints.map(item => ({ ...item, servings: 1 , unit: 'gram' })))
        } catch (e) {
            console.log(e)
        }
    }

    const handleServingsChange = (index, value) => {
        setFoodData(foodData.map((item, i) => i === index ? { ...item, servings: value} : item))
    }

    const handleUnitChange = (index, value) => {
        setFoodData(foodData.map((item, i) => i === index ? { ...item, unit: value} : item))
    }

    const handleSaveFood = (calories, servings) => {
        setTotalCalories(totalCalories + (calories * servings));
    }

    // console.table(foodData.hints)
    const list = foodData.map((food, index) => {
        const calories = (food.food.nutrients.ENERC_KCAL * food.servings).toFixed(2);
        return (
            <li className='calorie-item' key={food.food.foodId}>
                {food.food.label} | Calories: {calories}
                <input 
                    type="number" 
                    value={food.servings} 
                    onChange={(e) => handleServingsChange(index, e.target.value)} 
                    min='1' 
                />
                <select value={food.unit} onChange={(e) => handleUnitChange(index, e.target.value)}>
                    <option value="gram">Gram</option>
                    <option value="lb">Pound</option>
                    <option value="oz">Ounce</option>
                    <option value="fl oz">Fl Oz</option>
                </select>
                <button onClick={() => handleSaveFood(food.food.nutrients.ENERC_KCAL, food.servings)}>Save</button>
            </li>

        )
    })
    return (
        <div className='calorie-container'>
        <form className='search-form' onSubmit={handleFormSubmit}>
            <input 
                id="food-search" 
                type='text' 
                value={food} 
                onChange={handleFoodChange} 
                placeholder='Search for a food...'
            />
            <button type='submit'>Search</button>
        </form>
        <ul>
            {list}
        </ul>
        <p className="calorie-total">Total Calories: {totalCalories}</p>
    </div>
    )

}



export default Calories;