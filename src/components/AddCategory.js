import React, { useState } from 'react';
import PropTypes from "prop-types";

export const AddCategory = ({setCategorias}) => {

    const [inputCategoria, setInputCategoria] = useState('');
     
    const handleInputChange=(e)=>{
        setInputCategoria(e.target.value);
    };

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(inputCategoria.trim().length>2){
            setCategorias(cats=>[inputCategoria,...cats]);
            setInputCategoria('');
        }

    }
    return (
        <form onSubmit={handleSubmit}>
           <input
            type="text"
            value={inputCategoria}
            onChange={handleInputChange}
           />
        </form>
    )


};


AddCategory.propTypes={

    setCategorias:PropTypes.func.isRequired
}