import classes from "./../styles/Index.module.css";
import { makeStyles } from "@material-ui/styles";
import { Button, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Link from "next/link";
import { todoActions, getTodoData } from "../store/store";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayName = days[new Date().getDay()];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let monthName = months[new Date().getMonth()];

let day = new Date().getDate();

const useStyle = makeStyles({
  activeTask: {
    color: "#61DBFB",
    fontSize: "10px",
  },
});

function Layout() {
  const [active, setActive] = useState("Incomplete Tasks");
  const style = useStyle();

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    todos.length === 0 && dispatch(getTodoData(todoActions.replaceTodo));
  }, []);

  const unCompletedTodos =
    todos && todos.filter((todo) => todo.completed === false);

  return (
    <div className={classes.navigation}>
      <div className={classes.date}>
        <Typography className={classes.dateItem} id="day" variant="body1">
          {dayName}, {monthName} {day}
        </Typography>

        <Typography
          className={style.activeTask}
          style={{ marginTop: "10px" }}
          variant="body2"
        >
          {`${(unCompletedTodos && unCompletedTodos.length) || 0} Active Task`}
        </Typography>
      </div>

      <div className={classes.category}>
        <Link className={classes.link} href="/">
          <p
            onClick={() => {
              setActive("Incomplete Tasks");
            }}
            className={`${
              active == "Incomplete Tasks"
                ? classes.activeLink
                : classes.paraLink
            } `}
          >
            Incomplete Tasks
          </p>
        </Link>

        <Link className={classes.link2} href="/completed">
          <p
            onClick={() => {
              setActive("Completed Tasks");
            }}
            className={`${
              active == "Completed Tasks"
                ? classes.activeLink
                : classes.paraLink
            } `}
          >
            {" "}
            Completed Tasks{" "}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Layout;
