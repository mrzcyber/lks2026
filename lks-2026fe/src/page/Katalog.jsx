import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { DestinasiKategori, GetDestinasi } from "../api/api";
import clsx from "clsx";

const Katalog = ()=>{

    const [kategori,setkategori] = useState();
    const [DestinasiId,setDestinasiId]= useState();
    const [destinasi,setdestinasi]= useState();


     useEffect(()=>{
        
        const get = async ()=>{
            const data = await DestinasiKategori(DestinasiId)
            if(data){
              setdestinasi(data);   
            }
           
        }
        get();
    },[DestinasiId])

    useEffect(()=>{
        const get = async ()=>{
        const res = await fetch(`${import.meta.env.VITE_API_URL}kategori`)
        const data = await res.json()
        const res2 = await GetDestinasi("");
        setdestinasi(res2);
        setkategori(data);

        }
        get()
    },[])

    const HandlerAll = async()=>{
        const data = await GetDestinasi("");
        setDestinasiId(null)
        setdestinasi(data)
        
    }

    const HandlerSearch = async (q)=>{
        const data = await GetDestinasi(q)
        setdestinasi(data)
    }
    console.log(destinasi)

   

    return(
        <div className="w-full  bg-gray-200 flex flex-col ">
     

            <div className="w-full bg-[url(/kg.png)] h-72 bg-center bg-cover bg-no-repeat flex justify-center items-center ">
            <div className="flex flex-col justify-center items-center gap-2">
                <p className="md:text-3xl text-xl font-poppins font-bold text-shadow-2xs text-shadow-black/50  text-white">Jelajahi Destinasi Wisata Sragen</p>
                <input type="search" name=" " onChange={(e)=>HandlerSearch(e.target.value)} id="" placeholder="cari destinasi.. " className=" py-2 rounded-lg bg-white font-poppins font-semibold px-2 pr-6 focus:outline-amber-400" />
            </div>  
            </div>
            <div className="bg-white  py-5 flex flex-col md:px-20 px-2  gap-3 shadow-sm shadow-black/50">
                <p className="text-2xl font-bold font-poppins text-shadow-2xs shadow-gray-400">Pilih Kategory</p>
                <div className=" md:text-xl text-md font-semibold font-poppins md:pl-5 gap-5 flex flex-wrap md:flex-row  ">
                    <button onClick={()=>HandlerAll()} className={clsx(" shadow-md shadow-black/30 hover:bg-amber-500  rounded-lg transition-all duration-300 px-3 flex justify-center items-center py-1 ",DestinasiId ? "bg-gray-300":"bg-amber-500")}>semua</button>
                    {kategori?.map((item)=>(

                    <button onClick={()=>setDestinasiId(item?.id)} className={clsx(" shadow-md shadow-black/30 hover:bg-amber-500  rounded-lg transition-all duration-300 px-3 flex justify-center items-center py-1 ",DestinasiId === item?.id ? "bg-amber-500":"bg-gray-300")}>{item?.nama_kategori}</button>
                    ))}
                  
                </div>
            </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-10 lg:px-15 gap-10 px-5 mt-15">

                    {destinasi?.map((item)=>(
                          <div key={item.id} className="w-80 bg-white shadow-md shadow-black/50 h-96 rounded-xl flex flex-col  overflow-hidden  ">
                                                <div className="w-full h-[28rem] overflow-hidden">
                                                    <img src={`${import.meta.env.VITE_API}storage/${item?.foto}`}  alt="image" className="object-cover object-center w-full h-full hover:scale-105 scale-100 transition-all duration-300 " />
                                                    
                                                </div>
                                                    <div className="flex flex-col  font-poppins px-2 h-full  justify-between py-2  pt-2">
                                                        <div className="w-full">
                                                          <div className="w-full flex flex-row justify-between items-center">
                                                             <p className="text-sm font-poppins font-semibold bg-amber-400 w-28 flex justify-center rounded-md py-1 ">{item?.kategori.nama_kategori}</p>
                                                             <div className="  flex flex-row gap-1 text-yellow-500 items-center mb-2">
                                                                <p className="text-black font-semibold">4.8</p>
                                                                <p><FaStar /></p>
                                                            </div>
                                                            </div>  
                                                       
                                                        <p  className="text-xl/7 font-semibold font-poppins ">{item?.nama} </p>
                                                        <p className="text-sm font-medium font-poppins flex flex-row  ">  <FaLocationDot className="text-amber-500 text-lg" /> {item?.lokasi}</p>
                                                        </div>
                                                        
                                                         <a href={`/detail/${item?.id}`}  className="  py-2 rounded-md px-5 font-bold font-poppins flex justify-center hover:bg-amber-600 duration-300 transition-all  bg-amber-500">Kunjungi Sekarang</a>
                                                    </div>
                                            </div>
                    ))}
                         
           
         

          
           
          
                    
                         
                          


                                           
                                  </div>

                                          <div className="w-full flex justify-center items-center py-10  ">
                                            {destinasi?.length > 8 &&  <button className="bg-amber-500 px-3 rounded-lg text-xl font-poppins font-semibold py-2 hover:bg-amber-600 duration-300 transition-all ">
                                                       muat lebih banyak
                                                    </button>}
                                                   
                                            </div>


        </div>
    )
}

export default Katalog