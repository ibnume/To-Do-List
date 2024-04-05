/* eslint-disable react/prop-types */
import { AiFillEdit } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";
import Check from "./Check";

const Todo = ({ task, deleteTodo, editTodo, setComplete }) => {
  return (
    <div
      className="flex justify-between items-center bg-gray-500
    text-white py-3 px-4 rounded-md mb-1 cursor-pointer"
    >
      <Check id={task.id} complete={task.complete} setComplete={setComplete} />
      <p
        className={`${
          task.complete ? "line-through" : ""
        } flex-auto m-3 font-primary`}
      >
        {task.task}
      </p>
      <div className="flex items-center gap-x-4">
        <AiFillEdit className="text-xl" onClick={() => editTodo(task.id)} />
        <AiTwotoneDelete
          className="text-xl"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
