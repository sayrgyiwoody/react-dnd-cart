import { DndContext, DragEndEvent } from "@dnd-kit/core"
import CardContainer from "./CardContainer"
import CartList from "./CartList"
import { TItem } from "../../types";
import { useState } from "react";

const Items: TItem[] = [
    {
        id: 'task-1',
        name: 'Learn React',
        description: 'Learn React',
        price: 200
    },
    {
        id: 'task-2',
        name: 'Learn TypeScript',
        description: 'Learn TypeScript',
        price: 200
    },
    {
        id: 'task-3',
        name: 'Learn DnD',
        description: 'Learn DnD',
        price: 200
    }
];

const DndCart = () => {

    const [ cartList , setCartList ] = useState<TItem[]>([]);

    const handleDragEnd = (event:DragEndEvent) => {
        const { active, over } = event;
        if (!over || over?.id !== 'cart-list') return;
        const activeId = active.id as string;
        const newItem = Items.find((item) => item.id === activeId);
        const temp = [...cartList];
        temp.push(newItem);
        setCartList(temp);
    
    }

  return (
      <div className="p-5 overflow-hidden">
          <DndContext onDragEnd={handleDragEnd}>
              <div className="flex gap-5">
                  <div className=" w-4/6">
                      <CardContainer items={Items} />
                  </div>
                  <div className="w-2/6">
                      <CartList list={cartList} />
                  </div>
              </div>
          </DndContext>
          

    </div>

  )
}

export default DndCart