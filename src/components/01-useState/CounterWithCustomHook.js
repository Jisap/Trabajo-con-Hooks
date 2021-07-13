import React from 'react';
import { useCounter } from '../../hooks/useCounter';//Importamos el hook
import './counter.css';


export const CounterWithCustomHook = () => {

    const {state, increment, decrement,reset } = useCounter(); //Del Hook sacamos lo que nos hace falta

    return (
        <>
            <h1>Counter with Hook: { state }</h1>
            <hr />
            <button onClick={ ()=> increment(2) } className="btn">+1</button>
            <button onClick={ ()=> reset(10) }>Reset</button>
            <button onClick={ ()=> decrement(2) } className="btn">-1</button>   
        </>
    )
}
 