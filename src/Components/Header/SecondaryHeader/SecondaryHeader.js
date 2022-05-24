import { Grid } from '@mui/material';
import React from 'react';
import './SecondaryHeader.css';
import checkCircle from '../../../Assets/check_circle.png';

const SecondaryHeader = () => {

  return (
    <Grid container className='gridContainer'>
        <Grid item xs={4} sx={{textAlign: "right"}}>
            <img src={checkCircle} alt="check_circle"/>
            &nbsp;
            Free shipping for orders above $150
        </Grid>
        <Grid item xs={4} sx={{textAlign: "center"}}>
            <img src={checkCircle} alt="check_circle"/>
            &nbsp;
            2 day Delivery
        </Grid>
        <Grid item xs={4}  sx={{textAlign: "left"}}>
            <img src={checkCircle} alt="check_circle"/>
            &nbsp;
            Exciting Offers
        </Grid>
    </Grid>
  )
}

export default SecondaryHeader