import { Route, Switch } from 'react-router-dom';

//pages
import Customers from './pages/Customers';
import CustomerForm from './pages/Customers/CustomerForm';
import Products from './pages/Products';
import ProductForm from './pages/Products/ProductForm';
import login from './pages/Login/login';

import inicio from './pages/Inicio/inicio'

const Routes = () => (
    <Switch>
        <Route exact path="/inicio" component={login} />
        <Route exact path="/productos" component={Products} />
        <Route exact path="/login" component={login} />
        <Route exact path="/productos" component={Products} />
        <Route exact path="/productos/agregar" component={ProductForm} />
        <Route exact path="/productos/editar" component={ProductForm} />
    </Switch>
);

export default Routes;