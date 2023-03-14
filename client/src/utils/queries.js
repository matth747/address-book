import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query Query {
  me {
    _id
    email
    username
    addresses {
      _id
      cityState
      name
      notes
      phone
      streetAddress
      username
      zipCode
    }
  }
}
`;

export const QUERY_ADD = gql`
query Query($id: ID!) {
  address(_id: $id) {
    _id
    cityState
    name
    notes
    phone
    streetAddress
    username
    zipCode
  }
}`