import { useState,useEffect } from 'react';
import { HiOutlineCloudUpload } from 'react-icons/hi';
import { CreateDestinasi, EditDestinasi } from '../api/api';
import { useParams } from 'react-router';
import { Desh } from '../api/api';
import { useNavigate } from 'react-router';


const Edit = ()=>{
    const [thumb,setthumb]= useState();
    const [galeri,setgaleri]= useState([]);
    const [data,setdata] = useState()
    const [prev,setprev] = useState();
    const [galeriprev,setgaleriprev]=useState();
    const [nama,setnama]=useState();
    const [deskripsi,setdesk]=useState();
    const [lokasi,setlok]=useState();
    const [lat,setlat]=useState();
    const [long,setlong]=useState();
    const [foto,setfoto]=useState();
    const [category_id,setcategory]=useState();
    const [harga_tiket,settiket]=useState();
    const [gale,setgale]=useState();


    let navigate = useNavigate(); 
    let params = useParams();
    const id = params.id

    const handlersubmit = async (e)=>{
        e.preventDefault();

        const formData = new FormData();

       const data = {
        nama,
        deskripsi,
        lokasi,
        lat,
        long,
        category_id,
        harga_tiket
       }

       Object.entries(data).forEach(([key,value])=>{
        if(value !== undefined && value !== null && value !== ""){
            formData.append(key,value)
        }
       })

       if(foto) formData.append('foto',foto)

        if(gale && gale.length>0){
            gale.forEach((file)=>formData.append('galeri[]',file))
        }

        const res = await EditDestinasi(formData,id);
        if(res.status === 200){
            navigate('/dashboard')
        }
        


    }
    

        useEffect(()=>{
            const ress = async ()=>{
                const value = await Desh(id); 
                setdata(value);
                setprev(value.foto)
                setgaleriprev(value.galeri)
            }
            ress();
            
        },[])
        // console.log(galeriprev); 
    
    const handlerchange = (e)=>{
        const files = Array.from(e.target.files);
        let image = [];
        let actualimage = [];
        files.forEach((item)=>{
            const file = URL.createObjectURL(item)
            image.push(file)
            actualimage.push(item);
        })
      
        setgaleri(image.slice(0,4));
        setgale(actualimage.slice(0,4));
       
    }
    // console.log(galeri)
    
//     const handlersubmit = async (e)=>{
//         e.preventDefault();
//         const formData = new FormData(e.target)

//         galeri.forEach((file)=>{
//         formData.append('galeri[]',file);
//         })
// //         for (let [key, value] of formData.entries()) {
// //   console.log(`${key}:`, value);
// // }

//         const ress = await CreateDestinasi(formData);
//         console.log(ress)

//     }

    const handlerthumb = (e)=>{
        e.preventDefault();
        const file = URL.createObjectURL(e.target.files[0])
        setthumb(file);
        setfoto(e.target.files[0])


    } 



    return(
        <div className="w-full  p-10 py-20 flex flex-col ">
            <p className="text-2xl font-poppins font-semibold ">Tambah Destinasi</p>
            <div className="w-full bg-white p-5 rounded-xl h-full ">
            <form action="" encType="multipart/form-data" onSubmit={(e)=>handlersubmit(e)}> 
            <div className="w-full grid grid-cols-2 gap-5">
                <div>
                  <p className="font-poppins font-medium ">Nama Destinasi</p>
                <input type="text" name="nama" defaultValue={data?.nama} onChange={(e)=>setnama(e.target.value)} placeholder="Nama Destinasi.." className="bg-gray-300 w-full py-2 px-3 rounded-lg font-medium text-lg" />
                </div>
                <div>
                  <p className="font-poppins font-medium ">Lokasi </p>
                <input type="text" defaultValue={data?.lokasi} name="lokasi" onChange={(e)=>setlok(e.target.value)}  placeholder="Lokasi Destinasi.." className="bg-gray-300 w-full py-2 px-3 rounded-lg font-medium text-lg" />
                </div>
                <div>
                  <p className="font-poppins font-medium ">Latitude </p>
                <input type="text" name="lat" defaultValue={data?.lat} onChange={(e)=>setlat(e.target.value)}  placeholder="Latitude.." className="bg-gray-300 w-full py-2 px-3 rounded-lg font-medium text-lg" />
                </div>
                <div>
                  <p className="font-poppins font-medium ">Longtitude </p>
                <input type="text"  name="long" defaultValue={data?.long} onChange={(e)=>setlong(e.target.value)}  placeholder="Longtitude.." className="bg-gray-300 w-full py-2 px-3 rounded-lg font-medium text-lg" />
                </div>
                <div>
                  <p className="font-poppins font-medium ">Harga Tiket </p>
                <input type="text"name="harga_tiket" defaultValue={data?.harga_tiket} onChange={(e)=>settiket(e.target.value)}  placeholder="Harga Tiket.." className="bg-gray-300 w-full py-2 px-3 rounded-lg font-medium text-lg" />
                </div>
                <div>
                  <p className="font-poppins font-medium ">kategori </p>
                <select  name="category_id" defaultValue={data?.category_id} onChange={(e)=>setcategory(e.target.value)}   className="bg-gray-300 w-full py-2 px-3 rounded-lg font-semibold" >
                    <option value={2}>sendang</option>
                    <option value={4}>beach</option>
                    <option value={2}>sendang</option>
                </select>
                </div>
                 <div>
                  <p className="font-poppins font-medium ">Deskripsi </p>
                <textarea rows={4} type="text" defaultValue={data?.deskripsi} onChange={(e)=>setdesk(e.target.value)}   name="deskripsi" placeholder="deskripsi.." className="bg-gray-300 w-full py-2 px-3 rounded-lg font-medium text-lg" />
                </div>
            </div>

                <div className='w-full flex flex-row gap-5'>
                    <div className='w-full' >
                    <p className="font-poppins font-medium text-lg ">Thumbnial Destinasi</p>
                    <label htmlFor='thumbnail' className='w-full relative'>

                     { prev?  <div className='w-full overflow-hidden rounded-xl h-52 ' >
                            <img src={thumb ? thumb : `${import.meta.env.VITE_API}storage/${prev}`} alt="image" className='w-full h-full object-cover object-center'  />
                            
                        </div>
                            :
                        <div className='flex w-full h-52 border-2 border-dashed rounded-2xl border-gray-600 hover:border-blue-500 justify-center items-center ' >
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-3xl text-gray-800'><HiOutlineCloudUpload /></p>
                                <p className='text-gray-800 font-poppins '> klik untuk upload gambar</p>
                                <p className='text-gray-800 font-poppins '> JPEG, SVG, PNG, JPG or GIF (MAX 3MB)</p>
                               
                            </div>

                        </div>
                        }
                                        {prev? <div className="w-36 h-11 px-6 py-3 flex flex-row justify-center top-1/2 left-1/3 items-center absolute bg-white rounded-full font-poppins font-semibold text-xl gap-1 shadow-xl shadow-white"> Replace </div> :""}

                                        
                    </label>
                           <input type="file" name="foto" id="thumbnail" onChange={(e)=>handlerthumb(e)} className='hidden' accept='image/*'/> 

                    </div>




                    <div className='w-full' >
                    <p className="font-poppins font-medium text-lg ">Galeri Destinasi</p>
                    <div>
                        <label htmlFor="galeri"  className='flex w-full h-52 border-2 border-dashed rounded-2xl border-gray-600 hover:border-blue-500 justify-center items-center ' >
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-3xl text-gray-800'><HiOutlineCloudUpload /></p>
                                <p className='text-gray-800 font-poppins '> klik untuk upload gambar</p>
                                     <div className='w-full flex flex-row gap-5 h-24 items-center justify-center'>
                                   { galeri.length>0 ? galeri?.map((item,index)=>(
                                        <div key={index} className='w-full h-20 overflow-hidden rounded-lg' ><img src={item} alt="image" className='w-full h-full object-cover object-center' /></div>
                                    )) :galeriprev?.map((item,index)=>(
                                        <div key={index} className='w-full h-20 overflow-hidden rounded-lg' ><img src={`${import.meta.env.VITE_API}storage/${item.nama_galeri}`} alt="image" className='w-full h-full object-cover object-center' /></div>
                                    ))
                                }
                                </div>
                                <p className='text-gray-800 font-poppins '> JPEG, SVG, PNG, JPG or GIF (MAX 4 GAMBAR)</p>
                                 { galeri.length > 0 && <p className='text-green-500 font-poppins'> {galeri.length} item telah terpilih</p>}

                            </div>
                           <input type="file" name="" id="galeri" className='hidden' onChange={(e)=>handlerchange(e)} multiple accept='image/*'/> 
                        </label>
                        
                    </div>
                    </div>

           
              </div>

              <input type="submit" value="edit destinasi" className='mt-5 bg-amber-500 px-5 py-2 rounded-lg text-lg font-semibold hover:bg-amber-600 transition-all duration-300' />
              <a href="/dashboard" className='ml-5 bg-gray-500 px-5 py-3 rounded-lg text-lg font-semibold hover:bg-gray-600 transition-all duration-300'> Batal</a>

       
            

            </form>
            </div>
        </div>
    )
}

export default Edit;