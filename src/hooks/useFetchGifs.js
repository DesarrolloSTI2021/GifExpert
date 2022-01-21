import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';



export const useFetchGifs = (categoria) => {


    const [imagenes, setImagenes] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(categoria).then(
            imgs =>{
                    setImagenes({
                        data:imgs,
                        loading:false
                    })      
            })
    }, [categoria])


    return imagenes;
};
