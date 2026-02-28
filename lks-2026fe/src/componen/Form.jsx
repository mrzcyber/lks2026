import  { useEffect, useState } from 'react';
import { HiOutlineCloudUpload } from 'react-icons/hi';
import { CreateDestinasi, Getkategori } from '../api/api';
import { useNavigate } from 'react-router';



const Form = ()=>{
    const [thumb,setthumb]= useState();
    const [galeri,setgaleri]= useState([]);
    const [categori,setcategori]= useState();

    let navigate = useNavigate();
    
    const handlerchange = (e)=>{
        const files = Array.from(e.target.files);
      
        setgaleri(files.slice(0,4));
       
    }
    
    const handlersubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target)

        galeri.forEach((file)=>{
        formData.append('galeri[]',file);
        })

        const ress = await CreateDestinasi(formData);
         console.log(ress)
        navigate('/dashboard')
       

    }

    useEffect(()=>{
        const get = async ()=>{
           const res = await Getkategori()
           setcategori(res)
        }
        get()
    },[])
    console.log(categori)




    return(
        <div className="w-full  p-10 py-20 flex flex-col ">
            <p className="text-2xl font-poppins font-semibold ">Tambah Destinasi</p>
            <div className="w-full bg-white p-5 rounded-xl h-full ">
            <form action="" encType="multipart/form-data" onSubmit={(e)=>handlersubmit(e)}> 
            <div className="w-full grid grid-cols-2 gap-5">
                <div>
                  <p className="font-poppins font-medium ">Nama Destinasi</p>
                <input type="text"  name="nama" placeholder="Nama Destinasi.." className="bg-gray-300 w-full py-2 px-3 rounded-lg font-medium text-lg" />
                </div>
                <div>
                  <p className="font-poppins font-medium ">Lokasi </p>
                <input type="text"  name="lokasi" placeholder="Lokasi Destinasi.." className="bg-gray-300 w-full py-2 px-3 rounded-lg font-medium text-lg" />
                </div>
                <div>
                  <p className="font-poppins font-medium ">Latitude </p>
                <input type="text" name="lat" placeholder="Latitude.." className="bg-gray-300 w-full py-2 px-3 rounded-lg font-medium text-lg" />
                </div>
                <div>
                  <p className="font-poppins font-medium ">Longtitude </p>
                <input type="text"  name="long" placeholder="Longtitude.." className="bg-gray-300 w-full py-2 px-3 rounded-lg font-medium text-lg" />
                </div>
                <div>
                  <p className="font-poppins font-medium ">Harga Tiket </p>
                <input type="text"  name="harga_tiket" placeholder="Harga Tiket.." className="bg-gray-300 w-full py-2 px-3 rounded-lg font-medium text-lg" />
                </div>
                <div>
                  <p className="font-poppins font-medium ">kategori </p>
                <select  name="category_id" className="bg-gray-300 w-full py-2 px-3 rounded-lg font-semibold" >

                    {categori?.map((item)=>(
                        <option value={item.id}>{item.nama_kategori}</option>
                    ))}

                </select>
                </div>
                 <div>
                  <p className="font-poppins font-medium ">Deskripsi </p>
                <textarea rows={4} type="text"  name="deskripsi" placeholder="deskripsi.." className="bg-gray-300 w-full py-2 px-3 rounded-lg font-medium text-lg" />
                </div>
            </div>

                <div className='w-full flex flex-row gap-5'>
                    <div className='w-full' >
                    <p className="font-poppins font-medium text-lg ">Thumbnial Destinasi</p>
                    <div>
                        <label htmlFor="thumbnail" className='flex w-full h-52 border-2 border-dashed rounded-2xl border-gray-600 hover:border-blue-500 justify-center items-center ' >
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-3xl text-gray-800'><HiOutlineCloudUpload /></p>
                                <p className='text-gray-800 font-poppins '> klik untuk upload gambar</p>
                                <p className='text-gray-800 font-poppins '> JPEG, SVG, PNG, JPG or GIF (MAX 3MB)</p>
                               { thumb &&  <p className='text-green-500 font-poppins'>1 item telah terpilih</p>}
                            </div>
                           <input type="file" name="foto" id="thumbnail" onChange={(e)=>setthumb(e.target.files[0])} className='hidden' accept='image/*'/> 
                        </label>
                        
                    </div>
                    </div>




                    <div className='w-full' >
                    <p className="font-poppins font-medium text-lg ">Galeri Destinasi</p>
                    <div>
                        <label htmlFor="galeri"  className='flex w-full h-52 border-2 border-dashed rounded-2xl border-gray-600 hover:border-blue-500 justify-center items-center ' >
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-3xl text-gray-800'><HiOutlineCloudUpload /></p>
                                <p className='text-gray-800 font-poppins '> klik untuk upload gambar</p>
                                <p className='text-gray-800 font-poppins '> JPEG, SVG, PNG, JPG or GIF (MAX 4 GAMBAR)</p>
                                 { galeri.length > 0 && <p className='text-green-500 font-poppins'> {galeri.length} item telah terpilih</p>}

                            </div>
                           <input type="file" name="" id="galeri" className='hidden' onChange={(e)=>handlerchange(e)} multiple accept='image/*'/> 
                        </label>
                        
                    </div>
                    </div>

           
              </div>

              <input type="submit" value="tambahkan destinasi" className='mt-5 bg-amber-500 px-5 py-2 rounded-lg text-lg font-semibold hover:bg-amber-600 transition-all duration-300' />

       
            

            </form>
            </div>
        </div>
    )
}

export default Form;