import React, {useEffect, useState} from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setformState] = useState({  //Hook useState
        name: '',
        email: ''
    });

    const {name,email}=formState    //Desestructuramos hook

    useEffect(()=>{                         //Cuando algo del useState cambie desencadenará un efecto.
        console.log('Hey');                 //En este caso un console.log por el simple hecho de cargar el componente
    },[]);

    useEffect(()=>{
        console.log('formState cambio');    //Se desencadena un efecto cuando cambien formState
    },[formState]);                         //Atento a los cambios en formSate

    useEffect(()=>{
        console.log('Email cambio')         //Se desencadenará un efecto cuando el emil cambie. 
    },[email]);
    
                                //e
    const handleInputChange = ({target}) => {               // Recibe el evento del cambio "e"

        //e --> Desestructuramos y sacamos target
        //console.log(target.name);
        //console.log(target.value);

        setformState({                                      //Establece el nuevo valor del formState
            ...formState, [target.name]: target.value       //Este nuevo valor se compondrá de todos los elementos que ya tenia 
        });                                                 //y este nuevo valor del input        
        
    }

    return (
        <>
            <h1>Use Effect</h1>
            <hr/> 
            
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                 />   
            </div>
    
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                 />   
            </div>

            { (name==='123') && <Message /> }

        </>
    )//Cuando el input cambie disparará el evento e sobre la función handleInputChange
}
