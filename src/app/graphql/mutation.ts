import { gql } from "@apollo/client";

export const DELETE_TODO = gql`
mutation deleteUser($id:ID!){
    deleteTodo(id:$id)
  }

`

export const UPDATE_TODO = gql`
  mutation updateToDo($id: ID!, $title: String! , $completed:Boolean!) {
    updateTodo(id: $id , title: $title , completed:$completed) {
      id,
      title,
      completed
    }
  }
`;

export const ADD_TODO = gql`
  mutation addTodo( $title: String! ) {
    addTodo( title: $title) {
      title,
    }
  }
`;
