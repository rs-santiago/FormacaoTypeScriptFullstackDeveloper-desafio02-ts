import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.page";
import Conta from "./pages/Conta.page";
import ContaInfo from "./pages/ContaInfo.page";
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
        <Box minHeight='100vh' backgroundColor='#1E192C'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={<Conta />} />
            <Route path='/infoconta' element={<ContaInfo />} />
          </Routes>
          </Box>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
