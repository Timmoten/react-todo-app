"use client";

import { Todo } from "@/types/todo";
import { useEffect, useState } from "react";
import TodoTabForm from "@/components/todo-tab-form";
import { Tab } from "@/types/tab";
import TodoTabList from "@/components/todo-tab-list";



export default function Page() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [tabs, setTabs] = useState<Tab[]>([])
  const [newTab, setNewTab] = useState("");

  //const [nextId, setNextId] = useState(1);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    const storedTabs = localStorage.getItem("tabs");
    if (storedTabs) {
      setTabs(JSON.parse(storedTabs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("tabs", JSON.stringify(tabs));
  }, [tabs]);

  // function handleSubmitForm(e: React.FormEvent) { //original funktionen
  //   e.preventDefault();

  //   if (!newTodo.trim()) return;

  //   const nextId = todos.length ? todos[todos.length - 1].id + 1 : 1;

  //   const newTodoItem: Todo = {
  //     id: nextId,
  //     title: newTodo.trim(),
  //     completed: false,
  //   };

  //   setTodos((prevTodos) => [...prevTodos, newTodoItem]);

  //   //setNextId((currentId) => currentId + 1);

  //   setNewTodo("");
  // }

  function handleSubmitForm(e: React.FormEvent, tab: Tab) {
    e.preventDefault();

    if (!newTodo.trim()) return;

    const nextId = tab.todos.length ? tab.todos[tab.todos.length - 1].id + 1 : 1;

    const newTodoItem: Todo = {
      id: nextId,
      title: newTodo.trim(),
      completed: false,
    };

    //setTodos((prevTodos) => [...prevTodos, newTodoItem]);

    setTabs((prevTabs) => 
        prevTabs.map((t) => 
          (t.id === tab.id 
            ? { ...t, todos: [...t.todos, newTodoItem] }  
            : t)
        )
  );

    //setNextId((currentId) => currentId + 1);

    setNewTodo("");
  }

  function handleSubmitTab(e: React.FormEvent) {
    e.preventDefault();

    if (!newTab.trim()) return;

    const nextId = tabs.length ? tabs[tabs.length - 1].id + 1 : 1;
    const arr: Todo[] = [];

    const newTabItem: Tab = {
      id: nextId,
      title: newTab.trim(),
      todos: arr,
    };

    setTabs((prevTabs) => [...prevTabs, newTabItem]);

    //setNextId((currentId) => currentId + 1);

    setNewTab("");
  }

  // function handleToggle(id: number) { //original
  //   setTodos((currentTodos) => {
  //     return currentTodos.map((todo) => {
  //       if(todo.id === id) {
  //         return { ...todo, completed: !todo.completed};
  //       }
  //       return todo;
  //     });
  //   });
  // }

  function handleToggle(id: number, tabId: number) {
    setTabs((currentTabs) => {
      return currentTabs.map((tab) => {
        if (tabId === tab.id) {
          return {
            ...tab,
            todos: tab.todos.map((todo) => {
              if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
              }
              return todo;
            }),
          };
        }
        return tab;
      });
    });
  }

  function handleDelete(id: number) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function handleIputChangeTab(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTab(e.target.value);
  }

  function handleIputChangeTodo(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo(e.target.value);
  }


  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Todo App</h1>
      <TodoTabForm
        newTab={newTab}
        onInputChange={handleIputChangeTab}
        onSubmit={handleSubmitTab}
      />
      <TodoTabList 
        tabs={tabs}
        newTodo={newTodo}
        onInputChange={handleIputChangeTodo}
        onSubmit={handleSubmitForm}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
      {/* <Tabs defaultValue="todolistone" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="todolistone">A Todo list</TabsTrigger>
          
        </TabsList>
        <TabsContent value="todolistone">
          <TodoForm
            newTodo={newTodo}
            onInputChange={handleIputChangeTodo}
            onSubmit={handleSubmitForm}
          />

          <div className="space-y-3 mt-2">
            
            <TodoList
              todos={todos}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          </div>
        </TabsContent>
      </Tabs> */}
    </main>
  );
}

{/*npx shadcn@latest init */}