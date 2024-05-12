"use client";
import { useEffect, useState } from "react";
import Dragble from "./dragble";
import {
  Droppable,
  DroppableProps,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";

interface DroppbleProps {
  items: any;
  index: string;
  content: string;
}

const Droppble: React.FC<DroppbleProps> = ({ items, index, content }) => {
  return (
    <StrictModeDroppable key={index} droppableId={`${index}`}>
      {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="w-full max-w-sm m-5 px-4 py-1 border border-slate-200 rounded-lg shadow  bg-[#d5ccff]"
        >
          <div className="text-gray-600 text-center m-2">{content}</div>
          <p className="text-center text-gray-500 text-xs m-2">Drage your note to change its status</p>
        
          <Dragble items={items} />
          {provided.placeholder}
        </div>
      )}
    </StrictModeDroppable>
  );
};
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
