import React from 'react'
import { useDroppable } from "@dnd-kit/core";

interface ICartDroppable {
    items: string[];
}

const CartDroppable: React.FC<ICartDroppable> = (props) => {

    const { setNodeRef } = useDroppable({
        id: "cart-droppable"
    });

    return (
        <ul className='cart space-y-2' ref={setNodeRef}>
            {props.items.map((item, index) => (
                <div
                    key={`${item}-${index}`}
                    className="cart-item p-2 bg-white rounded shadow">
                    {item}
                </div>
            ))}
        </ul>
    )
}

export default CartDroppable