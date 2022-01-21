import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GitElement } from './GitElement';

export const GifColections = ({ categoria }) => {

    const { data:imagenes, loading } = useFetchGifs(categoria);

    return (
        <>
            <h3 className='animate__animated animate__pulse'>{categoria}</h3>

            {loading && <p className='animate__animated animate__flash'>Cargando...</p>}

            {<div className='card-colections'>

                {
                    imagenes.map(img => {
                        return <GitElement
                            key={img.id}
                            // img={img}
                            {...img}
                        />
                    })
                }
            </div>
            }
        </>

    );
};

