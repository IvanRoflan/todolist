import { TextField, Typography, Button } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addTodo } from "../redux/todoSlice";

const TodoInput = (): JSX.Element => {
  const [todoDescription, setTodoDescription] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <Typography style={{ textAlign: "center" }} variant="h3">
        Todo List
      </Typography>
      <TextField 
        variant="outlined"
        label="Что нужно сделать?"
        fullWidth
        onChange={(e) => setTodoDescription(e.target.value)}
        value={todoDescription}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => {
          dispatch(addTodo(todoDescription));
          setTodoDescription('');
        }}
      >
        Добавить
      </Button>
    </>
  );
};

export default TodoInput;