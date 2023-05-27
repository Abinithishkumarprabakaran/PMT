import React from 'react'
import Task from './Task';

const DroppableCol = ({ column, columnId}) => {
  return (
    <Droppable droppableId={columnId} key={columnId}>
      {(provided, snapshot) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`min-h-[530px] pt-4 duration-75 transition-colors border-t-2 border-indigo-400 ${snapshot.isDraggingOver && 'border-indigo-600'}`}
          >
            {column.items.map((item, index) => {
                return (
                    <Task item={item} index={index}/>
                );
            })}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  )
}

export default DroppableCol
