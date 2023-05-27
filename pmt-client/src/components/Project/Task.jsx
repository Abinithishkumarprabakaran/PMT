import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './Board.scss';
import DropdownMenu from '../Supplements/DropdownMenu';

export default function Task({ item, index }) {

  return (
		<Draggable
      key={item._id}
      draggableId={item._id}
      index={index}
    >
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{ ...provided.draggableProps.style }}
            onClick={() => handleTaskDetails(item._id)}
            className={`select-none px-3.5 pt-3.5 pb-2.5 mb-2 
              border border-gray-200 rounded-lg shadow-sm bg-white relative 
              ${snapshot.isDragging && 'shadow-md'}`}
          >
            <div className="pb-2">
                <div className="flex item-center justify-between">
                  <h3 className="text-[#1e293b] font-medium text-sm capitalize">{item.title.slice(0, 22)}{item.title.length > 22 && '...'}</h3>
                  <DropdownMenu taskId={item._id} handleDelete={handleDelete} projectId={projectId} setRenderChange={setRenderChange} />
                </div>
                <p className="text-xs text-slate-500 leading-4 -tracking-tight">
                  {item.description.slice(0, 60)}{item.description.length > 60 && '...'}
                </p>
                <span className="py-1 px-2.5 bg-indigo-100 text-indigo-600 rounded-md text-xs font-medium mt-1 inline-block">
                  Task-{item.index}
                </span>
              </div>
          </div>
        );
      }}
    </Draggable>
	);
}