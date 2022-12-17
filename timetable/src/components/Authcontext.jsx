import {createContext,useState} from "react"

export const AuthContext = createContext()
export default function AuthContextProvider({children}){

    const [Auth,setAuth] = useState(false)
    const [token,settoken] = useState("")

    const login1 =()=>{
        setAuth(true)
    }
    const logout =()=>{
        setAuth(false)
    }
return (
  <AuthContext.Provider  value={{login1,logout,settoken,token,setAuth}}>
    {children}
  </AuthContext.Provider>

)
}