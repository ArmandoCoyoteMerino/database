import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import {Link} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';


export const menuItems = (
  <div>
    <ListItem to="/inicio" component={Link}>
      <ListItemIcon>
        <HomeIcon/>
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>
    <ListItem to="/productos" component={Link}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Productos" />
    </ListItem>
    <ListItem to="/login" component={Link}>
      <ListItemIcon>
        < PersonIcon  />
      </ListItemIcon>
      <ListItemText primary="Login" />
    </ListItem>
  </div>
);
