// tengo que hacer el card

import React from 'react'
import {Card, Button} from 'react-bootstrap';
import './ItemLisContainer.css';
import { ItemList } from './ItemList';


export const Item = ({characters}) => {

    return (
        <div className="productos">
            <Card className="producto">
                    <Card.Img variant="top" className="productoImg"  />
                    <Card.Body>
                        <Card.Title className="titulo"><ItemList characters={characters}/></Card.Title>
                        <Card.Text>
                            <p className="precio">$ <ItemList characters={characters}/> </p>
                        </Card.Text>
                        <Button variant="primary">Agregar al Carrito</Button>
                    </Card.Body>
                </Card>
                    
        </div>
    )  
}



export default Item;
