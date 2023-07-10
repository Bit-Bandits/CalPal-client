// import React from "react";
// import { useQuery } from "@apollo/client";
// import { GET_MEAL_BY_USERNAME_AND_DATE } from "../utils/queries";

// function SavedMeals({ username, date }) {

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
//               <div key={meal._id}>
//                 <p>Food: {meal.food}</p>
//                 <p>Calories: {meal.calories}</p>
//                 <p>Date: {meal.date}</p>
//                 <p>Servings: {meal.servings}</p>
//                 <p>Username: {meal.username}</p>
//               </div>
//             ))}
//           </div>
//         );
//       };
      
// export default SavedMeals;