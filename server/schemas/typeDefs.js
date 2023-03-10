const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    addresses: [Address]!
  }
  type Address {
  _id: ID
  name: String
  streetAddress: String
  cityState: String
  zipCode: String
  phone: String 
  notes: String
  username: String

  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    address(_id:ID!): Address
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addAdd(name: String!, streetAddress: String!, cityState: String!, zipCode: String!, notes: String!, phone: String!): Address
    editAdd(addId: ID!, name: String!, streetAddress: String!, cityState: String!, zipCode: String!, notes: String!, phone: String!): Address
    removeAdd(addId: ID!): Address
  }
`;

module.exports = typeDefs;
