import React from 'react'
import { Hero } from '../Hero/Hero'
import { Cards } from '../Cards/Cards'
import { About } from '../About/About'
import { Footer } from '../Footer/Footer'

function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <About />
      <Footer />
    </>
  )
}

export { Home }
