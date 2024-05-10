import { gql } from "@apollo/client";

const GET_TODOS = gql`
query{
    todos{
      data{
        id,
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