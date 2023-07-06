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
            setFoodData(data.hints.map(item => ({ ...item, quantity: 1, unit: 'gram', servingSize: 1 })))
        } catch (e) {
            console.log(e)
        }
    }

    const handleQuantityChange = (index, value) => {
        setFoodData(foodData.map((item, i) => i === index ? { ...item, quantity: value} : item))
    }

    const handleUnitChange = (index, value) => {
        setFoodData(foodData.map((item, i) => i === index ? { ...item, unit: value} : item))
    }

    const handleServingSizeChange = (index, value) => {
        setFoodData(foodData.map((item, i) => i === index ? { ...item, servingSize: value } : item))
    }

    const handleSaveFood = (calories, quantity, servingSize) => {
        setTotalCalories(totalCalories + (calories * quantity * servingSize));
    }

    // console.table(foodData.hints)
    const list = foodData.map((food, index) => {
        const calories = (food.food.nutrients.ENERC_KCAL * food.quantity * food.servingSize).toFixed(2);
        return (
            <li key={food.food.foodId}>
                {food.food.label} | Calories: {calories}
                <input 
                    type="number" value={food.quantity} onChange={(e) => handleQuantityChange(index, e.target.value)} 
                    min='1' 
                />
                <select value={food.unit} onChange={(e) => handleUnitChange(index, e.target.value)}>
                    <option value="gram">Gram</option>
                    <option value="lb">Pound</option>
                </select>
                <input
                    type="number"
                    value={food.servingSize}
                    onChange={(e) => handleServingSizeChange(index, e.target.value)}
                    min="0.01"
                    step="0.01"
                />
                <button onClick={() => handleSaveFood(food.food.nutrients.ENERC_KCAL, food.quantity, food.servingSize)}>Save</button>
            </li>

        )
    })
    return (
        <div>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor='food-search'>Search for a food:</label>
            <input id="food-search" type='text' value={food} onChange={handleFoodChange} />
            <button type='submit'>Search</button>
        </form>
        <ul>
            {list}
        </ul>
        <p>Total Calories: {totalCalories}</p>
    </div>
    )

}



export default Calories;