import { FILTER_CATEGORIES } from "../constants"
import { v4 as uuidv4 } from 'uuid';

export const filteringTodos = (items, selectedFilterCategory) => {
  return items.filter((item) => {
    switch (selectedFilterCategory) {
      case FILTER_CATEGORIES.ALL:
        return item;
        break;
      case FILTER_CATEGORIES.ACTIVE:
        return item.complete === false;
        break;
      case FILTER_CATEGORIES.COMPLITED:
        return item.complete === true;
        break;
      default:
        break;
    }
  })
}

export const addTask = (userInput, state, setState) => {
  if (userInput) {
    const newItem = {
      id: uuidv4(),
      task: userInput,
      complete: false
    }
    setState([...state, newItem])
  }
}

export const changeTask = (newText, id, state, setState) => {
  setState([
    ...state.map((todo) =>
      todo.id === id ? { ...todo, task: newText } : { ...todo }
    )
  ])
}

export const setIsCompleted = (id, state, setState) => {
  setState([
    ...state.map((todo) =>
      todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
    )
  ])
}

export const removeTask = (id, state, setState) => {
  setState([...state.filter((todo) => todo.id !== id)]);
}

export const removeCompleted = (state, setState) => {
  setState([...state.filter((item) => !item.complete)])
}

export const handleChange = (e, setState) => {
  setState(e.target.value)
}

export const handleDoubleClick = (setState) => {
  setState(true);
}

export const handleSubmit = (e, action, setState, ...args) => {
  e.preventDefault()
  action(...args)
  setState("")
}

export const handleKeyPress = (e, setState, ...args) => {
  if (e.key === "Enter") {
    handleSubmit(e, ...args)
    setState(false)
  }
}

export const handleBlur = (e, setState, ...args) => {
  handleSubmit(e, ...args)
  setState(false)
}

export default {
  filteringTodos,
  addTask,
  changeTask,
  setIsCompleted,
  removeTask,
  removeCompleted,
  handleChange,
  handleDoubleClick,
  handleSubmit,
  handleKeyPress,
  handleBlur
}
