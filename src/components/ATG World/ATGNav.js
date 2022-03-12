import React from 'react'
import logo from './Images/whole.png'

const navHolderStyles ={
    position: 'absolute',
    width: '1440px',
    height: '72px',
    left: '0px',
    top: '0px'
}

const navStyles = {
    position: 'absolute',
    width: '1440px',
    height: '72px',
    left: '0px',
    top: '0px',
    background:' #FFFFFF',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.12)'
}

const logoHolder = {
    position: 'absolute',
    width: '162.57px',
    height: '24px',
    left: '72px',
    top: '24px;'
}

function ATGNav() {
  return (
    <div style={navStyles}>
        <div style={logoHolder}>
            <img src={logo} />
        </div>
    </div>
  )
}

export default ATGNav