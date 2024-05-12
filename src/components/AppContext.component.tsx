import React, { useContext, useEffect, useState } from 'react'
import { createContext } from "react"
import { getAllLocalStorage } from '../services/storage/storage'

interface IAppContext {
    user: string
    isLoggedIn: boolean
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

interface IAppContextProvider {
    children: React.ReactNode
}

export const AppContext = createContext<IAppContext>({} as IAppContext)

export const AppContextProvider = ({ children }: IAppContextProvider) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const storage = getAllLocalStorage()

    useEffect(() => {
        if (storage) {
            const { login } = JSON.parse(storage)
            setIsLoggedIn(login)
        }
        
    }, [storage])


    const user = 'Rodrigo'
    return (
        <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext)
    return context
}