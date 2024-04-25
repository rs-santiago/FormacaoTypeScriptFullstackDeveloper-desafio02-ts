import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.page";
import Conta from "./pages/Conta.page";
import ContaInfo from "./pages/ContaInfo.page";
import {
  Box,
  ChakraProvider
} from '@chakra-ui/react'
import { Layout } from "./components/Layout.component";
import { createContext } from 'react';

interface IAppContext {
  user: string
}

export const AppContext = createContext<IAppContext>({} as IAppContext)

const AppContextProvider = ({ children }: any) => {
  const user = 'Rodrigo'

  return (
    <AppContext.Provider value={{ user }}>
      {children}
    </AppContext.Provider>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Box minHeight='100vh' backgroundColor='#1E192C'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/conta/:id' element={<Conta />} />
                <Route path='/infoconta' element={<ContaInfo />} />
              </Routes>
            </Box>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
