import { gql } from 'apollo-server-express';

const productSchema = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String!
    stock: Int!
    category: String!
  }

  type Query {
    listProduct: [Product!]!
    getProduct(id: ID!): Product
  }

  type Mutation {
    createProduct(
      name: String!
      price: Float!
      description: String!
      stock: Int!
      category: String!
    ): Product!
    updateProduct(
      id: ID!
      name: String
      price: Float
      description: String
      stock: Int
      category: String
    ): Product
    deleteProduct(id: ID!): Boolean
    
  }
`;

export default productSchema;