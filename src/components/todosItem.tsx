import classes from "./TodoItem.module.css";

const TodoItems: React.FC<{
  text: string;
  key: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li className={classes.item} key={props.key} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodoItems;
