import React, { useEffect, useReducer } from 'react'
import { TodoReducer } from './TodoReducer';
import './styles.css'
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
// }];

const init = () => {                                          // Esta función equivale a un initialState->localStorage
    
    return JSON.parse(localStorage.getItem('todos')) || [];   // Recuperamos el string del localStorage y convertirmos a json si existe    
                                                              // sino devolvemos un [] vacio
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(TodoReducer,[],init); // UseReducer basado en TodoReducer devuelve también un state
        //state                         setState    estado inicial 
    console.log(todos);
     
    useEffect(()=>{

        localStorage.setItem('todos' ,JSON.stringify(todos)) // Si los todos cambian se desencadenará el efecto -> LocalStorage

    },[todos]); 

    const handleDelete = (todoId) => {      // Esta función recibe el id de la tarea a borrar del map del html
        
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleToggle = (todoId) => {

        dispatch({
            type:'toggle',
            payload: todoId
        })

    }

    const handleAddTodo = (newTodo) => {
 
        dispatch({                    
            type: 'add',
            payload: newTodo
        });                   
        


    }

    //const handleSubmit = (e) => {           // Cuando pulsemos el boton de agregar
       
        
        // if(description.trim().length <= 1){
        //     return;
        // }

        // const newTodo = {                   // Crearemos un objeto con la nueva tarea->description es el valor introducido 
        //     id: new Date().getTime(),       // en el input retornado por useForm
        //     desc: description,               
        //     done: false
        // }

        // const action = {                    // Y despues otro objeto llamado action con el label 'add' y la nueva tarea
        //     type: 'add',
        //     payload: newTodo
        // }
    
        //dispatch(action);                   // dispatch conecta la action con el todoReducer que actualizara el state/todos
        //reset();
    //}

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className="row">

                <div className="col-7">

                    <TodoList 
                        todos={ todos }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />

                </div>

                <div className="col-5">

                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />

                </div>


            </div>


        </div>
    )
}
