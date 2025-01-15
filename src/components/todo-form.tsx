"use client";

import { Tab } from "@/types/tab";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface TodoFormProps {
    tab: Tab;
    newTodo: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent, tab: Tab) => void;
}

export default function TodoForm({
    tab,
    newTodo, 
    onInputChange, 
    onSubmit, 
}: TodoFormProps) {
    return (
        <form onSubmit={(e)=>onSubmit(e, tab)}>
      <div className="flex gap-2">
        <Input 
        type="text" 
        value={newTodo}
        onChange={onInputChange}
        placeholder="Add a new todo..."
        
        />
        <Button 
        type="submit"
        disabled={!newTodo.trim()}
        >
          Add
        </Button>
      </div>
    </form>
    )
}