import { createSelector } from "reselect";



const toDoListSelector = (state) => {
    
    return state.toDoList;
}

const searchTextFilterSelector = (state) => {
    return state.filters.search;
}

const statusFilterSelector = (state) => {
    return state.filters.status;
}

const prioritiesFilterSelector = (state) => {
    return state.filters.priority;
}
export const remainingToDoSelector = createSelector(toDoListSelector, searchTextFilterSelector, statusFilterSelector, prioritiesFilterSelector, (toDoList, searchText, status, priorities)=>{
    if (status === 'All'){
        return toDoList.filter((toDo) => {
            return toDo.name.includes(searchText) && (priorities.includes(toDo.priority) || priorities.length === 0);
        })
    }
    else{
        return toDoList.filter((toDo) => {
            return toDo.name.includes(searchText) && ((toDo.completed) && (status === 'Completed') ) || ((!toDo.completed) && (status === 'Todo')) && (priorities.includes(toDo.priority) || priorities.length === 0);
        })
    }
} )