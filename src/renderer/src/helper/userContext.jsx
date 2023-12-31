import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    details: {},
    userLoggedIn: false
  })

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export function useUserContext() {
  return useContext(UserContext)
}
