import { gql } from 'apollo-server-express';

const productTypeDef = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String!
    stock: Int!
    category: String!
  }
  input ProductInput {
    name: String
    price: Float
    description: String
    stock: Int
    category: String
  }

  type Query {
    listProduct: [Product]
    getProduct(id: ID!): Product
  }

  type Mutation {
    createProduct(productInput : ProductInput): Product!
    updateProduct(id: ID!): Product
    deleteProduct(id: ID!): Boolean
    
  }
`;

export default productTypeDef;
