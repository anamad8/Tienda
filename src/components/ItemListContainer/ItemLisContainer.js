import React from 'react';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import './ItemLisContainer.css';
import imgMujer from '../img/mujer.jpg'
import imgHombre from '../img/hombre.jpg'
import Api from '../../api'



const promesa = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve(Api); 
    }, 1000);
});

    promesa.then(console.log);

    const productos = onSeleccionarProductos => {
        return productos.map(productos =>{
            const{id, titel, imagen } = productos;
            return(
                <Api
                    key={id}
                    titel={titel}
                    imagen={imagen}
                />
            )
        })
    }

function ItemLisContainer() {
    return (
        <Container>
            <Row xs={1} md={2} className="d-flex flex-row bd-higlight mb-3 marco">
                <Col className="container-fluid p-2 bd-higlight mujerHombre"><a href="#"><img img className="mujerHombre" src={ imgMujer } /></a> </Col>
                <Col className="container-fluid p-2 bd-higlight mujerHombre"><a href="#"><img className="mujerHombre" src={ imgHombre } /></a> </Col>
            </Row>
            <div className="productos">
                <Card className="producto">
                    <Card.Img variant="top" className="productoImg" src={Api.imagen} />
                    <Card.Body>
                        <Card.Title className="titulo">{Api.titel}</Card.Title>
                        <Card.Text>
                            <p className="precio">${Api.precio}</p>
                        </Card.Text>
                        <Button variant="primary">Agregar al Carrito</Button>
                    </Card.Body>
                </Card>
                
            </div>
        </Container>
    );
}

    export default ItemLisContainer;