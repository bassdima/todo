import { useState } from "react";
import styles from "../../styles/todoAppStyles/InputTodoApp.module.css";

const InputTodoApp = ({ addTask, todosList }) => {
    const [enteredUserText, setEnteredUserText] = useState('')

    const handleChange = (e) => {
        setEnteredUserText(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(enteredUserText)
        setEnteredUserText("")
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleSubmit(e)
        }
    }
    
    return (
            <form onSubmit={handleSubmit}>
                <input
                    value={enteredUserText}
                    type="text"
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    className={`${styles["todo-app__input"]} ${(todosList.length > 0) ? `${styles["down-arrow"]}` : ""}`}
                    placeholder="What needs to be done?"
                />  
            </form>
    )
}

export default InputTodoApp;
