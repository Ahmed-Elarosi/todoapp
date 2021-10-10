import { useContext } from 'react';

import DoneItem from '../DoneItem/DoneItem';

import todoContext from '../../store/context';

const DonesContainer = () =>  {

  const { doneTasks } = useContext(todoContext);

  return (
    <div className="todones-container">
      <h3>DONE</h3>
      {doneTasks.map((item, index) => <DoneItem key={index} data={item} />)}
    </div>
  )
  };

export default DonesContainer;