import React from "../../node_modules/@types/react";
import TodoForm from "./todos/todoForm";
import TodoList from "./todos/todoList";
import Todo from "./todos/todo.js";

export default function Profile() {
  return (
    <div className="profile">
      <TodoForm />
    </div>
  );
}
