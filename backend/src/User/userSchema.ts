import { gql } from 'apollo-server-express';

const userSchema = gql`
    type User {
        id: ID!
        nom: String!
        prenom: String!
        email: String!
        password: String!
        is_admin: Boolean!
    }

    input UserInput {
        nom: String
        prenom: String
        email: String
        password: String
        is_admin: Boolean
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User]  # Corrected this to match your resolver
    }

    type Mutation {
        createUser(UserInput: UserInput): User  # Ensure the input argument name matches your resolver
        updateUser(id: ID!, userInput: UserInput): User  # Ensure the input argument name matches your resolver
        deleteUser(id: ID!): String  # Returns a success message, change to String
    }
`;

export default userSchema;
