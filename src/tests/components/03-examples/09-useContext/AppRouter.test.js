import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { AppRouter } from '../../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../../components/09-useContext/UserContext';

configure({adapter: new Adapter()});

const user = {
    id:123,
    name:"JMM",
    email:"JMM@gmail.com"
}

describe('Pruebas en <AppRouter />', () => {
    
    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <AppRouter />
        </UserContext.Provider> )

    test(' Debe de  mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        
    })
    
})
