import { IUserDate, api } from "../../api"

export const login = async (email: string, password: string): Promise<IUserDate | null> => {
    const data = await api

    if (email !== data.email || password !== data.password) {
        return null
    }
    return data
}
