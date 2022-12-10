import { Fragment } from "react";
import { FILTER_CATEGORIES } from "../../constants";
import styles from "../../styles/todoAppStyles/FilterTodos.module.css";

const FilterTodos = ({ onFilterClick, filterValue }) => {
    const selectFilterClickHandler = (event) => {
        onFilterClick(event.target.value);
    }
    return (
        <Fragment>
            {Object.keys(FILTER_CATEGORIES).map((item) => {
                return (
                    <Fragment key={item}>
                        <input id={item}
                            className={styles["radio-btn"]}
                            type="radio"
                            name="filter"
                            value={FILTER_CATEGORIES[item]}
                            onClick={selectFilterClickHandler}
                            defaultChecked={FILTER_CATEGORIES[item] === "All"}>
                        </input>
                        <label htmlFor={item}
                            className={`${styles["filter-btn"]} ${(filterValue === FILTER_CATEGORIES[item]) ? `${styles["filter-btn-checked"]}` : ""}`}>
                            {FILTER_CATEGORIES[item]}
                        </label>
                    </Fragment>
                );
            })}
        </Fragment>
    );
}

export default FilterTodos;
