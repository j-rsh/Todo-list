import { useMutation } from "@apollo/client";
import { Draggable } from "react-beautiful-dnd";
import DELETE_TODO from "../graphql/mutation";
import Edit from "./Edit";


const Dragble: React.FC<any> = ({ el }) => {
  

  // const [deleteTodo , {loading,data,error}] = useMutation(DELETE_TODO)

  // const[createTodo , {loading,data,error} ] = useMutation (CREATE_TODO , 
  //   {
  //     variables:{
  //       title:title,
  //       completed:completed
  //     }

  // })
  

  return (
    <div className="flex flex-col space-y-3">
      {el?.map((item: any, index: number) => (
        <Draggable key={item.title} draggableId={item.id} index={index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <div className="leading-10 max-h-16 overflow-y-hidden p-4 overflow-hidden text-lg text-slate-900 rounded-lg bg-white hover:bg-slate-100 group hover:shadow dark:bg-slate-600 dark:hover:bg-slate-500 dark:text-white">
                {item.title}
                {item.completed ? 'true' : 'false'}
              </div>
              <button type="button" className="bg-blue-500 mr-2" onClick={() => deleteTodo({ variables: { id: item.id } })}>delete</button>
              <Edit title={item.title} id={item.id}/>
              </div>
          )}
        </Draggable>
      ))}
    </div>
  );
};

export default Dragble;
