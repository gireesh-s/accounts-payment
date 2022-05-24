import { Container } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='nav-bar-main-container'>
        <Container>
            <ul className='nav-bar-btn-list'>
                <li>
                    <Link to={"#"} style={{textDecoration:"none", color: "#63544F"}}>
                        Beverages
                    </Link>
                </li>
                <li>
                    <Link to={"#"} style={{textDecoration:"none", color: "#63544F"}}>
                        Bulk
                    </Link>
                </li>
                <li>
                    <Link to={"#"} style={{textDecoration:"none", color: "#63544F"}}>
                        Groceries
                    </Link>
                </li>
                <li>
                    <Link to={"#"} style={{textDecoration:"none", color: "#63544F"}}>
                        Health & Beauty
                    </Link>
                </li>
                <li>
                    <Link to={"#"} style={{textDecoration:"none", color: "#63544F"}}>
                        Household
                    </Link>
                </li>
                <li>
                    <Link to={"#"} style={{textDecoration:"none", color: "#63544F"}}>
                        Vitamins & Supplements
                    </Link>
                </li>
                <li>
                    <Link to={"#"} style={{textDecoration:"none", color: "#63544F"}}>
                        Brands
                    </Link>
                </li>
            </ul>
        </Container>
    </div>
  )
}

export default NavBar