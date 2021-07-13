import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"; // Paquete instalado para que funcione el mount
import { demoTodos } from '../../../fixtures/demoTodos'
import { TodoApp } from '../../../../components/08-useReducer/TodoApp';
import { act } from '@testing-library/react';

configure({adapter: new Adapter()}); // Configuración para el mount

describe('Pruebas en <TodoApp />', () => {

    const wrapper = shallow(<TodoApp />);
    Storage.prototype.setItem = jest.fn(()=>{}); // Simulamos el localStorage
    
    test('Debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de agregar un TODO', () => {
                                                                        // Creamos un clon de la app cuando se ha montado completamente en 'enzyme'
        const wrapper = mount(<TodoApp />);           

        act( () => {                                                     // act() asegura que todas las actualizaciones relacionadas con las
                                                                         // unidades de interacción con la interfaz de usuario hayan sido procesadas
                                                                         // y aplicadas al DOM antes de que hagas cualquier afirmación.

            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]); // Buscamos en el clon el componente 'TodoAdd' y dentro de el la función handleAddTodo
                                                                         // enviandole el 1er elemento de demoTodos   
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        })

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');     // Esperamos encontrar un h1 que contenga 'TodoApp (2)'
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);            // Esperariamos que el localStorage haya sido llamado 2 veces.   
    });
    
    test('Debe de eliminar un todo', () => {
        
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);       // Dentro de TodoAdd buscamos la func handleAddTodo y añadimos una tarea
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (1)');      // Deberíamos encontrar un h1 que tuviera TodoApp (1) 

        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);    // Buscamos dentro de TodoList la func handleDelete y le mandamos el id
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');      // Esperamos que el h1 imprimiera TodoApp (0) 
    })
    

});
