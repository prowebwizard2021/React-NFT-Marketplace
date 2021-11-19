import {createContext, useContext, useState} from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    loggedUserName: '',
    isLoggedIn: false
  })

  const handleLoggedUser = (user) => {
    setAuth({
      loggedUserName: user.loggedUserName,
      isLoggedIn: user.isLoggedIn
    })
  }

  const functions = {
    handleLoggedUser
  }

  return (
    <AuthContext.Provider value={[auth, functions]}>
      {children}
    </AuthContext.Provider>
  )
}

/**
 * Hook to get and update configs state
 */
 export const useAuth = () => {
  const dataManager = useContext(AuthContext)
  return dataManager || [{}, async () => {}]
}
