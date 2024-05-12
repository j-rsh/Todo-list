const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

function initializeTodos() {
  const todos = [
    { id: uuidv4(), title: "do laundry", completed: false },
    { id: uuidv4(), title: "Build a server", completed: true },
    { id: uuidv4(), title: "Create a context", completed: false },
    { id: uuidv4(), title: "Do everything you want!", completed: true },
    { id: uuidv4(), title: "Do some rest", completed: false },
    { id: uuidv4(), title: "Visit your best friend", completed: false },
    { id: uuidv4(), title: "Read book", completed: false },
    { id: uuidv4(), title: "Going to nature and sightseeing", completed: false },
    { id: uuidv4(), title: "shopping", completed: false },
  ];
  if (!fs.existsSync("./todos.json")) {
    // If not, create the file with an empty array
    fs.writeFileSync("./todos.json", JSON.stringify(todos));
  }
  // Read the file and parse its content
  return JSON.parse(fs.readFileSync("todos.json", "utf8"));
}

// Mock initial todos array
let todos = initializeTodos();

export const resolvers = {
  Query: {
    todos: () => todos,
  },
  Mutation: {
    addTodo: (_: any, { title }: {title:string}) => {
      const newTodo = { id: uuidv4(), title, completed: false };
      todos.push(newTodo);
      fs.writeFileSync("todos.json", JSON.stringify(todos));
      return newTodo;
    },
    updateTodo: (
      _: any,
      { id, title, completed }: { id: string; title: string; completed: boolean }
    ) => {
      const index = todos.findIndex((todo: any) => todo.id === id);
      if (index !== -1) {
        todos[index].title = title;
        todos[index].completed = completed;
        fs.writeFileSync("todos.json", JSON.stringify(todos));
      }
      return todos[index];
    },
    deleteTodo: (_: any, { id }: { id: string }) => {
      const index = todos.findIndex((todo: any) => todo.id === id);
      if (index !== -1) {
        todos.splice(index, 1);
        fs.writeFileSync("todos.json", JSON.stringify(todos));
      }
      return true;
    },
  },
};