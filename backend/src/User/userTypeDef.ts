import { gql } from 'apollo-server-express';

const userTypesDef = gql`
  # Define the User type with necessary fields
  type User {
    id: ID!
    name: String!        # Updated from 'nom' to 'name' for consistency with the model
    email: String!
    password: String!
    role: String!        # Added 'role' to match the model
    address: String!     # Added 'address' to match the model
    phone_number: String! # Added 'phone_number' to match the model
  }

  # Define the input type for user creation and update
  input UserInput {
    name: String         # Updated from 'nom' to 'name' for consistency with the model
    email: String
    password: String
    role: String         # Added 'role' to match the model
    address: String      # Added 'address' to match the model
    phone_number: String # Added 'phone_number' to match the model
  }

  # Define the query type for fetching users
  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  # Define the mutation type for creating, updating, and deleting users
  type Mutation {
    createUser(input: UserInput!): User      # Updated argument name to 'input' for consistency
    updateUser(id: ID!, input: UserInput!): User # Updated argument name to 'input' for consistency
    deleteUser(id: ID!): User               # Updated return type to 'User' to return the deleted user's details
  }
`;

export default userTypesDef;
