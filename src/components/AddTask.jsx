import React, { useState } from "react";
import Button from "./Button";

import "./AddTask.css";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    const input = e.target.value
    setInputData(input)
  };

  const handleTaskClick = () => {
    handleTaskAddition(inputData)
    setInputData('')
  }

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />
      <div className="add-task-button-container">
        <Button onClick={handleTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
