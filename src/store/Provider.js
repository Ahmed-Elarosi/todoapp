import { useReducer, useEffect } from 'react'

// We can/must put our state logic into the Provider component because the state and the handlers must be passed into the Provider as value

import { RESTORE_TASKS } from './actions';
import todoContext from './context';
import todoReducer from './reducer';

const TodoProvider = ({ children }) => {
;
    const [ tasks, dispatch ] = useReducer(todoReducer, []);

    // Separate our state into two arrays, one done, one to do
    const todoTasks = tasks.filter(task => !task.done);
    const doneTasks = tasks.filter(task => task.done);

  
    // Add an effect that gets the stored tasks state from localStorage and sets it as the state when our application mounts
    useEffect(() => {
        const storedData = localStorage.getItem('todos');
        if (storedData) dispatch({ type: RESTORE_TASKS, payload: JSON.parse(storedData) });
    }, []);
  
    // Add an effect that saves to localStorage whenever we have a new tasks state (an item has been added or changed);
    // This avoids the issue of still having old state right after updating it
    // If you do both retrieval and storage using an effect, make sure to run the store effect after the retrieval effect
    
    useEffect(() => localStorage.setItem('todos', JSON.stringify(tasks)), [tasks]);

    // Return the Context.Provider component
    return (
        <todoContext.Provider value={{ todoTasks, doneTasks, dispatch }} >
            {children}
        </todoContext.Provider>
    );

};

export default TodoProvider;