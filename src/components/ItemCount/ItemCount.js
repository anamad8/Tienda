import React, { useContext} from 'react';
import './ImtemCount.css'
import {DataContext} from '../itemList/itemList'
import Item from '../itemList/Item'


function ItemCount() {

    const value = useContext(DataContext)
    const [productos] = value.productos
    console.log(productos)
    return (
        <div className="productos">
            {
                productos.map((producto) => (
                    <Item 
                    key={producto.id} 
                    id={producto.id}
                    price={producto.price} 
                    titel={producto.titel}                    
                    image={producto.image}
                    />
                ))
            }
        </div>
        
    );
}

    export default ItemCount;