import { gql } from 'apollo-server-express';

const userSchema = gql`
    type User {
        id: ID!
        name: String!      
        email: String!
        password: String!
        role: String!      # Added 'role' to match the model
        address: String!   # Added 'address' to match the model
        phone_number: String! # Added 'phone_number' to match the model
    }

    input UserInput {
        name: String!       # Changed 'nom' to 'name'
        email: String!
        password: String!
        role: String!       # Added 'role'
        address: String!    # Added 'address'
        phone_number: String! # Added 'phone_number'
        
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User!]!  # Ensured a non-nullable array of users
    }

    type Mutation {
        createUser(input: UserInput!): User!    # Fixed argument name
        updateUser(id: ID!, input: UserInput!): User! # Fixed argument name
        deleteUser(id: ID!): User!           # Kept return type as String for success message
    }
`;

export default userSchema;
