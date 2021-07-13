import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{description}, handleInputChange, reset] = useForm({ // Desestructuramos del hook useform y sacamos y renombramos lo que necesitamos
        description: ''                                         // Este description es el valor(values) del input del formulario que cambia conforme 
    });                                                         // escribimos en el campo (onChange).

    const handleSubmit = (e) => {           // Cuando le demos al submit de este componente...

        e.preventDefault();
        
        if(description.trim().length <= 1){
            return;
        }

        const newTodo = {                   // Crearemos un objeto con la nueva tarea->description es el valor introducido 
            id: new Date().getTime(),       // en el input retornado por useForm
            desc: description,               
            done: false
        };

        handleAddTodo(newTodo);             // handleAddTodo contiene el dispatch y este la action 
                                            // Y este dispatch conecta la action con el todoReducer que actualizara el state/todos        
        reset();
    }

    return (
        <>
          <h4>Agregar TODO</h4>
          <hr />

            <form onSubmit={ handleSubmit }>
                            
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender..."
                    autoComplete="off"
                    value={ description }
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block">Agregar</button>

            </form>  
        </>
    )
}
