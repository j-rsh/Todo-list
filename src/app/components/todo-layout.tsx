"use client";
import { DragDropContext } from "react-beautiful-dnd";
import Droppble from "./droppble";
import { onDragEnd } from "../utils/DragDrop";
import useData from "../utils/hooks/useData";
import { useMutation } from "@apollo/client";
import { UPDATE_TODO } from "../graphql/mutation";
import GET_TODOS from "@/app/graphql/query";
import { useQuery } from "@apollo/client";
import AddTodoSkeleton from "./skeleton";
import AddTodo from "./add-todo";

const TodoLayout = () => {
  const { loading, data, error } = useQuery(GET_TODOS);

  const convertedData = useData(data?.todos);

  const [updatTodo] = useMutation(UPDATE_TODO, {
    refetchQueries: [{ query: GET_TODOS }],
  });

  if (loading != true) {
    return (
      <>
        <AddTodo />
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, data.todos, updatTodo)}
        >
          <div className="flex justify-center">
            <Droppble items={convertedData.todo} index="todo" content="To Do" />
            <Droppble items={convertedData.done} index="done" content="Done" />
          </div>
        </DragDropContext>
      </>
    );
  } else {
    return <AddTodoSkeleton />;
  }
};

export default TodoLayout;
