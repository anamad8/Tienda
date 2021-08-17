
import React from 'react'
import {Card, Button} from 'react-bootstrap';
import './ItemLisContainer.css';


export const ItemDetailContainer = ({character}) => {

    return (
        <div className="productos">
            <Card className="producto"> 
                    <Card.Img variant="top" style={{ width: "3rem" }} src={character.imagen} />
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

export default ItemDetailContainer;