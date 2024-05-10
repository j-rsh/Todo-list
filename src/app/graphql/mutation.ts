import { gql } from "@apollo/client";

const DELETE_TODO = gql`
mutation deleteUser($id:ID!){
    deleteTodo(id:$id)
  }

`
export default DELETE_TODO;

export const CREATE_TODO =`gql
  mutation createToDo($title:String! , $completed:Boolean!){
    createUser(
        input:{
            title:$title,
            completed:$completed
        }
    )
    {
        id,
        title,
        completed
    }
  }

`

export const UPDATE_TODO = gql`
  mutation updateToDo($id: ID!, $title: String! , $completed:Boolean!) {
    updateTodo(id: $id, input: { title: $title , completed:$completed}) {
      id,
      title,
      completed
    }
  }
`;
