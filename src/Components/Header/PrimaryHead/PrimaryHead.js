import React from 'react';
import { Badge, FormControl, InputAdornment, InputLabel, OutlinedInput, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Search from '../../../Assets/search.png';
import User from '../../../Assets/user.png';
import ShippingFast from '../../../Assets/shipping-fast.png';
import ShoppingCart from '../../../Assets/shopping_cart_empty.png';
import './PrimaryHead.css';

const PrimaryHead = () => {

  return (
      <Toolbar style={{padding:"10px 10rem", height:"121px"}}>
          <div className='menu-btn'>
              <MenuIcon/>
          </div>
          <img src='logo' alt='logo' className='logo'/>
          <FormControl>
            <InputLabel htmlFor='search'>Search by product, category or brand</InputLabel>
            <OutlinedInput
                id="search"
                label="Search by product, category or brand" 
                size='small'
                style={{padding:"0", width:"30rem", marginRight:"30px"}} 
                endAdornment= { 
                    <InputAdornment position='end'>
                        <div className='search-container'>
                            <img src={Search} alt="search" className='search'/>
                        </div>
                    </InputAdornment>
                }
            />
          </FormControl>
          <div className='web-icon-container'>
            <div className='web-icon-btn'>
                <img src={User} alt="user"/>
                <Typography>Hello, Jonathan</Typography>
            </div>
            <div className='web-icon-btn'>
                <img src={ShippingFast} alt="shipping-fast"/>
                <Typography>Quick Order</Typography>
            </div>
            <div className='web-icon-btn'>
                <Badge badgeContent={3}>
                    <FavoriteBorderIcon/>
                </Badge>
                <Typography>Favorites</Typography>
            </div>
          </div>
          <div className='web-icon-btn'>
              <img src={ShoppingCart} alt="shipping-fast"/>
              <Typography>Cart</Typography>
          </div>
      </Toolbar>
  )
}

export default PrimaryHead