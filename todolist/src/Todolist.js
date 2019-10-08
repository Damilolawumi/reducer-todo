import React, { useReducer } from 'react';
import Todo from './Todo'



function Todolist(props) {

   

    return (
        <div>
            {props.state.map(todo => {
                return <Todo
                    todo={todo}
                    dispatch={props.dispatch}
                // toggleTodo={toggleTodo}
                />
            })}
        </div>
    )
}

export default Todolist;