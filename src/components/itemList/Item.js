import React from 'react';
import {Button} from 'react-bootstrap';


export const Item = ({
    id,
    titel,
    price,
    image,
}) => {
    return (

        <div className="producto">
                <img src={image} alt={titel}/>
            <div className="nomProducto" >
                <h3>{titel}</h3>
                <p>{price}</p>
            </div> 
                <Button variant="dark">Agregar al carrito</Button>
        </div> 
        
    )
}