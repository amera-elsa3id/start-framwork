import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import ErrorNotFound from './components/ErrorNotFound/ErrorNotFound';
import Contact from './components/Contact/Contact';

let router = createBrowserRouter([
  {path:"" , element:<Layout/> ,children:[
    {path:'/' , element:<Home/>},
    {path:'about' ,element:<About/>},
    {path:'portfolio' ,element:<Portfolio/>},
    {path:'contact' ,element:<Contact/>},
    {path:'*' ,element:<ErrorNotFound/>},
  ]}
])
function App() {


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
