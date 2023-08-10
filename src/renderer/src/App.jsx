// import {  Route } from 'electron-router-dom'
import HOME from './pages/home'
import ABOUT from './pages/about'
import { HashRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import SIGNIN from './pages/auth/signin'

function App() {
  // const navigate = useNavigate()
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<HOME />} /> */}
        <Route path="/" element={<SIGNIN />} />
        {/* <Route path="/sigin" element={<SIGNIN />} /> */}
        <Route path="/about" element={<ABOUT />} />
      </Routes>

      {/* <Link to="/about">About</Link> */}
    </>
  )
}

export default App
