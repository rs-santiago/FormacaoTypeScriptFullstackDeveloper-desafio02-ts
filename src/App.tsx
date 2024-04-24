import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.page";
import Conta from "./pages/Conta.page";
import {
  Box,
  ChakraProvider
} from '@chakra-ui/react'
import { Layout } from "./components/Layout.component";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
        <Box minHeight='100vh' backgroundColor='#1E192C' padding='25px'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta' element={<Conta />} />
          </Routes>
          </Box>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
