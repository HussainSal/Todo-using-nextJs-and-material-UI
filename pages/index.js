import classes from "../styles/Index.module.css";
import { Button, makeStyles, TextField } from "@material-ui/core";
import { useRef, Fragment } from "react";
import { useDispatch } from "react-redux";
import Todo from "../components/Todo";

import { todoActions, sendTodosData } from "../store/store";

const useStyle = makeStyles({
  button: {
    color: "white",
    marginLeft: "20px",
    backgroundColor: "#61DBFB",
    height: "45px",
    width: "130px",

    "&:hover": {
      backgroundColor: "#61DBFB",
    },
  },
  input: {
    width: "300px",
    color: "white",

    "&:hover": {
      outline: "none",
      border: "none",
    },
  },
  multilineColor: {
    color: "#FFFFFF",
  },
  textField: {
    borderBottom: "1px solid white",
  },
});

function index() {
  const dispatch = useDispatch();

  const inputRef = useRef();

  // SUBMIT HANDLER

  const submitHandler = (e) => {
    e.preventDefault();
    let todoId = Math.ceil(Math.random() * 100000);

    if (inputRef.current.value !== "") {
      let todo = {
        input: inputRef.current.value,
        completed: false,
        id: todoId,
      };

      dispatch(todoActions.addTodo(todo));

      dispatch(sendTodosData(todo));
      inputRef.current.value = "";
    }
  };

  const style = useStyle();

  return (
    <Fragment>
      <div className={classes.submitTask}>
        <form className={classes.form} onSubmit={submitHandler}>
          <TextField
            className={style.textField}
            color="primary"
            variant="filled"
            InputProps={{
              classes: {
                input: style.multilineColor,
              },
            }}
            className={`${style.input} ${classes.input}`}
            placeholder="Enter a task..."
            inputRef={inputRef}
            required
          />
          <Button onClick={submitHandler} className={style.button}>
            Add Task
          </Button>
        </form>
      </div>
      <Todo />
    </Fragment>
  );
}

export default index;
