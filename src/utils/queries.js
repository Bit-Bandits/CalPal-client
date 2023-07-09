import {gql} from '@apollo/client';

export const LOGIN_USER = gql`
query
    }`

    export const GET_USER = gql`
    query Query {
        getAllUsers {
          _id
          email
          password
          username
        }
      }
    `