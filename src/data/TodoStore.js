import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import Counter from './Counter';
import Todo from './Todo';

class TodoStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }
    
    getInitialState() {
        return Immutable.OrderedMap();
    }
    
    reduce(state, action) {
//        console.log(state + '==' + action.type + '-'+action.id + '-'+action.text);
        switch (action.type) {
            case TodoActionTypes.ADD_TODO:
                //Don't add todos with no text.
                if(!action.text) {
                    return state;
                }
                const id = Counter.increment();
                return state.set(id, new Todo({
                    id,
                    text: action.text,
                    complete: false,
                }));

            case TodoActionTypes.EDIT_TODO:
                return state.setIn([action.id, 'text'], action.text);

            case TodoActionTypes.DELETE_TODO:
                return state.delete(action.id);

            case TodoActionTypes.DELETE_COMPLETED_TODOS:
                return state.filter(todo => !todo.complete);

            case TodoActionTypes.TOGGLE_TODO:
                return state.update(
                    action.id,
                    todo => todo.set('complete', !todo.complete),
                );

            case TodoActionTypes.TOGGLE_ALL_TODOS:
                const areAllComplete = state.every(todo => todo.complete);
                return state.map( todo => todo.set('complete', !areAllComplete));
                
            default:
                return state;
        }
    }
}

export default new TodoStore();
