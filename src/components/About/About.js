import React from 'react'

import './About.css'

function About() {
  return (
    <>
      <section className="main-aboutSection" id="#about">
        <div className="main-aboutSection-container-left">
          <h1 className="main-aboutSection-title">Little lemon</h1>
          <h4 className="main-aboutSection-subtitle">Chicago</h4>
          <p className="main-aboutSection-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            rhoncus convallis risus, ut ultricies risus congue nec. Ut eleifend
            accumsan nibh tincidunt finibus. Nullam gravida dapibus accumsan.
          </p>
        </div>
        <div className="main-aboutSection-container-right">
          <img
            className="main-aboutSection-image image1"
            src="https://i.ibb.co/2KkkqTb/piz1.jpg"
            alt="Principal dish"
          />
        </div>
      </section>
    </>
  )
}

export { About }
