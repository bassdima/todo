import FilterTodos from "./FilterTodos";
import styles from "../../styles/todoAppStyles/FooterTodoApp.module.css";

const FooterTodoApp = ({ todosList, setState, onFilterClick, removeComplited, filterValue }) => {
    return (
        <footer className={styles["todo-item__footer"]}>
            <p className={styles["todo-count"]}>{`${todosList.filter((item) => !item.complete).length} item left`}</p>
            <FilterTodos
                onFilterClick={onFilterClick}
                filterValue={filterValue}
            />
            {(todosList.filter((item) => item.complete).length > 0) ?
                <p onClick={() => removeComplited(todosList, setState)}
                    className={styles["clear-completed"]}>
                    Clear completed</p>
                : ''
            }

        </footer>
    );
}

export default FooterTodoApp;
