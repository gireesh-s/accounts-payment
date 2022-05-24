import { Divider } from '@mui/material';
import React, { useState } from 'react';
import '../Page.css';

const MenuList = () => {

  const [selectedBtn, setselectedBtn] = useState("pymntInfo");

  return (
    <ul className='menu-list-btn-list'>
        <li
        className={ selectedBtn === "myAcc" ? 'menu-single-btn-selected' : 'menu-single-btn' } 
        onClick={()=>setselectedBtn("myAcc")}>My Account
        </li>
        <li
        className={ selectedBtn === "myOrders" ? 'menu-single-btn-selected' : 'menu-single-btn' } 
        onClick={()=>setselectedBtn("myOrders")}>My Orders
        </li>
        <li
        className={ selectedBtn === "myClaims" ? 'menu-single-btn-selected' : 'menu-single-btn' } 
        onClick={()=>setselectedBtn("myClaims")}>My Claims
        </li>
        <li
        className={ selectedBtn === "myFav" ? 'menu-single-btn-selected' : 'menu-single-btn' } 
        onClick={()=>setselectedBtn("myFav")}>My Favorites
        </li>
        <li
        className={ selectedBtn === "myShop" ? 'menu-single-btn-selected' : 'menu-single-btn' } 
        onClick={()=>setselectedBtn("myShop")}>My Shopping Lists
        </li>
        <Divider style={{margin:"7px"}}/>
        <li
        className={ selectedBtn === "addrBook" ? 'menu-single-btn-selected' : 'menu-single-btn' } 
        onClick={()=>setselectedBtn("addrBook")}>Address Book
        </li>
        <li
        className={ selectedBtn === "accInfo" ? 'menu-single-btn-selected' : 'menu-single-btn' } 
        onClick={()=>setselectedBtn("accInfo")}>Account Information
        </li>
        <li
        className={ selectedBtn === "pymntInfo" ? 'menu-single-btn-selected' : 'menu-single-btn' } 
        onClick={()=>setselectedBtn("pymntInfo")}>Payment Information
        </li>
        <Divider style={{margin:"7px"}}/>
        <li
        className={ selectedBtn === "comPrfl" ? 'menu-single-btn-selected' : 'menu-single-btn' } 
        onClick={()=>setselectedBtn("comPrfl")}>Company Profile
        </li>
        <li
        className={ selectedBtn === "comStrctr" ? 'menu-single-btn-selected' : 'menu-single-btn' } 
        onClick={()=>setselectedBtn("comStrctr")}>Company Structure
        </li>
        <li
        className={ selectedBtn === "comUsers" ? 'menu-single-btn-selected' : 'menu-single-btn' } 
        onClick={()=>setselectedBtn("comUsers")}>Company Users
        </li>
        <li
        className={ selectedBtn === "RP" ? 'menu-single-btn-selected' : 'menu-single-btn' } 
        onClick={()=>setselectedBtn("RP")}>Roles and Permissions
        </li>
        <Divider style={{margin:"7px"}}/>
        <li
        className={ selectedBtn === "emailPrfrnc" ? 'menu-single-btn-selected' : 'menu-single-btn' } 
        onClick={()=>setselectedBtn("emailPrfrnc")}>Email Preferences
        </li>
        <li
        className={ selectedBtn === "catalog" ? 'menu-single-btn-selected' : 'menu-single-btn' } 
        onClick={()=>setselectedBtn("catalog")}>Catalog
        </li>
    </ul>
  )
}

export default MenuList