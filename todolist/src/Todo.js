import React from 'react';

function Todo (props) {

    return (
        <div>
            {props.todo.item}
            {props.todo.completed}
            {props.todo.id}
        </div>
    )
}

export default Todo;