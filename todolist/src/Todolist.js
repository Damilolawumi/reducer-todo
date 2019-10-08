import React, {useReducer} from 'react';
import Todo from './Todo'


function Todolist () {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            {initialState.map(todo => {
                return <Todo todo={todo}/>
            })}        
        </div>
    )
}

export default Todolist