import { useState, useEffect } from "react";
import filteringTodos from "../../helpers";
import InputTodoApp from "./InputTodoApp";
import ItemTodoApp from "./ItemTodoApp";
import FooterTodoApp from "./FooterTodoApp";
import styles from "../../styles/todoAppStyles/TodoAppMain.module.css";

const TodoAppMain = () => {
    const [todos, setTodos] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [filtredTodos, setFiltredTodos] = useState(todos);

    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem('todos'));
      if (todos) {
        setTodos(todos);
      }
    }, []);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
  
    useEffect(() => {
      setFiltredTodos(() => {
          return filteringTodos(todos, selectedFilter);
      });
    }, [todos, selectedFilter])

    const addTask = (userInput) => {
      if(userInput) {
        const newItem = {
          id: Math.random().toString(36).substr(2,9),
          task: userInput,
          complete: false
        }
        setTodos([...todos, newItem])
      }
    }

    const changeTask = (newText, id) => {
      setTodos([
        ...todos.map((todo) => 
          todo.id === id ? { ...todo, task: newText } : {...todo }
        )
      ])
    }

    const setIsCompleted = (id) => {
      setTodos([
        ...todos.map((todo) => 
          todo.id === id ? { ...todo, complete: !todo.complete } : {...todo }
        )
      ])
    }
  
    const removeTask = (id) => {
      setTodos([...todos.filter((todo) => todo.id !== id)]);
    }
  
    const removeCompleted = () => {
        setTodos([...todos.filter((item) => !item.complete)])
    }

    return(
        <section className={styles["todo-app"]}>
            <h1 className={styles["todo-app__title"]}>todos</h1>
            <InputTodoApp
              addTask={addTask}
              todosList={todos}
            />
            {filtredTodos.map((todo) => {
                return (
                    <ItemTodoApp
                        todo={todo}
                        key={todo.id}
                        isCompleted={setIsCompleted}
                        removeTask={removeTask}
                        changeTask={changeTask}
                    />
                 )
            })}
            {(todos.length > 0) ?
            <FooterTodoApp 
                todosList={todos}
                removeComplited={removeCompleted}
                onFilterClick={setSelectedFilter}
                filterValue={selectedFilter}
            /> : ''}
        </section>
    );
}

export default TodoAppMain;
