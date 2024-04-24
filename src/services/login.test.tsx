import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = "test@email.com"
    it('Deve exibir um alert com boas vindas', () => {
        login(mockEmail, "95h3n9fo43nfe")
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
    })

    it('Não deve exibir a mensangem de boas vindas sem o email', () => {
        login(mockEmail, "95h3")
        expect(mockAlert).not.toHaveBeenCalledWith("Bem vindo!")
    });
})