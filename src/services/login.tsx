import { useContext } from "react"
import { api } from "../api"
import { AppContext } from "../components/AppContext.component"
import { useNavigate } from "react-router-dom"

export const login = async (email: string, password: string): Promise<void> => {
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()
    const data = await api

    if (email !== data.email) {
        return alert("Email inválido")
    }
    setIsLoggedIn(true)
    navigate(`/${data.id}`)
}
