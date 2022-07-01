import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const { todos, isLoading, isError } = useSelector((state) => state);
  //   console.log("todos:", todos);
  if (isLoading) return <div style={{ textAign: "center" }}>Loading...</div>;
  if (isError) return <div style={{ textAign: "center" }}>Error...</div>;
  return (
    <div>
      {todos.map((todo) => (
        <div
          key={todo.id}
        >
          {todo.value}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
