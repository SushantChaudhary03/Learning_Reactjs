import React, { useReducer, useState } from 'react'
import DisplayTodo from './DisplayTodo';

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

function reducer(todo, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todo, newTodo(action.payload.name)]

        case ACTIONS.TOGGLE_TODO:
            return todo.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo;
            })
        case ACTIONS.DELETE_TODO:
            return todo.filter(todo => todo.id !== action.payload.id)

        default:
            return todo;
    }

}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
}

const Todo = () => {
    const [todo, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');
    const style = {
        input: {
            width: '15rem',
            height: '1.5rem'
        },
        todo: {
            border: '1px solid black',
            height: '50vh',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '3rem',
            alignItems: 'center'
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
        setName('')
    }
    console.log(todo)
    return (
        <>
            <div style={style.todo}>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input style={style.input} type="text" placeholder='type here' value={name} onChange={e => setName(e.target.value)} />
                    </form>
                </div>
                <div>
                    {todo.map(todo => {
                        return <DisplayTodo key={todo.id} todo={todo} dispatch={dispatch} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Todo;