import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <ChakraProvider><Search /></ChakraProvider>
    </div>
  );
}

export default App;
