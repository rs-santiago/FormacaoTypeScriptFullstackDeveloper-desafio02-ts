import { Box, Center, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { LoginButton } from "../LoginButton/LoginButton"
import { useState } from "react"
import { login } from "../../services/login"

export const CardLogin = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const handleInputChangeEmail = (e: any) => setEmail(e.target.value)
  const handleInputChangePassword = (e: any) => setPassword(e.target.value)
  const handleClickLogin = () => {
      login(email, password)
  }
  return (
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
      <Center>
        <h1>Faça o login</h1>
      </Center>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type='email' placeholder="email" size='md' onChange={handleInputChangeEmail} />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input type='password' placeholder="password" size='md' onChange={handleInputChangePassword} />
      </FormControl>
      <Center>
        <LoginButton event={handleClickLogin} />
      </Center>
    </Box>
  )
}