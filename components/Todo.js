import classes from "../styles/Index.module.css";
import { Typography, makeStyles } from "@material-ui/core";
import { Restore, Delete, CheckCircle } from "@material-ui/icons";

import { useRouter } from "next/router";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodosData,
  todoActions,
  updateTodosData,
  getTodoData,
} from "../store/store";

const useStyle = makeStyles({
  para: {
    borderBottom: "1px solid  #828791",
    textTransform: "capitalize",
  },
  noPara: {
    borderBottom: "none",
    marginTop: "50px",
    textAlign: "start",
    paddingLeft: "0px",
  },

  tick: {
    transition: "all .3s",

    "&:hover": {
      color: "#61E760",
      cursor: "pointer",
      transform: "scale(1.15)",
    },
  },
  delete: {
    transition: "all .3s",

    "&:hover": {
      color: "#F70000",
      cursor: "pointer",
      transform: "scale(1.15)",
    },
  },
  delete2: {
    "&:hover": {
      color: "white",
    },
  },
  recycle: {
    transition: "all .3s",

    "&:hover": {
      cursor: "pointer",
      color: "white",
      transform: "scale(1.15)",
    },
  },
});

function Todo() {
  const router = useRouter();

  const style = useStyle();

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  //   const [loading, setLoading] = useState(false);

  // GETTING TODOS
  useEffect(() => {
    todos.length === 0 && dispatch(getTodoData(todoActions.replaceTodo));
  }, []);

  // DELETE HANDLER

  const deleteHandler = (id) => {
    dispatch(todoActions.removeTodo(id));

    dispatch(deleteTodosData(id));
  };

  //UPDATE HANDLER

  const updateTodoHandler = (cur) => {
    dispatch(todoActions.completedTodo(cur.id));

    const updatedTodo = {
      id: cur.id,
      input: cur.input,
      completed: !cur.completed,
    };
    dispatch(updateTodosData(updatedTodo));
  };

  // RESTORE HANDLER

  const restoreHandler = (cur) => {
    dispatch(todoActions.completedTodo(cur.id));
    const updatedTodo = {
      id: cur.id,
      input: cur.input,
      completed: !cur.completed,
    };
    dispatch(updateTodosData(updatedTodo));
  };

  // TODOS
  const homepage = router.pathname === "/";
  const filteredTodos =
    todos && todos.filter((todo) => todo.completed === !homepage);

  return (
    <div
      className={
        router.pathname === "/" ? classes.inputBox : classes.completedbox
      }
    >
      {filteredTodos &&
        filteredTodos.length > 0 &&
        filteredTodos.map((cur, i) => {
          return (
            <div key={cur.id} className={classes.taskBox}>
              <div className={classes.innerTaskbox}>
                {!cur.completed ? (
                  <CheckCircle
                    onClick={() => {
                      updateTodoHandler(cur);
                    }}
                    className={`${classes.checkbox} ${style.tick}`}
                  />
                ) : (
                  <Restore
                    className={`${classes.recycle} ${style.recycle}`}
                    onClick={() => {
                      restoreHandler(cur);
                    }}
                  />
                )}
                <Typography
                  variant="body2"
                  className={`${style.para} ${classes.para}`}
                  style={{
                    textDecoration: cur.completed ? "line-through" : "",
                  }}
                >
                  {cur.input}
                </Typography>
              </div>

              <Delete
                className={`${classes.delete} ${style.delete} ${
                  router.pathname !== "/" ? style.delete2 : ""
                }`}
                onClick={() => {
                  deleteHandler(cur.id);
                }}
              />
            </div>
          );
        })}
      {(!filteredTodos || filteredTodos.length == 0) && (
        <Typography variant="body2" className={`${style.para} ${style.noPara}`}>
          You currently have 0 tasks. Add a task to get started!{" "}
        </Typography>
      )}
    </div>
  );
}

export default Todo;
