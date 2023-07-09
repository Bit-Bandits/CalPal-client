import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_MEAL_BY_USERNAME_AND_DATE } from '../utils/queries';

function SavedMeals({ username, date }) {
    const { loading, error, data } = useQuery(GET_MEAL_BY_USERNAME_AND_DATE, {
      variables: { username, date },
    });
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      console.error('Error:', error);
      return <p>Error: {error.message}</p>;
    }
  
    // Access the data here and log it to the console
    console.log('Meal Data:', data);
    // const meals = data.getMealsByUsernameAndDate;
  
    return (
      <div>
        {/* Render your component using the data */}
      </div>
    );
  }
  
  export default SavedMeals;