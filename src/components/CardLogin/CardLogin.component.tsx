import { Box } from "@chakra-ui/react"

interface ICardLogin {
  children: React.ReactNode
}

export const CardLogin = ({ children }: ICardLogin) => {
  return (
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
      {children}
    </Box>
  )
}