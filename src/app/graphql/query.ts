import { gql } from "@apollo/client";

const GET_TODOS = gql`
  query {
    todos {
      id,
      title,
      completed
    }
  }
  
`
export default GET_TODOS;