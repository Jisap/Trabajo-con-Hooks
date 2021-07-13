import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter2 } from '../../hooks/useCounter2';

describe('Pruebas en useCounter', () => {
    
    test('debe de retornar valores por defecto ', () => {
        
        const { result } = renderHook( () => useCounter2() );       // renderHook es una función wrapper-->clon en este caso del hook userCounter2
        console.log(result.current);                                // Lo que nos devuelve
        expect( result.current.counter ).toBe(10);                  // Esperamos que el resultado por defecto del counter sea 10
        expect( typeof result.current.increment ).toBe('function'); // Esperamos que el tipo de resultado de increment sea una función
        expect( typeof result.current.decrement ).toBe('function'); // Igual con el resto de funciones.
        expect( typeof result.current.reset ).toBe('function');
    })
    
    test('debe de tener el counter en 100 ', () => {
        
        const { result } = renderHook( () => useCounter2(100) );       
                                        
        expect( result.current.counter ).toBe(100);                  
    })

    test('debe de incrementar el counter en 1 ', () => {
        
        const { result } = renderHook( () => useCounter2(100) );    // Renderizamos un clon del hook useCounter2
        const { increment } = result.current;                       // y de este hook clonado extraemos la función a evaluar

        act( () => {                                                // act() asegura que todas las actualizaciones relacionadas con las
                                                                    // unidades de interacción con la interfaz de usuario hayan sido procesadas
            increment();                                            // y aplicadas al DOM antes de que hagas cualquier afirmación.
        });

        const { counter } = result.current;                         // Extraemos también del hook clonado el estado del counter                   
        expect( counter ).toBe(101)                                 // Esperamos que ese estado despues de aplicar el counter sea 101
    })
    
    test('debe de decrementar el counter en 1 ', () => {
        
        const { result } = renderHook( () => useCounter2(100) );    
        const { decrement } = result.current;                       

        act( () => {                                                
                                                                    
            decrement();                                            
        });

        const { counter } = result.current;                                           
        expect( counter ).toBe(99)                                  
    })

    test('debe de establecer el valor en 100', () => {
        
        const { result } = renderHook( () => useCounter2(100) );    
        const { decrement, reset } = result.current;                       

        act( () => {                                                
                                                                    
            decrement();
            reset()                                            
        });

        const { counter } = result.current;                                           
        expect( counter ).toBe(100)                                 
    })
});
