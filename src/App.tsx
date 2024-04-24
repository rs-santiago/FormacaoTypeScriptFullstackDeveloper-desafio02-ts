import {
  ChakraProvider,
  Box,
} from '@chakra-ui/react'
import { Layout } from './components/Layout';
import { CardLogin } from './components/CardLogin/CardLogin';

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Box minHeight='100vh' backgroundColor='#1E192C' padding='25px'>
          <CardLogin />
        </Box>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
