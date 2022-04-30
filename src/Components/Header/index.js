import React from 'react'
import './Header.css'
import logo from '../../assets/logoPB.png'

function Header () {
  return (
    <div className='header'>
      <div className='image-container'>
        <img src={logo} />
      </div>
      <nav className='navHeader'>
        <ul>
          <li>
            <a href='#'>Planos Telzir</a>
          </li>
          <li>
            <a href='#'>Fale conosco</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
