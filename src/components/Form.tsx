import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";
import "../styles/Form.scss";

const Form: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addTask(inputValue));
      setInputValue("");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a task"
      />
      <button type="submit">+</button>
    </form>
  );
};

export default Form;
