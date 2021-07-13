import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    // const user = {
    //     id:1234,
    //     name:'JMM',
    //     email:'JMM@gmail.com'
    // }

    const [user, setUser] = useState({});

    return (

        //las props que pongamos en UserContext.Provider serán compartidas en todos sus componentes hijos

        <UserContext.Provider value={{user, setUser}}>

            <AppRouter />

        </UserContext.Provider>
    
    )
}
