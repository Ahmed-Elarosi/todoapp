import { useContext } from 'react';
import { EDIT_TASK } from '../../store/actions';

import todoContext from '../../store/context';

const TodoItem = ({ data }) => {

    const { dispatch } = useContext(todoContext);

    return (
        <div className="todo-item">
            <p>{data.text}</p>
            <div className="actions">
                {/* Make sure that if you want to pass on data with the function call, you must pass a function that calls the other funtion */}
                <button className="btn" onClick={() => dispatch({ type: EDIT_TASK, payload: data.id })}>&#10004;</button>
            </div>
        </div>
    )
};

export default TodoItem;