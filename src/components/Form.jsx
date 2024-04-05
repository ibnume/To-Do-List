/* eslint-disable react/prop-types */
import { useState } from "react";

const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(value);
    setValue("");
  };

  return (
    <div>
      <form className=" mb-4 font-primary w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          className="outline-none bg-transparent border border-gray-500 
          p-4 w-[300px] text-white mb-8 rounded placeholder:text-gray-300"
          placeholder="What task do have today? "
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button
          className="bg-gray-500 border-none p-2
        text-white cursor-pointer rounded ml-2"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Form;
