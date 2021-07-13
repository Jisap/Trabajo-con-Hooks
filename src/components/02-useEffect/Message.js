import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setcoords] = useState({x:0, y:0})                    //Hook para las coordenadas
    const { x, y } = coords                                             //Extraemos x e y de coords

    useEffect(() => {
                
        const mouseMove = (e) => {                                      //Función para captura de coordenadas
            const coords = {x: e.x, y:e.y}                              //Usamos variables de scope
            setcoords(coords);
            
        }

        window.addEventListener('mousemove', mouseMove);                //Efecto desencadenará mouseMove

        return () => {

            window.removeEventListener('mousemove', mouseMove);         //Fase de limpieza-->Limpieza memoria

        }
    }, [])                                                              //El efecto se mostrará cuando se carga por primera vez

    return (
        <div>
            <h3>Eres genial</h3>
            <p>
                x:{x} y:{y}
            </p>
        </div>
    )
}
