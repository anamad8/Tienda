// hace el map y por cada pasada retorna un <Item />

import React from 'react'
import './ItemLisContainer.css';
import Item from './Item'


export const ItemList = ({characters}) => {

    return(
        <div>
            {characters.map(<Item charcater={characters}/>)}
        </div>
    )

        // return(
        //     <div >
        //         {characters.map((id, titel,price, imagen) => (
        //                 <li key={id}>
        //                     <img src={imagen}/>
        //                     {titel}
        //                     {price}
        //                 </li>
        //             ))}
        //     </div>
        // )

}


export default ItemList;