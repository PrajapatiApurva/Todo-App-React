import React,{useState} from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import styles from "./App.module.css";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem=(todoName,dueDate)=>{
    if(todoName !=="" && dueDate!==""){
      let time=new Date().toLocaleTimeString();
      let newTodoItems=[...todoItems,{todoName,dueDate,time}];
      setTodoItems(newTodoItems);
    }
  }
  const handleDeleteItem=(key)=>{
    let newItems=todoItems.filter((item)=>item.time!==key);
    setTodoItems(newItems);
  }
  return (
    <div className={`${styles.mainContainer} todo-container`}>
      <div className={styles.todoContainer}>
        <AppName/>
        
        <AddTodo 
          onNewItem={handleNewItem}
        />
        <ErrorMessage 
          length={todoItems.length}
        />
        <TodoItems 
          todoItems={todoItems}
          onDeleteItem={handleDeleteItem}
        />
      </div>
    </div>
    
  );
}

export default App;
