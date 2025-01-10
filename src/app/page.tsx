"use client";

import { useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Page() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [newTodo, setNewTodo] = useState("");

  const [nextId, setNextId] = useState(1);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!newTodo.trim()) return;

    const newTodoItem: Todo = {
      id: nextId,
      title: newTodo.trim(),
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodoItem]);

    setNextId((currentId) => currentId + 1);

    setNewTodo("");
  }

  function handleToggle(id: number) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if(todo.id === id) {
          return { ...todo, completed: !todo.completed};
        }
        return todo;
      });
    });
  }

  function handleDelete(id: number) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function handleIputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo(e.target.value);
  }


  return  (<main className="max-w-2xl mx-auto p-4 bg-slate-200">
    <h1 className="text-2xl font-bold mb-6">Todo App</h1>
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2">
        <input 
        type="text" 
        value={newTodo}
        onChange={handleIputChange}
        placeholder="Add a new todo..."
        className="flex-1 p-2 border rounded"
        />
        <button 
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:bg-blue-300 enabled:shadow-md"
        disabled={!newTodo.trim()}
        >
          Add
        </button>
      </div>
    </form>

    <div className="space-y-3 mt-2">
      {todos.map((todo) => (
        <div key={todo.id} className="p-4 border rounded-lg shadow-sm bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => handleToggle(todo.id)} 
              className="h-4 w-4" 
              />
              <span 
              className={todo.completed ? "line-through text-gray-500" : ""}
              >
                {todo.title}
              </span>
            </div>
            <button onClick={() => handleDelete(todo.id)} className="text-red-500 hover:text-red-700">Delete</button>
          </div>
        </div>
        
      ))}
    </div>

    {todos.length === 0 && (
      <p className="text-center">No todos yet. Add one above!</p>
    )}
  </main>)
}