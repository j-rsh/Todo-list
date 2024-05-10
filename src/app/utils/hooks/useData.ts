
import { useMemo } from "react";
import { TodoItem } from "../types";

const useData = (data: TodoItem[]) => {
  const result = useMemo(() => {
    const done: Array<TodoItem> = [];
    const todo: Array<TodoItem> = [];

    if(data){
        data.map((item: TodoItem) =>
            item.completed ? done.push(item) : todo.push(item));
    }
    
    return {todo, done}
  }, [ data]);

return result;
};

export default useData;
