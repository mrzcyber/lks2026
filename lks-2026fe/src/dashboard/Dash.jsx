import clsx from "clsx";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";

const Dash = ()=>{
    const[active,setactive]=useState(1);
    return(
        <div className="w-full  bg-slate-100 flex flex-row">
                <div className="w-80"></div>
                <div className=" h-full bg-white flex flex-col pt-10 w-80 shadow-md shadow-black/40 fixed">
                    <p className="text-3xl font-bold font-poppins w-full text-center" >Dashboard</p>
                    <Link to="/dashboard" className={clsx("py-2 mt-5 text-xl font-poppins font-semibold pl-5 font-stretch-125% ",active === 1? "bg-linear-to-r from-amber-300/30 to-amber-500 border-r-2 border-amber-600 transition-all duration-300 " : "bg-gray-100 ")} onClick={()=>setactive(1)} >Destinasi</Link>
                    <Link to="kategori" className={clsx("py-2 mt-5 text-xl font-poppins font-semibold pl-5 font-stretch-125% ",active === 2? "bg-linear-to-r from-amber-300/30 to-amber-500 border-r-2 border-amber-600 transition-all duration-300  " : "bg-gray-100")} onClick={()=>setactive(2)} >Kategori</Link>

                </div>
                <div className="flex-1">
                     <Outlet/>
                </div>
               
        </div>
    )
}

export default Dash;