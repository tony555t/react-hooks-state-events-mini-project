import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const filterCategories = categories.filter(category=>category !== "All")
  const [newCategory, setNewCategory] = useState("code")
  const [newTask, setNewTask] = useState("")
  const newTaskObj ={
    text: newTask,
    category: newCategory
  }
  return (
    <form className="new-task-form" onSubmit={(e)=>{e.preventDefault(); onTaskFormSubmit(newTaskObj)}}>
      <label>
        Details
        <input type="text" name="text" value ={newTask} onChange={(e)=>setNewTask(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={newCategory} onChange={(e)=>setNewCategory(e.target.value)}>
          {/* render <option> elements for each category here */
          filterCategories.map(category=><option key={category}>{category}</option>)
          }
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;