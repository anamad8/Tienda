import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import ItemList from '../components/ItemListContainer/ItemList';
import NotFound from '../components/ItemListContainer/NotFound';
import { Mujer } from '../components/Mujer/Mujer';




const Router = () => {
    return (
        <BrowserRouter>
            <Mujer/>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/Cart" component={ItemList}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
