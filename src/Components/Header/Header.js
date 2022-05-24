import React from 'react'
import NavBar from './NavBar/NavBar'
import PrimaryHead from './PrimaryHead/PrimaryHead'
import SecondaryHeader from './SecondaryHeader/SecondaryHeader'

const Header = () => {
  return (
    <div style={{}}>
        {/* <SecondaryHeader/> */}
        <PrimaryHead/>
        <NavBar/>
    </div>
  )
}

export default Header