import { api } from "../api"

export const login = async (email: string, password: string): Promise<void> => {
    const data = await api

    if (email !== data.email) {
        alert("Email inválido")
    } else {
        alert(`Bem vindo ${email}!`)
    }
}
