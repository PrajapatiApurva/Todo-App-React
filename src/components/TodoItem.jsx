import styles from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";

function TodoItem({todoName, todoDate,onDeleteItem }) {
  return (
    <div className="container">
      <div  className={`${styles.todoName} row kg-row`}>
        <div className={`col-6`}>{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button 
            type="button" 
            onClick={()=>onDeleteItem(todoName)}
            className={`${styles.btn} btn btn-danger kg-button`}>
            <MdDelete 
              className={styles.icon}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
