import { useState } from 'react';
import CartDroppable from './assets/components/CartDroppable';
import './box.css'
import { DndContext, DragEndEvent } from '@dnd-kit/core'
import FruitDraggable from './assets/components/FruitDraggable';

function App() {

  const fruits = ["Apple", "Banana", "Lemon", "Pear", "Mango"];

  const [cartItems, setCartItems] = useState<string[]>(["test"]);

  const addItemsToCart = (e: DragEndEvent) => {
    const newItem = e.active.data.current?.title;
    if (e.over?.id !== 'cart-droppable' || !newItem) return;
    const temp = [...cartItems];
    temp.push(newItem);
    setCartItems(temp);
  }

  return (
    <>
      <DndContext onDragEnd={addItemsToCart}>
        <main className="flex justify-around p-4">
          <div className='fruit-list-section w-1/2 p-4 bg-green-100 rounded-lg shadow-md'>
            <h1 className="text-2xl font-bold mb-4">Fruit List</h1>
            <ul className="fruit-list space-y-2">
              {fruits.map((fruit) => (
                <FruitDraggable key={fruit} >{fruit}</FruitDraggable>
              ))}
            </ul>
          </div>
          <div className="cart-section w-1/2 p-4 bg-blue-100 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">My Cart</h1>
            <CartDroppable items={cartItems} />
          </div>
        </main>
      </DndContext>

    </>
  )
}

export default App
