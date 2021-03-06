const { gql } = require("apollo-server-express");
//these tupes correspond to the relivent models
const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    me: User
  }

  input bookInput {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookData: bookInput!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
