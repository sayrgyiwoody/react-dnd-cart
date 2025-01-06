import React from "react";
import { TItem } from "../../types"
import { useDraggable } from "@dnd-kit/core";

type ShoppingCardProps = {
    item: TItem;
}

export const ShoppingCard:React.FC<ShoppingCardProps> = ({item}) => {
  
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: item.id,
    });

    const style = transform ? {
        transform: `translate(${transform.x}px,${transform.y}px)`
    } : undefined;
  
    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            className="p-4 w-full bg-neutral-800 rounded-xl shadow-md space-y-4"
            style={style}
        >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                  <img className="h-12 w-12" src="https://via.placeholder.com/150" alt="Product" />
              </div>
              <div>
                  <div className="text-xl font-medium text-white">{item.name}</div>
                  <p className="text-neutral-400">{item.description}</p>
              </div>
          </div>
          <div className="flex justify-between items-center">
              <div className="text-lg font-semibold text-white">${item.price}</div>
              <button className="px-4 py-2  text-white text-sm font-medium rounded-md ">Drag to add</button>
          </div>
      </div>
  )
}