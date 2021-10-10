import { Switch, Route } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import TodosContainer from '../TodosContainer/TodosContainer';
import DonesContainer from '../DonesContainer/DonesContainer';
import Help from '../../views/Help/Help';
import NotFound from '../../views/NotFound/NotFound';
import TodoProvider from '../../store/Provider';

import './App.scss';

// Steps to establish Context
// 1) create the Context
// 2) create the Context Provider to put data in
// 3) use the context where you need it

const App = () => (
  <div className="App">
    <TodoProvider>
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/">
            <TodosContainer />
            <DonesContainer />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </TodoProvider>
    </div>
);

export default App;
