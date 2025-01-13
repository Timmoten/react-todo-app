"use client";

import { Todo } from "@/types/todo";
import TodoItem from "./todo-item";

interface TodoListProps {
    todos: Todo[],
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function TodoList({ todos, onToggle, onDelete}: TodoListProps) {
    if (todos.length === 0) {
        return (
            <p className="text-center ">No todos yet. Add one above!</p>
        )
    }
    
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem 
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}