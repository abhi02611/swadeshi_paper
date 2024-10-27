import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { StrictMode } from 'react';


createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ChakraProvider>
)
