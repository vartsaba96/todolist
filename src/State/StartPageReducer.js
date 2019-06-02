const SET_TASKS = 'SET_TASKS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_TASK_COUNT='SET_TOTAL_TASK_COUNT';
const TOGGLE_IS_FETCHING='TOGGLE_IS_FETCHING';

let initialState = {
    tasks: [],
    pageSize:3,
    total_task_count: 0,
    currentPage: 1,
    isFetching: false,
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return {...state, tasks: action.tasks}
        case SET_CURRENT_PAGE:
            return {...state, currentPage:action.currentPage}
        case SET_TOTAL_TASK_COUNT:
            return {...state, total_task_count:action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
    default:
        return state;
    }
}

export const setTasks=(tasks)=> ({type: SET_TASKS, tasks});
export const setCurrentPage = (currentPage)=> ({type:SET_CURRENT_PAGE, currentPage:currentPage});
export const setTotalTasksCount = (total_task_count)=>({type:SET_TOTAL_TASK_COUNT, count:total_task_count});
export const toggleIsFetching = (isFetching)=>({type:TOGGLE_IS_FETCHING, isFetching});
export default tasksReducer;