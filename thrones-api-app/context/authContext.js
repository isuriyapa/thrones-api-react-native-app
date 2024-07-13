import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect( ()=>{

    }, [])

    const login = async(email, password)=>{
        try {
            
        } catch (e) {
            
        }
    }

    const logout = async()=>{
        try {
            
        } catch (e) {
            
        }
    }

    const register = async(username, email, password)=>{
        try {
            
        } catch (e) {
            
        }
    }

    return(
        <AuthContextProvider value={{user, isAuthenticated, login, register, logout}}>
            {children}
        </AuthContextProvider>
    )
}

export const useAuth = ()=>{
    const value = useContext(AuthContext);

    if(!value){
        throw new Error('useAuth must be wrapped inside AuthContextProvider');
    }
    return value;
}