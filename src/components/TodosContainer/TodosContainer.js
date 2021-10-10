import { useState, useContext } from 'react';

import TodoItem from '../TodoItem/TodoItem';

import todoContext from '../../store/context';
import { ADD_TODO } from '../../store/actions';

// Add a submit listener that...
// Add the new todo text to our App State

const TodosContainer = () => {

  // Get the values we need from the Context with useContext()
  const { todoTasks, dispatch } = useContext(todoContext);

  // Control the input to always have the input value in state (onChange, value)

  const [ todoText, setNewTodoText ] = useState('');

  const handleChange = evt => setNewTodoText(evt.target.value);

  const handleSubmit = evt => {
    evt.preventDefault();
    // Dispatch the new todo to the store
    dispatch({ type: ADD_TODO, payload: todoText });
    setNewTodoText('');
  };

  return (
    <div className="todos-container">
      <form className="todo-form" onSubmit={handleSubmit} >
        <label className="input-item">
          <input type="text" name="todo" onChange={handleChange} value={todoText} />
        </label>
        <input className="btn" type="submit" value="ADD" />
      </form>
      <div className="todos">
        <h3>TO DO</h3>
        {/* Take the items array, and map Todo items based on it, passing the individual item data down to the component */}
        {todoTasks.map((item, index) => <TodoItem key={index} data={item} />)}
      </div>
    </div>
  )
};

export default TodosContainer;