import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { LoginScreen } from '../../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../../components/09-useContext/UserContext';

configure({adapter: new Adapter()});

describe('Pruebas en <LoginScreen />', () => {
    
    const setUser = jest.fn({
                                id:123,
                                name:"JMM",
                                email:"JMM@gmail.com"
                });

    const wrapper = mount(
        <UserContext.Provider value={{setUser}}>
            <LoginScreen />
        </UserContext.Provider>
    );


    test('Debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe de ejecutar el setUser con el argumento esperado ', () => {
        
        wrapper.find('button').prop('onClick')();           // Buscamos el boton y simulamos un click en el.

        expect(setUser).toHaveBeenCalledWith({              // Esperamos que setUser halla sido llamado con esos argumentos
                                id:123,
                                name:"JMM",
                                email:"JMM@gmail.com"})
    });
    
});
