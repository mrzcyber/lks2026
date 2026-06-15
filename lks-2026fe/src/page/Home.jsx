// import Footer from "../componen/Footer";
// import Navbar from "../componen/Navbar";
import { FaStar } from "react-icons/fa";
import { GiGreenhouse } from "react-icons/gi";
import { FaUserGroup } from "react-icons/fa6";
import { HiMiniTrophy } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { GetDestinasi } from "../api/api";

const Home = ()=>{
    const [data,setdata] = useState()

    useEffect(()=>{

    const get = async ()=>{
        const res = await GetDestinasi("");
        setdata(res);
        console.log(res)
    }
    get();
    

    },[])


    return(

        <div className="w-full  bg-gray-200 flex flex-col   ">

            <div className="bg-[url(/kg.png)] bg-cover bg-no-repeat bg-center h-[30rem] flex flex-col justify-center md:items-center px-4 gap-2">
            
                <p className="font-poppins text-2xl md:text-4xl font-bold text-white text-shadow-lg text-shadow-black ">Ayo Explore Destinasi Sragen</p>
                <p className="font-poppins text-lg md:text-2xl font-bold  text-white text-shadow-2xs ">Ayo Explore Destinasi Sragen Dan Nikmati Liburan Anda Sekarang</p>

                <a href="/destinasi" className="md:text-xl w-44 font-bold shadow-sm font-poppins bg-amber-500 rounded-xl py-2 px-4 md:w-56 transition-all duration-300 hover:bg-amber-600 " >Explore Sekarang</a>
            
            </div>


            <div className="w-full py-10 ">
                <p className="text-2xl font-poppins font-bold mb-10 px-5 md:px-20 ">Destinasi Terpopuler</p>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 px-5 md:px-20">
                    {data?.map((item,index)=>(

                        <div key={index} className="w-full bg-white shadow-md shadow-black/50 h-96 rounded-xl flex flex-col hover:shadow-black/80 transition-all duration-300  overflow-hidden  ">
                        <div className="w-full h-92 overflow-hidden ">
                            <img src={`${import.meta.env.VITE_API}storage/${item?.foto}`} alt="image" className="object-cover object-center w-full h-full hover:scale-105 scale-100 transition-all duration-300 " />
                            
                        </div>
                            <div className="flex flex-col  font-poppins px-2 h-full  justify-between pb-3  pt-2">
                                <div className="w-full">
                                  <div className="w-full flex flex-row justify-between items-center">
                                     <p className="text-sm font-poppins font-semibold bg-amber-400 w-28 flex justify-center rounded-md py-1 ">{item?.kategori.nama_kategori}</p>
                                     <div className="  flex flex-row gap-1 text-yellow-500 items-center mb-2">
                                        <p className="text-black font-semibold">4.8</p>
                                        <p><FaStar /></p>
                                    </div>
                                    </div>  
                               
                                <p  className="text-xl/7 font-semibold font-poppins ">{item?.nama} </p>
                                <p className="text-sm font-medium font-poppins  flex flex-row  mt-1"> <FaLocationDot className="text-amber-500 text-lg" /> {item?.lokasi}</p>
                                </div>
                                
                                 <a href={`/detail/${item?.id}`} className="  py-2 rounded-md px-5 font-bold font-poppins flex justify-center hover:bg-amber-600 duration-300 transition-all  bg-amber-500">Kunjungi Sekarang</a>
                            </div>
                    </div> 
                    ))}
                   
        
       
     
 
         
            
                 
                  
                   
                  
                   
                  
                 
                  
                  
                  
                
                  
                  
                    
                  
                  

                </div>

                <div id="about" className="w-full mt-10 bg-white shadow-sm shadow-black/50  py-15 px-3 flex flex-row gap-3 md:gap-10 justify-center">
                        <div className="flex flex-row gap-1 items-center">
                            <p className="md:text-3xl bg-amber-500 rounded-full md:block hidden p-3"><GiGreenhouse /></p>
                            <div className="flex flex-col  font-poppins  ">
                            <p className="font-bold text-xl md:text-2xl/3 ">50+</p>
                            < p className="text-md font-medium"> Destinasi Wisata</p>
                        </div>
                        </div>
                        <div className="flex flex-row gap-1 items-center">
                            <p className="md:text-3xl bg-amber-500 rounded-full md:block hidden p-3"><FaUserGroup  /></p>
                            <div className="flex flex-col  font-poppins  ">
                            <p className="font-bold text-xl md:text-2xl/3 ">100.000+</p>
                            < p className="text-md font-medium"> Pengunjung Setiap Tahun</p>
                        </div>
                        </div>
                        <div className="flex flex-row gap-1 items-center">
                            <p className="md:text-3xl bg-amber-500 rounded-full md:block hidden p-3"><HiMiniTrophy /></p>
                            <div className="flex flex-col  font-poppins  ">
                            <p className="font-bold text-xl md:text-2xl/3 ">15</p>
                            < p className="text-md font-medium"> Penghargaan</p>
                        </div>
                        </div>
                      
                        
                </div>

            </div>


        </div>
    )
}

export default Home;