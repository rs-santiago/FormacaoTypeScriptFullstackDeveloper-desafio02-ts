import { Center } from '@chakra-ui/react'
import './Header.css'
import { useContext } from 'react'
import { AppContext } from "../AppContext.component";

export const Header = () => {
  const context = useContext(AppContext)
  console.log('header ', context);
  return (
    <div className='header'>
      <Center>
        Dio Bank
      </Center>
    </div>
  )
}
