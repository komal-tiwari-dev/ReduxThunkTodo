import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodoAPI } from "../Store/Todos/todos.action";
import TodoList from "./TodoList";

const Todo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoAPI());
  }, [dispatch]);
  return (
    <div>
      <TodoList></TodoList>
    </div>
  );
};

export default Todo;
