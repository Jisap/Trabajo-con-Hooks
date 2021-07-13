import React, {memo} from 'react'

export const Small = memo(({value}) => {        //memo va a memorizar la forma renderizada de este componente small
    console.log('Me volvi a llamar');
    return (                                    //y solo se va a disparar si las props cambian
        <small>{value}</small>
    )
}
)