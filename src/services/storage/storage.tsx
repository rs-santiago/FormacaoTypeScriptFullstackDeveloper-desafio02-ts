import { IUserDate } from "../../api"

export interface IDiobank {
    login: boolean,
    userDate: IUserDate | null
}

const diobank: IDiobank = {
    login: false,
    userDate: null
}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(diobank))
}

export const changeLocalStorage = (diobank: IDiobank): void => {
    localStorage.setItem('diobank', JSON.stringify(diobank))
}
