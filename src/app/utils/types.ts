export type StateType = Array<Array<TodoItem>>;
 
  interface TodoItem {
    title: string;
    completed?: boolean;
  }