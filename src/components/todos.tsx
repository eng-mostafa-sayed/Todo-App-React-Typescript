import React, { useContext } from "react";
import TodoItems from "./todosItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";
const Todos: React.FC = () => {
  const TodosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {TodosCtx.items.map((e) => (
        <TodoItems
          key={e.id}
          text={e.text}
          onRemoveTodo={TodosCtx.removeTodo.bind(null, e.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
