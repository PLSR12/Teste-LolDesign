import React from 'react'

import { ContainerHeader, NavHeader } from './styles'

import logo from '../../assets/logoPB.png'

function Header () {
  return (
    <ContainerHeader>
      <div className='image-container'>
        <img src={logo} alt='logo' />
      </div>
      <NavHeader>
        <ul>
          <li>
            <a>Planos Telzir</a>
          </li>
          <li>
            <a>Fale conosco</a>
          </li>
        </ul>
      </NavHeader>
    </ContainerHeader>
  )
}

export default Header
