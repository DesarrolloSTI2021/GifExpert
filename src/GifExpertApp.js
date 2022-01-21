import React,{useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifColections } from "./components/GifColections";
//import PropTypes from "prop-types";
import 'animate.css';

const GifExpertApp=()=>{

   // const categorias=['Sipderman','Iron Man','Capitan América'];
    const [categorias, setCategorias] = useState(['Hulk']);
    return(
        <>
        <h2>GitExpertApp</h2>
        <hr/>
        <AddCategory setCategorias={setCategorias} />
        <ol>
            {
                categorias.map(categoria=>(
                    <GifColections
                    key={categoria}
                    categoria={categoria} />
                ))
                  
            }
        </ol>
        </>
    );

};

export default GifExpertApp;
