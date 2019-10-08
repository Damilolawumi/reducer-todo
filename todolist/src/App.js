import React, {useReducer} from 'react';
import './App.css';
import Todoform from './Todoform';
import Todolist from './Todolist';
import { initialState, todoReducer } from './reducers/todosReducer'

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div className="App">
      <Todolist state={state} dispatch={dispatch}/>
      <Todoform dispatch={dispatch}/>
    </div>
  );
}

export default App;
