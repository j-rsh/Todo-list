import { useMutation } from "@apollo/client";
import { DataType, TodoItem } from "../utils/types";
import { UPDATE_TODO } from "../graphql/mutation";
import { title } from "process";

// export const move = (
//   source: Array<TodoItem>,
//   destination: Array<any>,
//   droppableSource: any,
//   droppableDestination: any,
// ): { [key: string]: Array<any> } => {
//   const sourceClone = Array.from(source);
//   const destClone = Array.from(destination);
//   const [removed] = sourceClone.splice(droppableSource.index, 1);

//   destClone.splice(droppableDestination.index, 0, removed);

//   const result: { [key: string]: Array<any> } = {};
//   result[droppableSource.droppableId] = sourceClone;
//   result[droppableDestination.droppableId] = destClone;

//   return result;
// };

export const onDragEnd = (result: any, data: TodoItem[], updateData: any) => {
  console.log('resut', result);
  
  const { destination, draggableId } = result;

  if (!destination) {
    return;
  }

  const item = data.find((i: TodoItem)=>i.id === draggableId);
  

  const status = destination.droppableId ==='done' ? true: false;

  updateData({ variables: {
    id: item?.id,
    title: item?.title,
    completed: status
  } })

  // const newItem: TodoItem = {}
  

  // if (sInd !== dInd) {
  //   const newItem = {}
  //   const result = move(data[sInd], data[dInd], source, destination);
  //   const newState = [...data];
  //   newState[sInd] = result[sInd];
  //   newState[dInd] = result[dInd];

  //   setState(newState.filter((group) => group.length));
  // }
};
