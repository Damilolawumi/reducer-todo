import React from 'react';

function Todo (props) {
    const toggleTodo = () => {
        props.dispatch({
            type:"TOGGLE_TODO",
            todo: props.todo
        })
        
        // props.toggleTodo(props.todo.id)
    }
    const todoStyle = {};

    if(props.todo.completed) {
        todoStyle.textDecoration = "line-through"
    }

    return (
        <div onClick={toggleTodo} style={todoStyle}>
            {props.todo.item}
            {props.todo.completed}
            {props.todo.id}
        </div>
    )
}

export default Todo;