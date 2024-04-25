import { BrowserRouter } from 'react-router-dom';
import MainRoutes from "./routes";
import {
  Box,
  ChakraProvider
} from '@chakra-ui/react'
import { Layout } from "./components/Layout.component";
import { AppContextProvider } from './components/AppContext.component';

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Box minHeight='100vh' backgroundColor='#1E192C'>
              <MainRoutes />
            </Box>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
