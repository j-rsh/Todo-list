"use client";
import { DragDropContext } from "react-beautiful-dnd";
import Droppble from "./Droppble";
import { useEffect, useState } from "react";
import GET_TODOS from "../graphql/query";
import { useQuery } from "@apollo/client";
import { onDragEnd } from "../utils/DragDrop";
import { StateType } from "../utils/types";

const DragDrop = () => {
  const { loading, data, error } = useQuery(GET_TODOS);

  const [state, setState] = useState<StateType>([]);

  const Done: Array<any> = [];
  const ToDo: Array<any> = [];

  const x = data?.todos?.data.map((todo: any) =>
    todo.completed ? Done.push(todo) : ToDo.push(todo),
  );

  useEffect(() => {
    if (data?.todos?.data) {
      setState([ToDo, Done]);
    }
  }, [data]);

  if (loading != true) {
    return (
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, state, setState)}
        >
          {state?.map((el, ind) => (
            <Droppble el={el} ind={ind} key={ind} />
          ))}
        </DragDropContext>
    );
  } else {
    return <div>loading</div>;
  }
};

export default DragDrop;
