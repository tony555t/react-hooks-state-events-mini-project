import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });


function App() {
  const [tasksList, setTasksList] = useState(TASKS)
  function onTaskFormSubmit(newTask){

    const updatedTasks = [
      ...tasksList,
     newTask
    ]
    setTasksList(updatedTasks)
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} tasks={TASKS} setTasks={setTasksList}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasksList} setTasks={setTasksList}/>
    </div>
  );
}

export default App;