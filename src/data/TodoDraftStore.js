import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispacher from './TodoDispatcher';

class TodoDraftStore extends ReduceStore{
    constructor() {
        super(TodoDispacher);
    }

    getInitialState() {
        return '';
    }

    reduce(state, action){
        switch (action.type) {
            case TodoActionTypes.ADD_TODO:
                return '';

            case TodoActionTypes.UPDATE_DRAFT:
                return action.text;

            default:
                return state;
        }
    }

}

export default new TodoDraftStore();
