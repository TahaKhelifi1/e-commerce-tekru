import { gql } from 'apollo-server-express';

const userTypesDef = gql`
  # Define the User type with necessary fields
  type User {
    id: ID!
    nom: String!
    prenom: String!
    email: String!
    password: String!
    is_admin: Boolean!
  }

  # Define the input type for user creation and update
  input UserInput {
    nom: String
    prenom: String
    email: String
    password: String
    is_admin: Boolean
  }

  # Define the query type for fetching users
  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  # Define the mutation type for creating, updating, and deleting users
  type Mutation {
    createUser(userInput: UserInput): User
    updateUser(id: ID!, userInput: UserInput): User
    deleteUser(id: ID!): String
  }
`;

export default userTypesDef;
