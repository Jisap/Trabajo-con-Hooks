import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter2 } from '../../hooks/useCounter2';
import { useFetch } from '../../hooks/useFetch';
import '../05-useLayoutEffect/layout.css';

export const Layout = () => {

    const { counter,increment } = useCounter2(1);

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);// De state estraemos loading y data
    const {quote} = data != null && data[0]; //Si existe la data -> author y quote = data[0]
    
    const pTag = useRef()
    const [boxSize, setboxSize] = useState({});

    useLayoutEffect(() => {
        
        setboxSize(pTag.current.getBoundingClientRect()) //Obtenemos las mediciones de la caja que contiene la cita
                                                         //y establecemos el state de boxSize

    }, [quote]) // Si el quote cambia , la caja que lo contiene también

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className="blockquote text-right">
                    <p 
                        ref={pTag}
                        className="mb-o"
                    > 
                        {quote}

                    </p>
            </blockquote>
                    
            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button className="btn btn-primary"
                    onClick={ increment }
            >
                Siguiente quote
            </button>

        </div>
    )
}
