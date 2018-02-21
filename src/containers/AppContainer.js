import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import TodoStore from '../data/TodoStore';
import TodoDraftStore from '../data/TodoDraftStore';
import TodoEditStore from '../data/TodoEditStore';
import TodoActions from '../data/TodoActions';

function getStores() {
    return [
        TodoEditStore,
        TodoDraftStore,
        TodoStore,
    ];
}

function getState() {
    return {
        draft: TodoDraftStore.getState(),
        editing: TodoEditStore.getState(),
        todos: TodoStore.getState(),

        onAdd: TodoActions.addTodo,
        onDeleteTodo: TodoActions.deleteTodo,
        onDeleteCompletedTodos: TodoActions.deleteCompletedTodos,
        onEditTodo: TodoActions.editTodo,
        onStartEditingTodo: TodoActions.startEditingTodo,
        onStopEditingTodo: TodoActions.stopEditingTodo,
        onToggleTodo: TodoActions.toggleTodo,
        onToggleAllTodos: TodoActions.toggleAllTodos,
        onUpdateDraft:  TodoActions.updateDraft,
    };
}

export default Container.createFunctional(AppView, getStores, getState);
