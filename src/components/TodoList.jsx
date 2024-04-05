import { useState } from "react";
import Form from "./Form";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";
import Edit from "./Edit";

const TodoList = () => {
  const [todoValue, setTodo] = useState([]);

  const createTodo = (todo) => {
    setTodo([
      ...todoValue,
      { id: uuid(), task: todo, isEditing: false, complete: false },
    ]);
  };

  const setComplete = (id, complete) => {
    setTodo((todo) =>
      todo.map((t) =>
        t.id == id
          ? {
              ...t,
              complete,
            }
          : t
      )
    );
  };

  const deleteTodo = (id) => {
    setTodo(todoValue.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodo(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodo(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="relative container bg-gray-700 mt-20 p-8 rounded-md">
      <div className="absolute top-12 right-12 text-white text-xl">
        Complete Todo:{" "}
        {todoValue.filter((todo) => todo.complete === true).length}
      </div>
      <Form createTodo={createTodo} />
      {todoValue.map((todo, idx) =>
        todo.isEditing ? (
          <Edit key={idx} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={idx}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            setComplete={setComplete}
          />
        )
      )}
    </div>
  );
};

export default TodoList;
