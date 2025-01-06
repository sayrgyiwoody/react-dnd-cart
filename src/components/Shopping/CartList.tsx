import { useDroppable } from "@dnd-kit/core"
import { TItem } from "../../types";
import React from "react";
import { ShoppingCard } from "./ShoppingCard";
import { CartItem } from "./CartItem";

type CartListProps = {
    list: TItem[];
}

const CartList: React.FC<CartListProps> = ({list}) => {

    const {setNodeRef} =useDroppable({
         id: 'cart-list'
    });


  return (
      <div ref={setNodeRef} className=" min-h-80 border-2 border-neutral-500 text-white rounded-lg p-3">
          <h2 className=" font-semibold text-2xl mb-3">Cart List</h2>
          <div className="space-y-2">
              {list && list.map((item) => (
                  <CartItem key={item.id} item={item} />
              ))}
          </div>
    </div>
  )
}

export default CartList