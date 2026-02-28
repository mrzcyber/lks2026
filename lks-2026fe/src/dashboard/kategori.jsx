
import { useState,useEffect } from "react";
import { Create, Deletekategori, Edit } from "../api/alert";
import { Getkategori } from "../api/api";

const Kategori = ()=>{
    const [data,setdata]= useState();

    useEffect(()=>{
        const res = async ()=>{
            const get = await Getkategori();
            setdata(get)
        }
        res()
    },[])


    const handleradd = async()=>{
        await Create();
    }

    const handleredit = async (id)=>{
        await Edit(id)
    }

    const handlerdelete = async (id)=>{
        await Deletekategori(id);
    }

    return(
       <div className="w-full h-screen flex flex-col items-center  px-10 py-10 ">
            <div className="w-3xl mt-10 bg-white rounded-2xl p-5 flex flex-col items-center justify-center ">
                <div className="flex flex-row justify-between items-center w-full px-10 py-5">
                    <p className="text-2xl font-semibold font-poppins ">Kategori wisata</p>
                    <button onClick={()=>handleradd()} className="text-2xl font-poppins font-semibold bg-amber-500 py-3 px-10 rounded-lg  hover:bg-amber-600 transition-all duration-300 ">Tambah</button>
                </div>
                <div className="w-full ">
                    <table className=" w-full text-center ">
                        <thead className="text-xl border-b-2 border-gray-500 ">
                            <th className="py-3 "> Id</th>
                            <th> Kategori</th>
                            <th> Aksi </th>
                        </thead>
                        <tbody>
                            {data?.map((item,index)=>(

                            
                            <tr key={index} className="text-xl border-b border-gray-300  font-medium">
                            <td>{index+1} </td>
                            <td>{item.nama_kategori} </td>
                            <td className="flex gap-2 flex-row items-center justify-center py-3 ">
                                <button onClick={()=>handlerdelete(item.id)} className="bg-red-400 py-1 px-3 rounded-lg hover:bg-red-500 ">hapus</button> 
                                <button onClick={()=>handleredit(item.id)} className="bg-amber-500 py-1 px-4 rounded-lg hover:bg-amber-600">edit</button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                </div>

            </div>
            
        </div>
    )
}

export default Kategori;