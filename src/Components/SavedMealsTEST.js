// import React from "react";
// import { useQuery } from "@apollo/client";
// import { GET_MEAL_BY_USERNAME_AND_DATE } from "../utils/queries";

// function SavedMealsTEST({ username, date }) {

//         const { loading, error, data } = useQuery(GET_MEAL_BY_USERNAME_AND_DATE, {
//           variables: {
//             username,
//             date,
//           },
//         });
      
//         if (loading) {
//           return <p>Loading...</p>;
//         }
      
//         if (error) {
//           return <p>Error: {error.message}</p>;
//         }
      
//         const meals = data.getMealsByUsernameAndDate;
      
//         return (
//           <div>
//             <h2>Meal Data</h2>
//             {meals.map((meal) => (
      
//                           <li key={meal._id}>
//                           {meal.food} | Servings: {meal.servings} | Calories: {Math.round(meal.calories)}
//                           <button>Delete</button>
//                             </li>  


//             ))}
//           </div>
//         );
//       };
      
// export default SavedMealsTEST;