// hace el map y por cada pasada retorna un <Item />

import React from 'react'
import './ItemLisContainer.css';
import Item from './Item'


export const ItemList = ({characters}) => { // --> characters = [{}{}{}{}]

  return(
    <div>
      {
        characters.map(character =>
          <Item character={character}/>
          )
      }
    </div>
    )

}


export default ItemList;