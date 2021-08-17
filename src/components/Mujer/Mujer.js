import { Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Mujer = () => {
    return (
        
        <Dropdown.Item eventKey="1">
            <Link to="/ProductosMujer">Mujer</Link>
        </Dropdown.Item>
                        
    );
}

