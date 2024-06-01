import React, { useRef } from "react";
import styles from "./AddTodo.module.css";
import { IoIosAddCircle } from "react-icons/io";
function AddTodo({onNewItem}) {

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleNewTodoItem = (event) => {
    event.preventDefault();

    const todoName = todoNameElement.current.value;
    const dueDate = todoDateElement.current.value;

    if(todoName !== "" && dueDate !== ""){
      onNewItem(todoName,dueDate);
      todoNameElement.current.value = "";
      todoDateElement.current.value = "";
    }
    
  }
  return (
    <div className={`container text-center`}>
      <form onSubmit={handleNewTodoItem}>
        <div className="row kg-row">
          <div className="col-6">
            <input
              className={styles.first} 
              placeholder="Enter Todo Here" 
              ref={todoNameElement}
              type="text"
            />
          </div>
          <div className="col-4">
            <input
              className={styles.second} 
              ref={todoDateElement}
              type="date" 
            />
          </div>
          <div className="col-2">
            <button 
              type="submit" 
              className={` btn btn-success kg-button ${styles.btn} ${styles.third}`}
            >
              <IoIosAddCircle 
                className={styles.icon} 
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
