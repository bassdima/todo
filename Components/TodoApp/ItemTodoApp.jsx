import { useState } from "react"
import EmptyCircle from "next/image"
import CircleCheck from "next/image"
import Cross from "../../public/cross.svg"
import styles from "../../styles/ItemTodoApp.module.css"

const ItemTodoApp = ({ todo, isCompleted, removeTask, changeTask }) => {
    const [isShown, setIsShown] = useState(false);
    const [change, setChange] = useState(false);
    const [newText, setNewText] = useState('');

    const handleChange = (e) => {
        setNewText(e.currentTarget.value)
    }

    const handleClick = (event) => {
        if (event.detail === 2) {
            setChange(true);
        }
      }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        changeTask(newText, todo.id)
        setNewText("")
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
            setChange(false)
        }
    }
    
    return (
        <div key={todo.id}
             className={styles["todo-item"]}
             onClick={handleClick}
             onMouseEnter={() => setIsShown(true)}
             onMouseLeave={() => setIsShown(false)}>

            <div className={styles["circle"]} onClick={() => isCompleted(todo.id)}>
                {todo.complete ? 
                    <CircleCheck src="/circle-check.svg" width={40} height={40} alt="circle-check"/> :
                    <EmptyCircle src="/circle-empty.svg" width={40} height={40} alt="circle-empty"/> 
                }

            </div>
            <div className={`${styles["todo-item__text"]} ${todo.complete ? `${styles["complete-task"]}` : ""} `}>
                {change ?
                    <form onSubmit={handleSubmit}>
                        <input defaultValue={todo.task}
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                        type="text" />
                    </form> : 
                    todo.task
                }
            </div>
            <div className={styles["item-delete"]} onClick={() => removeTask(todo.id)}>
                {isShown ?
                    <Cross className={styles["cross"]} src="/cross.svg" 
                        width={16} 
                        height={16} 
                        alt="cross"
                    />
                : ''}
            </div>
        </div>
    )
}

export default ItemTodoApp;
