import { Checkbox, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import { Delete } from '@material-ui/icons';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { removeTodo, setTodoStatus } from "../redux/todoSlice";

const TodoList = (): JSX.Element => {
  const todoList = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <List>
      {todoList.map((todo) => (
        <ListItem key={todo.id}>
          <ListItemText
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.description}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              onClick={() => {
                dispatch(removeTodo(todo.id));
              }}
            >
              <Delete />
            </IconButton>
            <Checkbox
              edge="end"
              value={todo.completed}
              onChange={() => {
                dispatch(
                  setTodoStatus({ completed: !todo.completed, id: todo.id })
                );
              }}
            />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
