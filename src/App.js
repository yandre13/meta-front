import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Nav } from './components/Navbar/Nav'
import { Home } from './components/Home/Home'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/menu" element={<Menu />} /> */}
        {/* <Route path="/book" element={<Book />} /> */}
        {/* <Route path="/confirmation" element={<Confirmation />} /> */}
      </Routes>
    </>
  )
}

export default App
