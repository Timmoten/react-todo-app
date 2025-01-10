"use client";

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
        <input 
        type="text" 
        value={newTodo}
        onChange={onInputChange}
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
    )
}