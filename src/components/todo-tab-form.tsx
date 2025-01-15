"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface TabFormProps {
    newTab: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
}

export default function TodoTabForm({
    newTab,
    onInputChange,
    onSubmit,
}:TabFormProps) {
    return (
      <form onSubmit={onSubmit}>
        <div className="flex gap-2">
          <Input
            type="text"
            value={newTab}
            onChange={onInputChange}
            placeholder="Add a new todo list..."
          />
          <Button type="submit" disabled={!newTab.trim()}>
            Add New List
          </Button>
        </div>
      </form>
    );
}