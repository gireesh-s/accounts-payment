import { Container } from '@mui/material'
import React from 'react';
import Right from '../Assets/right.png';
import MenuList from './MenuList/MenuList';
import './Page.css';
import PaymentInfo from './PaymentInfo/PaymentInfo';

const Page = () => {
  return (
      <Container>
          <div className='path--container'>
              Home &nbsp; <img src={Right} alt="right"/> &nbsp;  My Account
          </div>
          <div className='page-content-main-container'>
              <div className='menu-list-container'>
                  <MenuList/>
              </div>
              <div className='payment-info-main-container'>
                  <PaymentInfo/>
              </div>
          </div>
      </Container>
  )
}

export default Page