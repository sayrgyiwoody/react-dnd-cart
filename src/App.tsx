import { useState } from "react";
import { Column as ColumnType, Task, Task as TaskType } from "./types"
import { Column } from "./components/Column";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

const COLUMNS: ColumnType[] = [
  { id: 'column-1', title: 'To do' },
  { id: 'column-2', title: 'In progress' },
  { id: 'column-3', title: 'Done' },
];

const INITIAL_TASKS: TaskType[] = [
  {
    id: 'task-1',
    title: 'Learn React',
    description: 'Learn React',
    status: 'column-1',
  },
  {
    id: 'task-2',
    title: 'Learn TypeScript',
    description: 'Learn TypeScript',
    status: 'column-1',
  },
  {
    id: 'task-3',
    title: 'Learn DnD',
    description: 'Learn DnD',
    status: 'column-1',
  }
];

function App() {

  const [tasks, setTasks] = useState<TaskType[]>(INITIAL_TASKS);

  const handleDragEng = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as TaskType['status'];

    setTasks(() =>
      tasks.map((task) => task.id === taskId ? { ...task, status: newStatus } : task)
    );
  }

  return (
    <div className="p-4">
      <div className="flex gap-8">
        <DndContext onDragEnd={handleDragEng}>
          {COLUMNS.map((column) => (
            <Column key={column.id} column={column} tasks={tasks.filter(task => task.status === column.id)} />
          ))}
        </DndContext>
      </div>
    </div>
  )
}

export default App
