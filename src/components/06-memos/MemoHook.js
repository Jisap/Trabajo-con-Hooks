import React, { useMemo, useState } from 'react'
import { useCounter2 } from '../../hooks/useCounter2'
import { procesoPesado } from '../../helpers/procesoPesado'
import '../02-useEffect/effects.css'


export const MemoHook = () => {

    const {counter, increment} = useCounter2(5000)  //Valor inicial del counter 5000
    const [show, setShow] = useState(true)

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]); //Cada vez que cambie counter se ejecutará la función alojada en useMemo
                                                                                //y no se ejecutará cuando se pulse el boton de show/hide.  
    return (                                                                    //El rdo de esa función se almacena y solo se cambia cuando cambie la dependencia
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small> </h3>
            <hr />

            <p> { memoProcesoPesado }</p>   

            <button
                className="btn btn-primary"
                onClick={increment}>
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={() => setShow(!show)}
            >
                show/Hide {JSON.stringify(show)}
            </button>

        </div>
    )
}
