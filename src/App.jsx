
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import List from "./components/table";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { Router } from './Router.jsx/Routes';
import { useAppStore } from './components/store';
const queryClient = new QueryClient();
function App() {
  
 const {theme } = useAppStore()
  return (
    <>
    <MantineProvider  forceColorScheme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter><Router /></BrowserRouter>
        {/* <RouterProvider router={Router}/> */}
      </QueryClientProvider>  
    </MantineProvider>
  
      
    </>
  )
}

export default App
