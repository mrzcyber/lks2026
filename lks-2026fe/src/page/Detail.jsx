
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { DestinasiId, GetDestinasi } from "../api/api";
import { useParams } from "react-router";
import { useState } from "react";

const Detail = ()=>{
    const [data,setdata] = useState()
    const [galeri,setgaleri] = useState();
    const [rekomendasi,setrekomendasi] = useState()
    let params = useParams()
    const id = params.id

    useEffect(()=>{
    const get = async ()=>{
    const res = await DestinasiId(id)
     setdata(res);
    setgaleri(res.galeri)
    const rekomen = await GetDestinasi()
    let first = Math.floor(Math.random() * rekomen.length )
    if(first >= rekomen.length-3 ) first = 0
    const two = first+3;
    setrekomendasi(rekomen.slice(first,two)) 

    }
    get()

    },[])

    return(
        <div className="w-full  bg-gray-200 flex flex-col  ">

            <div className="flex flex-col items-center justify-center bg-white rounded-2xl py-10 my-20 px-4 md:px-10 lg:px-20 lg:mx-30 ">
                    <div className=" md:flex-row flex  gap-5 lg:gap-15">
                    <div className="md:w-xl md:h-80  h-56   rounded-xl overflow-hidden ">
                        <img src="/kg.png" alt="pure" className="w-full h-full object-cover object-center hover:scale-105 scale-100 transition-all duration-300 " />
                    </div>
                     <div className="text-black font-poppins flex flex-col  ">
                            <p className=" md:text-2xl lg:text-3xl font-bold ">{data?.nama}</p>
                            <p className="md:text-md  lg:text-xl font-poppins text-gray-900 font-medium md:font-semibold "  >Buka setiap hari</p>
                            <p  className="md:text-md lg:text-xl font-poppins text-gray-900 font-medium md:font-semibold" >Pukul 06.00 sampai 22.00 WIB</p>
                            <p className="text-black font-bold md:text-xl lg:text-2xl mt-5" >Tiket Mulai Dari:</p>
                            <p  className="md:text-md lg:text-xl font-poppins text-gray-900 font-medium md:font-semibold " >Rp{data?.harga_tiket} untuk Semua Kalangan</p>
                            <p  className="md:text-md lg:text-xl font-poppins text-gray-900 font-medium md:font-semibold mt-5" >{data?.lokasi}</p>
                        </div>
                </div>
                <div className="w-full  py-5 md:mt-15 flex flex-row justify-center gap-5 md:gap-15 items-center">
                 {galeri?.map((item,index)=>(
                 <div key={index} className="md:w-40 md:h-40 h-20 w-20 rounded-2xl  overflow-hidden shadow-md shadow-black/60 ">
                <img src={`${import.meta.env.VITE_API}storage/${item.nama_galeri}`} alt="image" className="w-full h-full object-cover object-center hover:scale-110 scale-100 transition-all duration-300 " />
                        </div>
                ))}
                       
                        
    
                </div>

                <div className="w-full  py-10 flex md:flex-row justify-center gap-5 md:gap-0 flex-col">
                    <div className="flex flex-col md:w-lg lg:w-3xl w-full  font-poppins ">
                        <p className="text-3xl font-semibold ">Tetang</p>
                        <p className="text-xl font-semibold">{data?.nama}</p>
                        <p className="text-md font-medium text-gray-800   pr-5">{data?.deskripsi}</p>
                    </div>
                    <div className="rounded-xl overflow-hidden md:w-3xl md:h-64  lg:h-92 lg:w-4xl">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.4474223574534!2d110.85170677454828!3d-7.415632273034878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a0f0e4de2c921%3A0xb3e808e6b680b3a!2sWisata%20Sendang%20Kun%20Gerit!5e0!3m2!1sid!2sid!4v1770707437591!5m2!1sid!2sid" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                    <div className="flex flex-col gap-5 w-full">
                        <p className="text-2xl font-semibold font-poppins">Destinasi Terpopuler</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 grid-cols-1">
                            {rekomendasi?.map((item)=>(

                               <div className="w-80 bg-white shadow-md shadow-black/50 h-96 rounded-xl flex flex-col  overflow-hidden  ">
                                                <div className="w-full h-[30rem] overflow-hidden ">
                                                    <img src={`${import.meta.env.VITE_API}storage/${item.foto}`} alt="image" className="object-cover object-center w-full h-full hover:scale-105 scale-100 transition-all duration-300 " />
                                                    
                                                </div>
                                                    <div className="flex flex-col  font-poppins px-2 h-full  justify-between py-2  pt-2">
                                                        <div className="w-full">
                                                          <div className="w-full flex flex-row justify-between items-center">
                                                             <p className="text-sm font-poppins font-semibold bg-amber-400 w-28 flex justify-center rounded-md py-1 ">{item.kategori.nama_kategori}</p>
                                                             <div className="  flex flex-row gap-1 text-yellow-500 items-center mb-2">
                                                                <p className="text-black font-semibold">4.8</p>
                                                                <p><FaStar /></p>
                                                            </div>
                                                            </div>  
                                                       
                                                        <p  className="text-xl/7 font-semibold font-poppins ">{item.nama} </p>
                                                        <p className="text-sm font-medium font-poppins flex flex-row  gap-2 "> <FaLocationDot className="text-xl"/>{item.lokasi}</p>
                                                        </div>
                                                        
                                                         <a href={`/detail/${item.id}`} className="  py-2 rounded-md px-5 font-bold font-poppins flex justify-center hover:bg-amber-600 duration-300 transition-all  bg-amber-500">Kunjungi Sekarang</a>
                                                    </div>
                        
                                            </div>  
                            ))}
                       
  
                        </div>
                    </div>

            </div>

 
        </div>
    )
}

export default Detail;