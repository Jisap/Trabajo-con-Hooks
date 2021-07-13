import React from 'react'

export const ShowIncrement = React.memo(({increment}) => { // Componente que recibe como argumento el useCallback increment
                                                           // lo memorizamos para que no se vuelva a renderizar sino cambia 

    console.log('Me volvi a generar');

    return (    // Este boton envia al hook CallbackHook un argumento (5)->num
        <button
            className="btn btn-primary"
            onClick={ ()=> increment(5) }>
            Incrementar
        </button>
    )
})
