import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems,onDeleteItem }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem 
          key={item.todoName}
          todoDate={item.dueDate} 
          todoName={item.todoName}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
};

export default TodoItems;
