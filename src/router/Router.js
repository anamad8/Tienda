import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import ItemList from '../components/ItemListContainer/ItemList';
import NotFound from '../components/ItemListContainer/NotFound';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/Productos" component={ItemList}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
