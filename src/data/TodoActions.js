import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

const Actions = {
    addTodo(text) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.ADD_TODO,
            text,
        });
    },
    
    deleteTodo(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.DELETE_TODO,
            id,
        });
    },
    
    deleteCompletedTodos() {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.DELETE_COMPLETED_TODOS
        })
    },

    toggleTodo(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.TOGGLE_TODO,
            id,
        });  
    },

    updateDraft(text) {
        TodoDispatcher.dispatch({
            type: TodoDispatcher.UPDATE_DRAFT,
            text,
        })
    },
};

export default Actions;
