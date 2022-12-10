import { useState } from "react";
import { handleSubmit, handleChange } from "../../helpers"
import styles from "../../styles/todoAppStyles/InputTodoApp.module.css";

const InputTodoApp = ({ addTask, todosList, setState }) => {
    const [enteredUserText, setEnteredUserText] = useState('')

    return (
        <form onSubmit={(e) => handleSubmit(e, addTask, setEnteredUserText, enteredUserText, todosList, setState)}>
            <input
                value={enteredUserText}
                type="text"
                onChange={(e) => handleChange(e, setEnteredUserText)}
                className={`${styles["todo-app__input"]} ${(todosList.length > 0) ? `${styles["down-arrow"]}` : ""}`}
                placeholder="What needs to be done?"
            />
        </form>
    )
}

export default InputTodoApp;
