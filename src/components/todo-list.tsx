"use client";

import { Todo } from "@/types/todo";
import TodoItem from "./todo-item";

interface TodoListProps {
    tabId: number;
    todos: Todo[];
    onToggle: (id: number, tabId: number) => void;
    onDelete: (id: number, tabId: number) => void;
}

export default function TodoList({ tabId, todos, onToggle, onDelete}: TodoListProps) {
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
                    tabId={tabId}
                />
            ))}
        </div>
    )
}