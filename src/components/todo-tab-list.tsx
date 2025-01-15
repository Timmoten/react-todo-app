"use client";

import { Tabs } from "@radix-ui/react-tabs";
import { TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Tab } from "@/types/tab";
import TodoForm from "./todo-form";
import TodoList from "./todo-list";

interface TodoTabsProps {
    tabs: Tab[];
    newTodo: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent, tab: Tab) => void;
    onToggle: (id: number, tabId: number) => void;
    onDelete: (id: number) => void;
}

export default function TodoTabList({
    tabs,
    newTodo, 
    onInputChange, 
    onSubmit, 
    onToggle, 
    onDelete
}: TodoTabsProps) {
    if (tabs.length === 0) {
        return (
        <p className="text-center ">No todo lists yet. Add one above!</p>
        )
    }

    return (
      <div>
        <Tabs defaultValue="1" className="w-[400px]">
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id.toString()}>
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {/*create a map for the todos in TabsContent*/}
          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id.toString()}>
              <TodoForm
                tab={tab}
                newTodo={newTodo}
                onInputChange={onInputChange}
                onSubmit={onSubmit}
              />

              <div className="space-y-3 mt-2">
                {/*before there was a map function here*/}
                <TodoList
                  tabId={tab.id}
                  todos={tab.todos}
                  onToggle={onToggle}
                  onDelete={onDelete}
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    );
}