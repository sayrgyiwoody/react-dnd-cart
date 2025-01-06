import React from "react";
import { TItem } from "../../types"
import { ShoppingCard } from "./ShoppingCard"

type CardContainerProps = {
    items: TItem[];
}

const CardContainer:React.FC<CardContainerProps> = ({items}) => {
  return (
      <div className=" grid grid-cols-3 gap-4">
          {items.map((item) => (
              <ShoppingCard key={item.id} item={item} />
          ))}
    </div>
  )
}

export default CardContainer