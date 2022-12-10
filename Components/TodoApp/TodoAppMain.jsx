import { useState, useEffect } from "react";
import { FILTER_CATEGORIES } from "../../constants"
import { filteringTodos, addTask, changeTask, setIsCompleted, removeTask, removeCompleted } from "../../helpers";
import InputTodoApp from "./InputTodoApp";
import ItemTodoApp from "./ItemTodoApp";
import FooterTodoApp from "./FooterTodoApp";
import FooterMain from "./FooterMain";
import styles from "../../styles/todoAppStyles/TodoAppMain.module.css";

const TodoAppMain = () => {
    const [todos, setTodos] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState(FILTER_CATEGORIES.ALL);
    const [filtredTodos, setFiltredTodos] = useState(todos);

    useEffect(() => {
        setFiltredTodos(() => {
            return filteringTodos(todos, selectedFilter);
        });
    }, [todos, selectedFilter])

    return (
        <section className={styles["todo-app"]}>
            <h1 className={styles["todo-app__title"]}>todos</h1>
            <InputTodoApp
                addTask={addTask}
                todosList={todos}
                setState={setTodos}
            />
            {filtredTodos.map((todo) => {
                return (
                    <ItemTodoApp
                        todo={todo}
                        key={todo.id}
                        isCompleted={setIsCompleted}
                        removeTask={removeTask}
                        changeTask={changeTask}
                        todosList={todos}
                        setState={setTodos}
                    />
                )
            })}
            {(todos.length > 0) ?
                <FooterTodoApp
                    todosList={todos}
                    setState={setTodos}
                    removeComplited={removeCompleted}
                    onFilterClick={setSelectedFilter}
                    filterValue={selectedFilter}
                /> : ''}
            <FooterMain />
        </section>
    );
}

export default TodoAppMain;
