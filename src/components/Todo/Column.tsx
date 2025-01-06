import { useDroppable } from "@dnd-kit/core";
import { Column as ColumnType, Task } from "../../types";
import { TaskCard } from "./TaskCard";

type ColumnProps = {
    column: ColumnType;
    tasks: Task[];
}

export const Column = ({ column, tasks }: ColumnProps) => {
    const { setNodeRef } = useDroppable({
        id: column.id
    })
    return (
        <div className="flex w-80 flex-col rounded-lg bg-neutral-800 p-4">
            <div className="mb-4 font-semibold text-neutral-100">{column.title}</div>
            <div ref={setNodeRef} className="flex flex-col flex-1 gap-4">
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    )
}