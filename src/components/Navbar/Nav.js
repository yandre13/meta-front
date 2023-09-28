import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo_1.png'
import './Nav.css'

function Nav() {
  const [mostarBurguerMenu, setMostrarBurguerMenu] = useState(false)

  const handlerIcon = () => {
    console.log('hola')
    setMostrarBurguerMenu(!mostarBurguerMenu)
  }
  return (
    <nav className="nav-bar">
      <ul
        onClick={handlerIcon}
        className={`burger-menu ${
          mostarBurguerMenu ? 'showBurguerMenu' : 'hideBurguerMenu'
        }`}
        id="burger-menu"
      >
        <li>
          <Link className="nav-link-burguer" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link-burguer" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link-burguer" to="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link className="nav-link-burguer" to="/book">
            Book
          </Link>
        </li>
      </ul>
      <img className="nav-logo" src={logo} alt="Little lemon logo" />
      <ul className="nav-list">
        <li className="nav-listItem">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-listItem">
          <Link to="#" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-listItem">
          <Link to="/menu">Menú</Link>
        </li>
        <li className="nav-listItem">
          <Link to="#">Reservas</Link>
        </li>
      </ul>

      <div onClick={handlerIcon} className={`icons `} id="icons">
        <i
          className={`bx bx-menu ${
            !mostarBurguerMenu ? 'showIcon' : 'hideIcon'
          }`}
          id="menuIcon"
        ></i>
        <i
          className={`bx bx-x ${mostarBurguerMenu ? 'showIcon' : 'hideIcon'}`}
          id="menuX"
        ></i>
      </div>
    </nav>
  )
}

export { Nav }
