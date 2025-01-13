"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface TodoFormProps {
    newTodo: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
}

export default function TodoForm({
    newTodo, 
    onInputChange, 
    onSubmit, 
}: TodoFormProps) {
    return (
        <form onSubmit={onSubmit}>
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