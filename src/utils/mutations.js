import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password:$password) {
            token
            user {
                _id
                username
            }
        }
    }`

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(user: $user) {
    token
    user {
      _id
      username
    }
  }
}`

 export const REMOVE_FOOD = gql`
    mutation removeFood($foodId: String!) {
        removeFood(foodId: $foodId) {
         _id 
         }
    }`


export const SAVE_FOOD = gql`
    mutation saveFood($input: foodInput!) {
        saveFood(input: $input) {
            _id
            username
            email
            foodCount
            savedFood {
                foodId

            }
        }
    }`
