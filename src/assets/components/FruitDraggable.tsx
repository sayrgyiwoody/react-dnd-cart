import React from 'react'
import {useDraggable} from '@dnd-kit/core'
import {CSS} from '@dnd-kit/utilities'

interface IFruitDraggable {
    children: string;
}

const FruitDraggable : React.FC<IFruitDraggable> = (props) => {
  
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.children,
        data: { title: props.children }
    });
  
    return (
        <div
            ref={setNodeRef}
            className="fruit-item p-2 bg-white rounded shadow"
            style={{ transform: CSS.Translate.toString(transform) }}
            {...attributes}
            {...listeners}
        >
            {props.children}
    </div>
  )
}

export default FruitDraggable