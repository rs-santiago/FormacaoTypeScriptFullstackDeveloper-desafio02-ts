import { login } from "./login"

describe('login', () => {
    const mockEmail = "rodrigo@dio.bank"

    it('Deve exibir um alert com boas vindas caso o email seja válido', async () => {
        const response = await login(mockEmail, "95h3n9fo43nfe")
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        const response = await login('email@invalido.com', 'password')
        expect(response).toBeFalsy()

    })
})