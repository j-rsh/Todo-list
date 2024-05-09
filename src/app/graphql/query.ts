import { gql } from "@apollo/client";

const GET_TODOS = gql`
query{
    todos{
      data{
        title,
        completed,
        user
        {
          name
        }
      }
    }
  }

`
export default GET_TODOS;