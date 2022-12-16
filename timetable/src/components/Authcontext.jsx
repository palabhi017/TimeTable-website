import {createContext,useState} from "react"

export const AuthContext = createContext()
export default function AuthContextProvider({children}){

    const [Auth,setAuth] = useState(false)

    const login =()=>{
        setAuth(true)
    }
    const logout =()=>{
        setAuth(false)
    }
return (
  <AuthContext.Provider  value={{login,logout}}>
    {children}
  </AuthContext.Provider>

)
}