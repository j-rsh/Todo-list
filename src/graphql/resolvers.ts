let todos = [
    { id: "1", title: "Learn GraphQL", completed: false },
    { id: "2", title: "Build a server", completed: false },
  ];
  
  export const resolvers = {
    Query: {
      todos: () => todos,
    },
    Mutation: {
      addTodo: (_:any, { title, completed }: any) => {
        const newTodo = { id: todos.length.toString(), title, completed };
        todos.push(newTodo);
        return newTodo;
      },
    },
  };