import { gql } from 'apollo-server-express';

const orderSchema = gql`

  type Order implements Node {
    id: ID!
    user: User!
    product: Product!
    quantity: Int!
    totalPrice: Float!
    status: String!
    createdAt: Date!
    updatedAt: Date!
  }

  input OrderInput {
    userId: ID!
    productId: ID!
    quantity: Int!
    totalPrice: Float!
    status: String!
  }

  input UpdateOrderInput {
    userId: ID
    productId: ID
    quantity: Int
    totalPrice: Float
    status: String
  }

  input OrderFilters {
    id: [ID!]
    userId: [ID!]
    productId: [ID!]
    status: [String!]
    createdAt: DateFilterInput
    updatedAt: DateFilterInput
  }

  input OrderOrderBy {
    id: Sort
    userId: Sort
    productId: Sort
    quantity: Sort
    totalPrice: Sort
    status: Sort
    createdAt: Sort
    updatedAt: Sort
  }

  type Query {
    listOrders(filters: OrderFilters, pagination: PaginationOffset, orderBy: OrderOrderBy): [Order!]!
    getOrder(id: ID!): Order
  }

  type Mutation {
    createOrder(data: OrderInput!): Order
    updateOrder(id: ID!, data: UpdateOrderInput!): Order
    deleteOrder(id: ID!): Boolean
  }
`;

export default orderSchema;
