"use client";

import { Todo } from "@/types/todo";
import { Button } from "./ui/button";

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onDelete}: TodoItemProps) {
    return (
        <div key={todo.id} className="p-4 border rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => onToggle(todo.id)} 
              className="h-4 w-4" 
              />
              <span 
              className={todo.completed ? "line-through text-gray-500" : ""}
              >
                {todo.title}
              </span>
            </div>
            <Button 
            onClick={() => onDelete(todo.id)} 
            variant={"destructive"}
            >
                Delete
            </Button>
          </div>
        </div>
    )
}