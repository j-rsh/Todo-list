"use client";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Edit from "./edit";
import Content from "./content";
import Delete from "./delete";

const Dragble: React.FC<any> = ({ items }) => {
  return (
    <div className="flex flex-col space-y-3">
      {items?.map((item: any, index: number) => (
        <Draggable key={item.title} draggableId={item.id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <div className="flex w-full justify-between leading-10 bg-[#f4f2ff] max-h-16 p-3 overflow-hidden text-sm text-gray-500 rounded-lg hover:bg-slate-100 group hover:shadow">
                <Content title={item.title} id={item.id} />
                <div>
                  <Delete id={item.id} />
                  <Edit
                    title={item.title}
                    id={item.id}
                    completed={item.completed}
                  />
                </div>
              </div>
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
};

export default Dragble;
