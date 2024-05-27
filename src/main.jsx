import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import NewTheme from './styles/theme'


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/navbar.jsx'
import './styles/fonts.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={NewTheme}>
      <NavBar/>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
