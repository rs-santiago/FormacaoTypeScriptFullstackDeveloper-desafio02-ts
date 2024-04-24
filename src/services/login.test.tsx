import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        login("Fulano", "95h3n9fo43nfe")
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo Fulano!')
    })
})