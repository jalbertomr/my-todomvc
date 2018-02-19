import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import TodoStore from '../data/TodoStore';
import TodoDraftStore from '../data/TodoDraftStore';
import TodoActions from '../data/TodoActions';

function getStores() {
    return [
        TodoDraftStore,
        TodoStore,
    ];
}

function getState() {
    return {
        draft: TodoDraftStore.getState(),
        todos: TodoStore.getState(),

        onAdd: TodoActions.addTodo,
        onDeleteTodo: TodoActions.deleteTodo,
        onDeleteCompletedTodos: TodoActions.deleteCompletedTodos,
        onToggleTodo: TodoActions.toggleTodo,
        onToggleAllTodos: TodoActions.toggleAllTodos,
        onUpdateDraft:  TodoActions.updateDraft,
    };
}

export default Container.createFunctional(AppView, getStores, getState);
