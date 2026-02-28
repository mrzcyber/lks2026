import { useEffect,useState } from "react";
import { Desh } from "../api/api";
import { Delete1 } from "../api/alert";



const Destinasi = ()=>{
    const [data,setdata]=useState();

    useEffect(()=>{
        const ress = async ()=>{
            const value = await Desh(); 
            setdata(value);
        }
        ress();
    },[])

const handlerdelete = async (id)=>{
    await Delete1(id)
} 

 
    return(
        <div className="w-full h-screen flex flex-col items-center  px-10 py-10 ">
            <div className="w-full mt-10 bg-white rounded-2xl p-5 flex flex-col items-center justify-center ">
                <div className="flex flex-row justify-between items-center w-full px-10 py-5">
                    <p className="text-2xl font-semibold font-poppins ">Destinasi wisata</p>
                    <a href="dashboard/form" className="text-2xl font-poppins font-semibold bg-amber-500 py-3 px-10 rounded-lg  hover:bg-amber-600 transition-all duration-300 ">Tambah</a>
                </div>
                <div className="w-full ">
                    <table className=" w-full text-center ">
                        <thead className="text-xl border-b-2 border-gray-500 ">
                            <th className="py-3 "> Nama Destinasi</th>
                            <th> Alamat Destinasi</th>
                            <th> Kategori </th>
                            <th> Harga Tiket </th>
                            <th> Aksi </th>
                        </thead>
                     
                        <tbody >
                      {data?.map((item)=>(
                            <tr key={item.id} className="text-xl border-b border-gray-300  font-medium">
                            <td className="">{item.nama} </td>
                            <td>{item.lokasi} </td>
                            <td>{item.kategori.nama_kategori}</td>
                            <td> {item.harga_tiket}</td>
                            <td className="flex gap-2 flex-row items-center justify-center py-3 ">
                                <button className="bg-red-400 py-1 px-3 rounded-lg hover:bg-red-500 " onClick={()=>handlerdelete(item.id)} >hapus</button> 
                                <a href={`dashboard/edit/${item.id}`} className="bg-amber-500 py-1 px-4 rounded-lg hover:bg-amber-600">edit</a>
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

export default Destinasi;
