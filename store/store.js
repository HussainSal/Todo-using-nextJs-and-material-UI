import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: { 
    todos: [] ,
   },
  reducers: {
    addTodo(state, action) {
      const todo = action.payload;
      state.todos.push(todo);
    },
    removeTodo(state, action) {
      const id = action.payload;
      const updatedTodo = state.todos.filter((todo) => todo.id !== id);
      state.todos = updatedTodo;
    },
    replaceTodo(state, action) {
      state.todos = action.payload;
    },
    completedTodo(state, action) {
      const id = action.payload;
      const updatedTodo = state.todos.map((cur) => {
        if (cur.id === id) {
          return {
            input: cur.input,
            id: cur.id,
            completed: !cur.completed,
          };
        } else {
          return cur;
        }
      });

      state.todos = updatedTodo;
    },
  },
});

export const todoActions = todoSlice.actions;

const store = configureStore({ reducer: todoSlice.reducer });

export default store;

export const sendTodosData = (todo) => {
  return async () => {
    fetch(
      `https://todo-8fb07-default-rtdb.firebaseio.com/todo/${todo.id}.json`,
      {
        method: "POST",
        body: JSON.stringify(todo),
      }
    );
  };
};

export const deleteTodosData = (id) => {
  return async () => {
    fetch(`https://todo-8fb07-default-rtdb.firebaseio.com/todo/${id}.json`, {
      method: "DELETE",
    });
  };
};

export const updateTodosData = (todo) => {
  return async () => {
    fetch(
      `https://todo-8fb07-default-rtdb.firebaseio.com/todo/${todo.id}.json`,
      {
        method: "PUT",
        body: JSON.stringify({ updatedTodo: todo }),
      }
    );
  };
};

export const getTodoData = (replaceAction) => {
  return async (dispatch) => {

    const res = await fetch(
      `https://todo-8fb07-default-rtdb.firebaseio.com/todo.json`
    );
    const data = await res.json();

    const test = data && Object.keys(data).map((key) => {
      return data[key];
    });

    const todos = test && test.map((item) => {
      return Object.keys(item).map((key) => {
        return item[key];
      });
    });
    const arryOfTodos = [].concat.apply([], todos);

    dispatch(replaceAction(arryOfTodos));
  };
};
