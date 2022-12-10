import { useState } from "react"
import { handleChange, handleDoubleClick, handleKeyPress, handleBlur } from "../../helpers"
import EmptyCircle from "next/image"
import CircleCheck from "next/image"
import Cross from "../../public/cross.svg"
import styles from "../../styles/todoAppStyles/ItemTodoApp.module.css"

const ItemTodoApp = ({ todo, isCompleted, removeTask, changeTask, todosList, setState }) => {
    const [isShown, setIsShown] = useState(false);
    const [change, setChange] = useState(false);
    const [newText, setNewText] = useState('');

    return (
        <div key={todo.id}
            className={styles["todo-item"]}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>

            <div className={styles["circle"]} onClick={() => isCompleted(todo.id, todosList, setState)}>
                {todo.complete ?
                    <CircleCheck src="/circle-check.svg" width={40} height={40} alt="circle-check" /> :
                    <EmptyCircle src="/circle-empty.svg" width={40} height={40} alt="circle-empty" />
                }

            </div>
            <div className={`${styles["todo-item__text"]} ${todo.complete ? `${styles["complete-task"]}` : ""} `}
                onDoubleClick={(e) => handleDoubleClick(setChange)}>
                {change ?
                    <form>
                        <input className={styles["edit-form"]} defaultValue={todo.task}
                            onChange={(e) => handleChange(e, setNewText)}
                            onKeyDown={(e) => handleKeyPress(e, setChange, changeTask, setNewText, newText, todo.id, todosList, setState)}
                            onBlur={(e) => handleBlur(e, setChange, changeTask, setNewText, newText, todo.id, todosList, setState)}
                            type="text" />
                    </form> :
                    todo.task
                }
            </div>
            <div className={styles["item-delete"]} onClick={() => removeTask(todo.id, todosList, setState)}>
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
