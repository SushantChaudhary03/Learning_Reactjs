import React, {useReducer} from 'react'


const ACTION = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

function reducer(state, action){
    switch (action.type) {
        case ACTION.INCREMENT:
            return {count: state.count+1};
            
        case ACTION.DECREMENT:
            if(state.count>0)
            return {count: state.count-1};
    
        default:
            return state;
            
    }
}
const UseReducer = ()=>{

    function increment(){
        dispatch({type: ACTION.INCREMENT})
    }

    function decrement(){
        dispatch({type: ACTION.DECREMENT})
    }

    const [state, dispatch] = useReducer(reducer, {count: 0})
    return(
        <div>
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default UseReducer