import { Button } from "@chakra-ui/react"
import React from "react"

interface IButton {
    event: () => void
}

export const LoginButton = ({ event }: IButton) => {
  return (
    <Button onClick={event} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
      Login
    </Button>
  )
}