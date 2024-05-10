export type DataType = Array<Array<TodoItem>>;
 
  export interface TodoItem {
    id:number
    title: string;
    completed?: boolean;
  }