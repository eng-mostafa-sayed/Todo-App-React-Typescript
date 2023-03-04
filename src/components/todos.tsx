import React from "react";
import Todo from "../models/todo";
import TodoItems from "./todosItem";
import classes from "./Todos.module.css";
const Todos: React.FC<{
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((e) => (
        <TodoItems
          key={e.id}
          text={e.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, e.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
