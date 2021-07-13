import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../../fixtures/demoTodos';



describe('Pruebas en <TodoListItem />', () => {

    const handleDelete = jest.fn();     // Simulamos las funciones
    const handleToggle = jest.fn();

    const wrapper = shallow(

        <TodoListItem 
            todo={ demoTodos[0] }
            index={ 1 }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />
    
    )
    
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    
    test('Debe de llamar a la función handelDelete', () => {
        
        wrapper.find('button').simulate('click');                           // Buscamos el boton
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);         // Esperamos que la función handleDelete sea llamada para la 
    });                                                                     // tarea de la posición cero y su correspondiente id
    
    test('Debe de llamar la función handleToggle', () => {
        
        wrapper.find('p').simulate('click');                           
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id); 
    });

    test('Debe de mostrar el texto correctamente', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`2. ${demoTodos[0].desc}`)
    });

    test('Debe de tener la clase complete si TODO.done = true', () => {
        
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(

            <TodoListItem 
                todo={ todo }  
            />
        );

        expect(wrapper.find('p').hasClass('complete')).toBe(true);

    });


});
