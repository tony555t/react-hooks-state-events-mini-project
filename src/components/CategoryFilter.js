import React, { useState } from "react";

function CategoryFilter({categories, tasks, setTasks}) {
  const [active, setActive] = useState("All")

  function selected(category){
   setActive(category)
   const updatedTasks = tasks.filter(task=>{
    if(category === "All"){
      return true
    }else{
      return task.category === category
    }
   })
   setTasks(updatedTasks)

  }
  // console.log(isSelected);
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */
      categories.map(category=><button key={category} className={`${active === category && "selected"}`} 
       onClick = {()=>selected(category)}>{category}</button>)
      }
    </div>
  );
}

export default CategoryFilter;