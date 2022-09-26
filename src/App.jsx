import React, { useState } from "react";
import { v4 as uuid4 } from "uuid";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from './components/Header'

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: 2,
      title: "Ler Livros",
      completed: true,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });

    setTasks(newTask);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTask = [
      ...tasks,
      {
        id: uuid4(),
        title: taskTitle,
        completed: false,
      },
    ];

    setTasks(newTask);
  };

  const handleTaskDeletion = (taskId) => {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask);
  };

  return (
    <>
      <div className="container">
        <Header/>
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks 
          tasks={tasks} 
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion} 
        />
      </div>
    </>
  );
};

export default App;
