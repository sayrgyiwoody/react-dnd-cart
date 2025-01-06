import { DndContext, DragEndEvent } from "@dnd-kit/core"
import CardContainer from "./CardContainer"
import CartList from "./CartList"
import { TItem } from "../../types";
import { useState } from "react";

const Items: TItem[] = [
    {
        id: 'item-1',
        name: 'Nuke',
        description: 'This is very good shoes',
        price: 200
    },
    {
        id: 'item-2',
        name: 'Aboibs',
        description: 'International brand very good',
        price: 200
    },
    {
        id: 'item-3',
        name: 'Pamu',
        description: 'a very nice shirt',
        price: 200
    },
    {
        id: 'item-4',
        name: 'Learn React',
        description: 'Learn React',
        price: 200
    },
    {
        id: 'item-5',
        name: 'Learn TypeScript',
        description: 'Learn TypeScript',
        price: 200
    },
    {
        id: 'item-6',
        name: 'Learn DnD',
        description: 'Learn DnD',
        price: 200
    },
];

const DndCart = () => {

    const [ cartList , setCartList ] = useState<TItem[]>([]);


    const handleDragEnd = (event:DragEndEvent) => {
        const { active, over } = event;
        if (!over || over?.id !== 'cart-list') return;
        const activeId = active.id as string;
        const isAlreadyInCart = cartList.findIndex((item) => item.id === activeId);
        if (isAlreadyInCart !== -1) return;

        // Find the dragged item
        const draggedItem = Items.find((item) => item.id === activeId);

        if (draggedItem) {
            // Create a copy of the item
            const newItem: TItem = draggedItem;
            // Add the new item to the list
            setCartList((prev) => [...prev, newItem]);
        }
    }

    const removeItem = (id: string) => {
        const newCartList = cartList.filter((item) => item.id !== id);
        setCartList(newCartList);
    }

  return (
      <div className="p-5 overflow-hidden">
          <DndContext onDragEnd={handleDragEnd}>
              <div className="flex gap-5">
                  <div className=" w-4/6">
                      <CardContainer items={Items} />
                  </div>
                  <div className="w-2/6">
                      <CartList removeItem={removeItem} list={cartList} />
                  </div>
              </div>
          </DndContext>
          

    </div>

  )
}

export default DndCart