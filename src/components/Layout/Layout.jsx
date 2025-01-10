
import Navbar from './../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './../Footer/Footer';


export default function Layout() {
  return (
    <>
    <div className="d-flex flex-column min-vh-100 justify-content-between">
      <Navbar/>
      <div className='pt-5 d-flex flex-column light-bg min-vh-100 justify-content-center align-items-center'>
    <Outlet/>
      </div>
    <Footer/>
    </div>
    
    </>
  )
}
