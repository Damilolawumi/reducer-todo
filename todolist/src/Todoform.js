import React, { useState, useReducer } from 'react';


function Todoform(props) {


    const [todo, setTodo] = useState('');

    const onInputChange = (event) => {
        setTodo(event.target.value)
    }



    return (
        <div>
            {/* <form> */}
                <input
                    type="text"
                    value={todo}
                    onChange={onInputChange}
                    placeholder="add todo here"
                />

                <button onClick={() => {
                    props.dispatch({
                        type: "ADD_TODO",
                        todo: todo
                    })
                }}>Add Todo</button>
                <button onClick={() => {
                    props.dispatch({
                        type: "CLEAR_TODO",
                        todo: todo
                    })
                }}>Clear Todo</button>
            {/* </form> */}
        </div>
    )
}

export default Todoform;