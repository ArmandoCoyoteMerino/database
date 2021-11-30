import { Route, Switch } from 'react-router-dom';

//pages

import ProductForm from './pages/Products/ProductForm';
import inicio from './pages/Inicio/inicio'
import index from './components/layout/index'
import login from './pages/Login/login'
import Products from './pages/Products'



const Routes = () => (
    <Switch>

        <Route exact path="/inicio" component={inicio}/>
 
        <Route exact path="/productos" component={Products} />
        <Route exact path="/productos/agregar" component={ProductForm} />
        <Route exact path="/productos/editar" component={ProductForm} />

        <Route exact path="/login" component={login} />
    
    </Switch>
);

export default Routes;