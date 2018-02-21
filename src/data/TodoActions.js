import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

const Actions = {
    addTodo(text) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.ADD_TODO,
            text
        });
    },
    
    deleteTodo(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.DELETE_TODO,
            id
        });
    },
    
    deleteCompletedTodos() {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.DELETE_COMPLETED_TODOS
        });
    },

    editTodo(id, text) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.EDIT_TODO,
            id,
            text
        });
    },

    startEditingTodo(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.START_EDITING_TODO,
            id,
        });
    },

    stopEditingTodo() {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.STOP_EDITING_TODO,
        })
    },

    toggleTodo(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.TOGGLE_TODO,
            id
        });  
    },

    toggleAllTodos() {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.TOGGLE_ALL_TODOS
        });
    },

    updateDraft(text) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.UPDATE_DRAFT,
            text
        })
    },
};

export default Actions;
