import { Draggable } from "react-beautiful-dnd";


const Dragble: React.FC<any> = ({ el }) => {
  return (
    <div className="flex flex-col space-y-3">
      {el?.map((item: any, index: number) => (
        <Draggable key={item.title} draggableId={item.title} index={index}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <div className="leading-10 max-h-16 overflow-y-hidden p-4 overflow-hidden text-lg text-slate-900 rounded-lg bg-white hover:bg-slate-100 group hover:shadow dark:bg-slate-600 dark:hover:bg-slate-500 dark:text-white">
                {item.title}
                {/* {item.completed ? <p>true</p> : <p>false</p>} */}
              </div>

              </div>
          )}
        </Draggable>
      ))}
    </div>
  );
};

export default Dragble;
