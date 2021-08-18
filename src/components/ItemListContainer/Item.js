// tengo que hacer el card

import React from 'react'
import {Card, Button} from 'react-bootstrap';
import './ItemLisContainer.css';


export const Item = ({character}) => {

    return (
        <div className="productos">
            <Card className="producto"> 
                    <Card.Img variant="top" style={{ width: "250px" }} src={character.imagen} />
                    <Card.Body>
                        <Card.Title className="titulo"> {character.titel}</Card.Title>
                        <Card.Text>
                            <p className="precio">$ {character.price} </p>
                        </Card.Text>
                        <Button variant="primary">Agregar al Carrito</Button>
                    </Card.Body>
                </Card>
        </div>
    )  
}  

export default Item;
