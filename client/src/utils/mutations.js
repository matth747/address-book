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
mutation AddAdd($name: String!, $streetAddress: String!, $cityState: String!, $zipCode: String!, $notes: String!, $phone: String!) {
  addAdd(name: $name, streetAddress: $streetAddress, cityState: $cityState, zipCode: $zipCode, notes: $notes, phone: $phone) {
    name
    streetAddress
    cityState
    zipCode
    notes
    phone
  }
}
`

export const EDIT_ADD = gql`
mutation Mutation($addId: ID!, $name: String!, $streetAddress: String!, $cityState: String!, $zipCode: String!, $notes: String!, $phone: String!) {
  editAdd(addId: $addId, name: $name, streetAddress: $streetAddress, cityState: $cityState, zipCode: $zipCode, notes: $notes, phone: $phone) {
    _id
    name
    streetAddress
    cityState
    zipCode
    notes
    phone
    username
  }
}`

export const REMOVE_ADD = gql`
mutation Mutation($addId: ID!) {
  removeAdd(addId: $addId) {
    _id
    cityState
    notes
    name
    phone
    streetAddress
    username
    zipCode
  }
}
`