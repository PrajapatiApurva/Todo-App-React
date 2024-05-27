import React, { useState } from "react";
import styles from "./AddTodo.module.css";
import { IoIosAddCircle } from "react-icons/io";
function AddTodo({onNewItem}) {

  const [todoName, setTodoName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleNewTodo = (event) => {
    if(event.target.value!==""){
      let newtodo=event.target.value;
      setTodoName(newtodo);
    }
    
  }

  const handleNewDueDate = (event) => {
    if(event.target.value!==""){
      let newDate=event.target.value;
      setDueDate(newDate);
    }
  }

  const handleNewTodoItem=()=>{
    if(todoName!=="" || dueDate!==""){
      onNewItem(todoName,dueDate)
      setDueDate("");
      setTodoName("");  
    }
    
  }


  return (
    <div className={`container text-center`}>
      <div className="row kg-row">
        <div className="col-6">
          <input
            className={styles.first} 
            type="text"
            value={todoName} 
            placeholder="Enter Todo Here" 
            onChange={handleNewTodo}
          />
        </div>
        <div className="col-4">
          <input
            className={styles.second} 
           type="date" 
           value={dueDate}
           onChange={handleNewDueDate}
          />
        </div>
        <div className="col-2">
          <button 
            onClick={handleNewTodoItem}
            type="button" 
            className={` btn btn-success kg-button ${styles.btn} ${styles.third}`}
          >
            <IoIosAddCircle 
              className={styles.icon} 
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
