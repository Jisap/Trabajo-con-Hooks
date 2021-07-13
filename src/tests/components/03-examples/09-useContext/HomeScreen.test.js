import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { HomeScreen } from '../../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../../components/09-useContext/UserContext';

configure({adapter: new Adapter()});

describe('Pruebas en <HomeScreen />', () => {
    
    const user = {
        name: 'Fernando',
        email: 'fernando@gmail.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('Debe de mostrar el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })
    
});
