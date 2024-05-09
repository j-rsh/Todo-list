"use client"
import { useEffect, useState } from "react";
import Dragble from "./Dragble";
import { Droppable, DroppableProps, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';

interface DroppbleProps{
    el:any,
    ind:number,
    key:number
}

const Droppble: React.FC<DroppbleProps> = ({el,ind}) => {
    
    return ( 
            <StrictModeDroppable key={ind} droppableId={`${ind}`}>
              {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="w-full max-w-sm p-4 bg-slate-50 border border-slate-200 rounded-lg shadow sm:p-6 dark:bg-slate-800 dark:border-slate-700 "
                >
                 <Dragble el={el}/>
                  {provided.placeholder}
                </div>
              )}
            </StrictModeDroppable>
     );
}
export const StrictModeDroppable = ({ children, ...props }: DroppableProps) => {
    const [enabled, setEnabled] = useState(false);
  
    useEffect(() => {
      const animation = requestAnimationFrame(() => setEnabled(true));
  
      return () => {
        cancelAnimationFrame(animation);
        setEnabled(false);
      };
    }, []);
  
    if (!enabled) {
      return null;
    }
  
    return <Droppable {...props}>{children}</Droppable>;
  };
export default Droppble;