import { Route, Routes, useNavigate } from 'react-router-dom'
import { decodeToken, isExpired } from 'react-jwt'
import SIGNIN from './pages/auth/signin.jsx'
import { useUserContext } from './helper/userContext'
import { useEffect, useState } from 'react'
import ABOUT from './pages/about'
import HOME from './pages/home'

function App() {
  const navigate = useNavigate()

  const [loggedIn, setLoggedIn] = useState(false)
  const { user, setUser } = useUserContext()

  useEffect(() => {
    const loggedInToken = localStorage.getItem('token')
    if (loggedInToken) {
      if (!isExpired(loggedInToken)) {
        setLoggedIn(true)
        navigate('/about')
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
        {/* <Route path="/sigin" element={<SIGNIN />} /> */}
        <Route path="/" element={<SIGNIN />} />
        <Route path="/about" element={<ABOUT />} />
        <Route path="/groups" element={<HOME />} />
      </Routes>

      {/* <Link to="/about">About</Link> */}
    </>
  )
}

export default App
