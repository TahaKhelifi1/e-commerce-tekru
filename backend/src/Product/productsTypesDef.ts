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
  name: String!
  price: Float!
  description: String!
  stock: Int!
  category: String!
}

  type Query {
    listProduct: [Product]
    getProduct(id: ID!): Product
  }

  type Mutation {
    createProduct(input: ProductInput!): Product!
    updateProduct(id: ID!, input:ProductInput!): Product
    deleteProduct(id: ID!): Product
    
  }
`;

export default productTypeDef;
