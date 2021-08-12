// hace el map y por cada pasada retorna un <Item />

import React from 'react'
import './ItemLisContainer.css';
import Item from './Item'


export const ItemList = ({characters}) => {

    return(
        <div>
            {
                characters.map( item => (
                    <div key={item.id}>
                        <img src={item.imagen}/>
                        <div>
                            <h3>{item.titel}</h3>
                            <p>{item.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )

}


export default ItemList;