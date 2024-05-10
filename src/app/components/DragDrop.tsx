"use client";
import { DragDropContext } from "react-beautiful-dnd";
import Droppble from "./Droppble";
import { onDragEnd } from "../utils/DragDrop";
import useData from "../utils/hooks/useData";
import { useMutation } from "@apollo/client";
import { UPDATE_TODO } from "../graphql/mutation";
import GET_TODOS from "@/app/graphql/query";
import { useQuery } from "@apollo/client";

const DragDrop = () => {
  const { loading, data, error } = useQuery(GET_TODOS);

  const convertedData = useData(data?.todos?.data);

  console.log('convertedData', convertedData);
  

  const [updatTodo] = useMutation(UPDATE_TODO, {
    refetchQueries: [
      { query: GET_TODOS }
    ],
  });

  if (loading != true) {
    return (
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, data.todos.data ,updatTodo)}
        >
          <Droppble el={convertedData.todo} index="todo" />
          <Droppble el={convertedData.done} index="done" />
        </DragDropContext>
    );
  } else {
    return <div>loading</div>;
  }
};

export default DragDrop;
