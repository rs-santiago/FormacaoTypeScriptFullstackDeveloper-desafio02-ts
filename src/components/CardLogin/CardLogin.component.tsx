import { Box, Center, FormControl, FormLabel, Input, Spinner } from "@chakra-ui/react"
import { LoginButton } from "../LoginButton/LoginButton.component"
import { useState, useEffect } from "react"
import { login } from "../../services/login"
import { IUserDate, api } from "../../api";



export const CardLogin = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [userData, setUserData] = useState<null | IUserDate>(null)
  useEffect(() => {
    const getData = async () => {
      const data: IUserDate = await api
      setUserData(data)
    }

    getData()
  }, [])

  return (
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
      {/* {
        !userData
          && <Center>
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
            />
          </Center>
         
      } */}
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
            login(email, password)
          }}
        />
      </Center>
    </Box>
  )
}