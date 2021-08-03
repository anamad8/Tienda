import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import './ItemLisContainer.css';
import imgMujer from '../img/mujer.jpg'
import imgHombre from '../img/hombre.jpg'

function ItemLisContainer() {
    return (
        <Container>
            <Row xs={1} md={2} className="d-flex flex-row bd-higlight mb-3 marco">
                <Col className="container-fluid p-2 bd-higlight "><ima src={ imgMujer } /> </Col>
                <Col className="container-fluid p-2 bd-higlight "><ima src={ imgHombre } /> </Col>
            </Row>
        </Container>
    );
}

    export default ItemLisContainer;