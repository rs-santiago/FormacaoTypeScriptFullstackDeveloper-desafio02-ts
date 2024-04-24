const account: IUserDate = {
    email: "rodrigo@dio.bank",
    password: "123456",
    name: "Rodrigo Santos Santiago"
}

export interface IUserDate {
    email: string,
    password: string,
    name: string
}

export const api = new Promise<IUserDate>((resolve) => {
    setTimeout(() => {
       resolve(account)
    }, 3000)
})