

import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from '../redux/selectors/todoSelectors';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useSelector(selectTodos);

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;
