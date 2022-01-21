import React from 'react';

export const GitElement = ({ id, title,url }) => {
   // console.log(url);
    return <div className='cardGif animate__animated animate__rubberBand'>
    <img src={url} alt={title}/>
    <p>{title}</p>
    </div>;
};
