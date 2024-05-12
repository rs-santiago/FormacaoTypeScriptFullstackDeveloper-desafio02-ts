import { Box, Center, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { CardLogin } from "../components/CardLogin/CardLogin.component";
import { LoginButton } from "../components/LoginButton/LoginButton.component";
import { useState } from "react";
import { login } from "../services/Login/login";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../components/AppContext.component";
import { changeLocalStorage } from "../services/storage/storage";

const Home = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { setIsLoggedIn } = useAppContext()
    const navigate = useNavigate()
    
    const validateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password)

        if (!loggedIn) {
            return alert('Dados de login inválido')
        }
        setIsLoggedIn(true)
        changeLocalStorage({ login: true, userDate: loggedIn })
        navigate('/conta/1')
    }

    return (
        <Box padding='25px'>
            <CardLogin>
                <Center>
                    <h1>Faça o login</h1>
                </Center>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' placeholder="email" size='md'
                        value={email}
                        onChange={(e: any) => setEmail(e.target.value)}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input type='password' placeholder="password" size='md'
                        value={password}
                        onChange={(e: any) => setPassword(e.target.value)}
                    />
                </FormControl>
                <Center>
                    <LoginButton
                        onClick={() => {
                            validateUser(email, password)
                        }}
                    />
                </Center>
            </CardLogin>
        </Box>
    )
}

export default Home;