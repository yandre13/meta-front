import React from 'react'
import logo from '../../assets/img/logo_1.png'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="container-footer">
        <div className="container-left">
          <img className="footer-logo" src={logo} alt="Little lemon logo" />
        </div>
        <div className="container-centerLeft">
          <ul>
            <h4 className="footer-title">Navigation</h4>
            <li className="footer-link">
              <Link to="#">About</Link>
            </li>
            <li className="footer-link">
              <Link to="#">Menu</Link>
            </li>
            <li className="footer-link">
              <Link to="#">Book</Link>
            </li>
          </ul>
        </div>
        <div className="container-centerRight">
          <ul>
            <h4 className="footer-title">Contact</h4>
            <li className="footer-link">Address</li>
            <li className="footer-link">Phone number</li>
            <li className="footer-link">Email</li>
          </ul>
        </div>
        <div className="container-right">
          <ul>
            <h4 className="footer-title">Social Media</h4>
            <li className="footer-link">Social Media 1</li>
            <li className="footer-link">Social Media 2</li>
            <li className="footer-link">Social Media 3</li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export { Footer }
