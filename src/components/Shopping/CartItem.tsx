import React from "react";
import { TItem } from "../../types"

type CartItemProps = {
    item: TItem;
    removeItem: (id: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ item,removeItem }) => {

    return (
        <div
            
            className="p-4 w-full bg-neutral-800 rounded-xl shadow-md space-y-4"
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
                <button onClick={()=>removeItem(item.id)} className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-700">Remove Item</button>
            </div>
        </div>
    )
}