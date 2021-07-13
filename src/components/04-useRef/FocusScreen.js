import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();                          //Las referencias proporcionan una forma de acceder a los nodos del DOM 
                                                        //o a elementos React creados en el método de renderizado.
    const handleClick = () => {
        //document.querySelector('input').select();
        inputRef.current.select();                      // Cuando se llama a handleClick hacemos focus/select donde este inputRef
        console.log(inputRef);
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input
                    ref={inputRef}
                    className="form-control"
                    placeholder="Su nombre"
            />
            <button 
                    className="btn btn-outline-primary mt-5"
                    onClick={handleClick}
            >        
                Focus
            </button>
        </div>
    )
}
