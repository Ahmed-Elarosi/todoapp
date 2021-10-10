import { v4 as uuid } from 'uuid';

import { ADD_TODO, EDIT_TASK, RESTORE_TASKS } from "./actions";

const todoReducer = (state, action) => {
    switch(action.type) {
        case ADD_TODO:
            return [ ...state, { id: uuid(), text: action.payload, done: false } ];
        case EDIT_TASK:
            return state.map(task => {
                if (task.id === action.payload) return { ...task, done: !task.done };
                else return task;
            });
        case RESTORE_TASKS:
            return action.payload;
        default:
            return state;
    }
};

export default todoReducer;