// import {  Route } from 'electron-router-dom'
import ABOUT from './pages/about'
import { Route, Routes } from 'react-router-dom'
import { decodeToken, isExpired } from 'react-jwt'
import SIGNIN from './pages/auth/signin.jsx'
import { useUserContext } from './helper/userContext'
import { useEffect } from 'react'

function App() {
  // const navigate = useNavigate()
  const { user, setUser } = useUserContext()

  useEffect(() => {
    const loggedInToken = localStorage.getItem('token')

    if (loggedInToken) {
      if (!isExpired(loggedInToken)) {
        setUser({
          userLoggedIn: true,
          details: decodeToken(loggedInToken)
        })
      }
    }
  }, [])

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<HOME />} /> */}
        <Route path="/" element={<SIGNIN />} />
        {/* <Route path="/sigin" element={<SIGNIN />} /> */}
        <Route path="/about" element={<ABOUT />} />
        <Route path="/groups" element={<div>goups</div>} />
      </Routes>

      {/* <Link to="/about">About</Link> */}
    </>
  )
}

export default App
