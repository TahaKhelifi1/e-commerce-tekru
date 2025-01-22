import { gql } from 'apollo-server-express';

const orderTypeDef = gql`
  type Order {
    id: ID!
    userId: Int!
    productId: Int!
    quantity: Int!
    totalPrice: Float!
    status: String!
  }

  input OrderInput {
    userId: Int!
    productId: Int!
    quantity: Int!
    totalPrice: Float!
    status: String!
  }

  type Query {
    listOrders: [Order]
    getOrder(id: ID!): Order
  }

  type Mutation {
    createOrder(
      userId: Int!
      productId: Int!
      quantity: Int!
      totalPrice: Float!
      status: String!
    ): Order!
    updateOrder(
      id: ID! ): Order
    deleteOrder(id: ID!): Order
  }
`;

export default orderTypeDef;
