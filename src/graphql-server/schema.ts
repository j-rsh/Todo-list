import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
  }

  type Query {
    todos: [Todo!]!
  }

  type Mutation {
    addTodo(title: String!): Todo!
  }

  type Mutation {
    updateTodo(id: ID!, title: String!, completed: Boolean!): Todo!
  }

  type Mutation {
    deleteTodo(id: ID!): Boolean!
  }
`;