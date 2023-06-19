"use client";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

export default function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
}: TodoItemProps) {
  return (
    <li className=" flex gap-1 items-center">
      <input
        onChange={(e) => toggleTodo(id, e.target.checked)}
        defaultChecked={complete}
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
      />
      <label
        htmlFor={id}
        className="cursor:pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
