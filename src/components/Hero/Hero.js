import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
      <section className="main-heroSection">
        <div className="main-heroSection-container-left">
          <h1 className="main-heroSection-title">Little lemon</h1>
          <h4 className="main-heroSection-subtitle">Chicago</h4>
          <p className="main-heroSection-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            rhoncus convallis risus, ut ultricies risus congue nec. Ut eleifend
            accumsan nibh tincidunt finibus. Nullam gravida dapibus accumsan.
          </p>
          <button className="main-heroSection-button">
            <Link to="#">Book a table</Link>
          </button>
        </div>
        <div className="main-heroSection-container-right">
          <img
            className="main-heroSection-image"
            src="https://i.ibb.co/dg2w6wk/piz2.jpg"
            alt="Principal dish"
          />
        </div>
      </section>
    </>
  )
}

export { Hero }
