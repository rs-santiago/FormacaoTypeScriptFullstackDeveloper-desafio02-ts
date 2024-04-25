import { login } from "./login"

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext:() => ({
        setIsLoggedIn: mockSetIsLoggedIn
    })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate
}))

describe('login', () => {
    const mockEmail = "rodrigo@dio.bank"

    it('Deve exibir um alert com boas vindas caso o email seja válido', async () => {
        await login(mockEmail, "95h3n9fo43nfe")
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        expect(mockNavigate).toHaveBeenCalledWith('/1')
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        await login('email@invalido.com', 'password')
        expect(mockSetIsLoggedIn).not.toHaveBeenCalledWith(true)
        expect(mockNavigate).not.toHaveBeenCalledWith()

    })
})