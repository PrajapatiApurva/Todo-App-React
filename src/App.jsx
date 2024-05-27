import React,{useState} from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import styles from "./App.module.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem=(todoName,dueDate)=>{
    if(todoName !=="" && dueDate!==""){
      let newTodoItems=[...todoItems,{todoName,dueDate}];
      setTodoItems(newTodoItems);
    }
  }
  const handleDeleteItem=(todoItem)=>{
    let newItems=todoItems.filter((item)=>item.todoName!==todoItem);
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
