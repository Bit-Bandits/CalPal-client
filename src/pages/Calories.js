import React, { useEffect, useState } from 'react'; // Imports React libraries as well as useEffect and useState
import Auth from '../utils/auth';
import decode from 'jwt-decode';


// import { SAVE_MEAL } from '../utils/mutations';
// import { useMutation } from '@apollo/client';

function Calories() {
    const [foodData, setFoodData] = useState([]);
    const [savedFoods, setSavedFoods] = useState([]); // new state variable for saved foods
    const [food, setFood] = useState('');
    const [totalCalories, setTotalCalories] = useState(0); // new state variables for adding total calories
    const [currentDate, setCurrentDate] = useState('');

    //Gets username from JWT
    const getUsernameFromToken = () => {
        const token = localStorage.getItem('id_token');
        if (token) {
          const decodedToken = decode(token);
          return decodedToken.data.username;
        // console.log('decoded Token ID', decodedToken.data);
        }
        return '';
      };


    // targets the value(food) in which the user is looking for
    const handleFoodChange = (event) => {
        setFood(event.target.value);
    };

    // const [saveMeal, {error}] = useMutation(SAVE_MEAL);

    // handles the submit in our search to fetch data from api
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setFoodData([]); // clear previous results
        fetchFoodData();

    };

    useEffect(() => {
    }, [food]);

    //Gets Date
    useEffect(() => {
        const formattedDate = new Date().toLocaleString();
        setCurrentDate(formattedDate);
      }, []);

    const fetchFoodData = async () => {
        const apiUrl = `https://api.edamam.com/api/food-database/v2/parser?ingr=${encodeURIComponent(food)}&app_id=314fbe88&app_key=25dfafdd8b307eb5f55d06bca92f4d08`
        try {
            const response = await fetch(apiUrl)
            const data = await response.json()
             if (data.hints && data.hints.length > 0) {
                const firstHint = data.hints[0];
                setFoodData([{ ...firstHint, servings: 1 }]);
             } else {
                setFoodData([]);
             }
            // setFoodData(data.hints.map(item => ({ ...item, servings: 1 , unit: 'gram' })))
            // setFoodData(data.hints.map(item => ({ ...item, servings: 1 })))
        } catch (e) {
            console.log(e)
        }
    }

    const handleDeleteFood = (foodToDelete) => {
        setSavedFoods(savedFoods.filter(food => food !== foodToDelete));
        setTotalCalories(totalCalories - foodToDelete.calories);
    }

    const handleServingsChange = (index, value) => {
        setFoodData(foodData.map((item, i) => i === index ? { ...item, servings: value } : item))
    }

    // const handleUnitChange = (index, value) => {
    //     setFoodData(foodData.map((item, i) => i === index ? { ...item, unit: value} : item))
    // }

    const handleSaveFood = (food) => {

        //Gets userId from Token
        const username = getUsernameFromToken();
        console.log('username:', username);

        //Converts date to "YYYYMMYY" string before saving to database
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
        const day = currentDate.getDate();
        const formattedDate = year * 10000 + month * 100 + day;
        console.log('date:', formattedDate);

        const calories = Math.round(food.food.nutrients.ENERC_KCAL * food.servings);

        const savedFood = {
            food: food.food.label,
            calories,
            servings: food.servings
          };

        console.log('food:', savedFood.food);
        console.log('calories:', savedFood.calories);
        console.log('servings:', savedFood.servings);

        setTotalCalories(totalCalories + calories);
        setSavedFoods([...savedFoods, { ...food, calories }]);
        // console.log([...savedFoods, { ...food, calories }]);

        // Saves username, food, calories, servings, and data to database
        // try {
        //     const data = await saveMeal({
        //         variable: { username, food, calories, servings, date }
        //     })
        // }

    }

      

    // console.table(foodData.hints)
    const list = foodData.map((food, index) => {
        const calories = Math.round(food.food.nutrients.ENERC_KCAL * food.servings);
        return (
            <li className='calorie-item' key={food.food.foodId}>
                <img src={food.food.image} alt={food.food.label} className='food-img'/> {/* New image elment */}
                {food.food.label} | Calories: {calories}

                {/* if logged in, show save button */}

                {
                    Auth.loggedIn() ? (
                        <>
                            <input
                                type="number"
                                value={food.servings}
                                onChange={(e) => handleServingsChange(index, e.target.value)}
                                min='1'
                            />
                            <button onClick={() => handleSaveFood(food)}>Save</button>
                        </>
                    ) : null
            }


                {/* <select value={food.unit} onChange={(e) => handleUnitChange(index, e.target.value)}>
                    <option value="gram">Gram</option>
                    <option value="lb">Pound</option>
                    <option value="oz">Ounce</option>
                    <option value="fl oz">Fl Oz</option>
                </select> */}
            </li>

        )
    })

    const savedFoodList = savedFoods.map((food, index) => {
        return (

            <li key={index}>
                {food.food.label} | Servings: {food.servings} | Calories: {Math.round(food.calories)}
                <button onClick={() => handleDeleteFood(food)}>Delete</button>
            </li>
        )
    })
    return (
        <div className='foods-container'>
            <div className='search-results'>
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
            </div>

            <div className='saved-foods'>
            <h2>Current Date: {currentDate}</h2>
                <h3>Saved Foods</h3>
                <ul>
                    {savedFoodList}
                    <p className="calorie-total">Total Calories: {totalCalories}</p>
                </ul>
            </div>
        </div>
    )

}



export default Calories;