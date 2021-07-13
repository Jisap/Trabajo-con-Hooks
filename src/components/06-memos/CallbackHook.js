import React, { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);       // Estado para un counter

    const increment = useCallback((num) => { setCounter (c => c + num) },[setCounter])  // useCallback devuelve una versión memorizada de una función 
                                                                                        // que podrá ser usada como prop en otros componentes siempre
                                                                                        // que setCounter no haya cambiado. Esto evita que cada vez 
                                                                                        // que damos al boton se renderize de nuevo el componente.
    //const useEffect(()=>{
    //    // ???
    //},[increment])

    return (                                          // Enviamos un useCallback que incrementa el counter al componente ShowIncrement
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={increment}/>  
        </div>
    )
}
