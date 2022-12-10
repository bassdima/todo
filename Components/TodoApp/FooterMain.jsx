import styles from "../../styles/todoAppStyles/FooterMain.module.css";

const FooterMain = () => {
    return (
        <footer className={styles["todo-app__info"]}>
            <p>Double-click to edit a todo</p>
            <p>Created by <a className={styles["todo-app__info__link"]} href="http://github.com/petehunt/">petehunt</a></p>
            <p>Part of <a className={styles["todo-app__info__link"]} href="http://todomvc.com">TodoMVC</a></p>
        </footer>

    );
}

export default FooterMain;
