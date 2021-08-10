// tengo que hacer el card

import React from 'react'
import {Card, Button} from 'react-bootstrap';
import './ItemLisContainer.css';

export const Item = () => {

    const  Api = onSeleccionarProductos => {
            return Api.map(Api =>{
            
                const {id, titel, imagen } = Api;
                return(
                    key={id},
                    titel={titel}
                    imagen={imagen}
                
                )}
            )
    }

        return (
            <div className="productos">
                <Card className="producto" key={id}>
                        <Card.Img variant="top" className="productoImg" src={imagen} />
                        <Card.Body>
                            <Card.Title className="titulo"></Card.Title>
                            <Card.Text>
                                <p className="precio">$</p>
                            </Card.Text>
                            <Button variant="primary">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
                    
            </div>
        )  
}



export default Item;
