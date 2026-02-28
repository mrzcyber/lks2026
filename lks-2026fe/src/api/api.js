export const Signin = async( data)=>{
   
    try {
        const res =  await fetch(`${import.meta.env.VITE_API_URL}login`,{
        headers:{
            "Content-Type":"application/json"
        },
        method:"POST",
        body:JSON.stringify(data)
    })

    const value = await res.json()

    return value
    } catch (error) {
        console.log(error)
    }
}

export const Desh = async(id)=>{
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}dash/destinasi${id ? `/${id}`:""}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            }
        })
        if (res.status === 401){
            localStorage.removeItem("token")
            window.location.href = "/login"
        }
        const value = await res.json()
        return value;
        
        
    } catch (error) {
        console.log(error)
    }
}

export const CreateDestinasi = async (data)=>{
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}dash/destinasi/create`,{
            method:"POST",
            headers:{
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            },
            body:data
        })

        return res.json();

        
    } catch (error) {
        console.log(error)
    }
}

export const EditDestinasi = async (data,id)=>{
   
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}dash/destinasi/edit/${id}`,{
            method:"PUT",
             headers:{
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            },
            body:data

        })
        return res.json()

    } catch (error) {
        console.log(error)
    }

}

export const Getkategori = async()=>{

    try{
  const res = await fetch(`${import.meta.env.VITE_API_URL}dash/kategori`,{
        method:"GET",
              headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${localStorage.getItem("token")}`
        },
    })
    const data = await res.json()
    return data
}catch(error){
    console.log(error)
}

}

export const GetDestinasi = async (query)=>{
    try {
          const res = await fetch(`${import.meta.env.VITE_API_URL}destinations?q=${query}`,{
        method:"GET",
              headers:{
          "Content-Type":"application/json",
        },
    })
    const data = await res.json();
    console.log(data)
    return data
    } catch (error) {
        console.log(error)
    }
}
export const DestinasiId = async (id)=>{
    try {
          const res = await fetch(`${import.meta.env.VITE_API_URL}destinations/${id}`,{
        method:"GET",
              headers:{
          "Content-Type":"application/json",
        },
    })
    const data = await res.json();
    return data
    } catch (error) {
        console.log(error)
    }
}
export const DestinasiKategori = async (id)=>{
    if(!id)return;
    try {
          const res = await fetch(`${import.meta.env.VITE_API_URL}destinations/kategori/${id}`,{
        method:"GET",
              headers:{
          "Content-Type":"application/json",
        },
    })
    const data = await res.json();
    return data
    } catch (error) {
        console.log(error)
    }
}

