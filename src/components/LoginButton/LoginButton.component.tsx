import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface IButton {
    onClick: MouseEventHandler
}

export const LoginButton = ({ onClick }: IButton) => {
  return (
    <Button onClick={onClick} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
      Login
    </Button>
  )
}