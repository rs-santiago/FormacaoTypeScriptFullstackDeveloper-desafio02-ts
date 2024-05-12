import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useAppContext } from "../AppContext.component";
import { useNavigate } from 'react-router-dom';
import { changeLocalStorage } from '../../services/storage/storage';

export const Header = () => {
  const { setIsLoggedIn, isLoggedIn } = useAppContext()
  const navigate = useNavigate()
  const logout = () => {
    changeLocalStorage({ login: false, userDate: null })
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <Flex backgroundColor="orange" padding="5px">
      <Box>
        <Center>
          <Text fontSize="3xl">Dio Bank</Text>
        </Center>
      </Box>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Button
              onClick={() => { logout() }}
            >
              Sair
            </Button>
          </>
        )
      }
    </Flex>
  )
}
