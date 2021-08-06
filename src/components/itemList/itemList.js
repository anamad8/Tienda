import React, { useState, useEffect, createContext } from "react";
import Datos from '../../api'
export const  DataProvider = createContext();

export const DataPovider = (props) => {
    const [productos, setProductos] = useState([])

    useEffect(() =>{
        const producto = Datos.items
        if (productos) {
            setProductos(producto)
        }else{
            setProductos([])
        }
    },[])

    const value = {
        productos : [productos]
    }
    <DataContext.Provider value = {value}>
        {props.children}
    </DataContext.Provider>
}