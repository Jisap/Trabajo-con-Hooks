import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const [state, setState] = useState({  //Definimos un useState para el objeto state
        counter1:10,
        counter2:20,
        counter3:30,
        counter4:40
    });

    const {counter1,counter2} = state //Extraemos de state lo que nos hace falta


    return (
        <>
            <h1>Counter1 { counter1 }</h1>
            <h1>Counter2 { counter2 }</h1>
            <hr />

            <button className="btn btn-primary"                       //onClick actualizaremos el state pero solo incrementaremos counter1
                    onClick={ ()=> setState( { ...state, counter1: counter1 + 1 } ) }>
                +1
            </button>

        </>
    )
}
