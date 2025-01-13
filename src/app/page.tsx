"use client";

import TodoForm from "@/components/todo-form";
import TodoList from "@/components/todo-list";
import { Todo } from "@/types/todo";
import { useEffect, useState } from "react";



export default function Page() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  //const [nextId, setNextId] = useState(1);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!newTodo.trim()) return;

    const nextId = todos.length ? todos[todos.length - 1].id + 1 : 1;

    const newTodoItem: Todo = {
      id: nextId,
      title: newTodo.trim(),
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodoItem]);

    //setNextId((currentId) => currentId + 1);

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


  return  (
  <main className="max-w-2xl mx-auto p-4">
    <h1 className="text-2xl font-bold mb-6">Todo App</h1>
    <TodoForm 
    newTodo={newTodo}
    onInputChange={handleIputChange}
    onSubmit={handleSubmit}
    />

    <div className="space-y-3 mt-2">
      {/*before there was a map function here*/}
      <TodoList 
        todos={todos}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  </main>)
}

{/*npx shadcn@latest init */}