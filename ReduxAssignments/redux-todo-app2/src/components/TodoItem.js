

import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo, toggleTodoCompletion } from '../redux/actions/todoActions';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeTodo(todo.id));
    };

    const handleUpdate = () => {
        const updatedText = prompt('Update todo:', todo.text);
        if (updatedText) {
            dispatch(updateTodo(todo.id, { text: updatedText }));
        }
    };

    const handleToggleCompletion = () => {
        dispatch(toggleTodoCompletion(todo.id));
    };

    return (
        <li>
            <span style={{ textDecoration: todo.status === 'completed' ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button onClick={handleToggleCompletion}>
                {todo.status === 'completed' ? 'Not Complete' : 'Complete'}
            </button>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleRemove}>Remove</button>
        </li>
    );
};

export default TodoItem;
