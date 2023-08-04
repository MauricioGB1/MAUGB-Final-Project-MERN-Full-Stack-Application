const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    account: String
    firm: Firm
  }

   type Project {
     _id: ID
     name: String
     price: Float
     description: String
     image: String
     quantity: Int
     category: Category 
  }

  type Firm {
    _id: ID
    firmName: String
    firmOwner: User
    projects: [Project]
  }

  type Order {
    _id: ID
    purchaseDate: String
    projects: [Project]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Checkout {
    session: ID!
  }

  type Query {
    categories: [Category]
    users: [User]
    user(_id: ID!): User
    projects: [Project]
    project(_id: ID!): Project
    firm(_id: ID!): Firm
    firms: [Firm]
    checkout(projects: [ID]!): Checkout
    order(_id: ID!): Order
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      account: String!
      firm: ID
    ): Auth
    updateUser(
      username: String
      email: String
      password: String
      firm: ID
    ): User
    login(email: String!, password: String!): Auth
    addOrder(projects: [ID]!): Order
    addProject(
      name: String!
      price: Float!
      description: String
      quantity: Int
      category: ID!
    ): Project
    updateProject(
      name: String
      price: Int
      description: String
      quantity: Int
      category: ID!
    ): Project
    createFirm(firmName: String!, firmOwner: String!): Firm
  }
`;

    module.exports = typeDefs