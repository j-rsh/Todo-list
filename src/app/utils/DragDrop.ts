import { TodoItem } from "../utils/types";


export const onDragEnd = (result: any, data: TodoItem[], updateData: any) => {
  
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
};
