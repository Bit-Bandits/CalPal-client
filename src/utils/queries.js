import {gql} from '@apollo/client';

export const LOGIN_USER = gql`
    query me { 
        me {
            _id
            username
            email
            foodCount
            savedFood {
                foodId
                title
                description
                image

            }
        }
    }`