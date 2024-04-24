const account: IUserDate = {
    id: '1',
    email: "rodrigo@dio.bank",
    password: "123456",
    name: "Rodrigo Santos Santiago",
    balance: 2000.00
}

export interface IUserDate {
    id: string
    email: string
    password: string
    name: string
    balance: number
}

export const api = new Promise<IUserDate>((resolve) => {
    setTimeout(() => {
       resolve(account)
    }, 3000)
})