import { FILTER_CATEGORIES } from "../constants"

export default function filteringTodos(items, selectedFilterCategory) {
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