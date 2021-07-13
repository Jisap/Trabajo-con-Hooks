import React from 'react';
import { useCounter2 } from '../../hooks/useCounter2';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {

    const { counter,increment } = useCounter2(1);

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);// De state estraemos loading y data
    const {author, quote} = data != null && data[0]; //Si existe la data -> author y quote = data[0]
    
    return (
        <div>
            <h1>Breaking bad Quotes</h1>
            <hr />

            {loading //Si loading es true
                ? 
                    (

                        <div className="alert alert-info text-center">
                                Loading...
                        </div>
                    
                   )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0"> {quote} </p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    
                    )
                    
                    
            }

            <button className="btn btn-primary"
                    onClick={ increment }
            >
                Siguiente quote
            </button>

        </div>
    )
}
