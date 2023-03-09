import { gql } from '@apollo/client';


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_ADD = gql`
mutation addAdd($name: String, $cityState: String, $streetAddress: String, $zipCode: String, $notes: String, $phone: String) {
  addAdd(name: $name, cityState: $cityState, streetAddress: $streetAddress, zipCode: $zipCode, notes: $notes, phone: $phone) {
    _id
    cityState
    name
    notes
    phone
    streetAddress
    username
    zipCode
  }
}`;