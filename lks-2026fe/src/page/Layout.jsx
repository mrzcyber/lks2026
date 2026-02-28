import { Outlet } from "react-router";
import Footer from "../componen/Footer";
import Navbar from "../componen/Navbar";

const Layout = ()=>{
    return(
        <div className="w-full">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;