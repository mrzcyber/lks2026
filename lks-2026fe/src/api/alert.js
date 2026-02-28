import Swal from "sweetalert2";

export const Delete1 = (id)=>{
    Swal.fire({
  title: "Are you sure?",
  text: `You won't be able to revert this! ${id}`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async(result) => {

  if (result.isConfirmed) {
   try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}dash/destinasi/delete/${id}`,{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("token")}`
        },
        method:"DELETE"
    })
    if(res.status === 200){
        Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
    }
    else {
          throw new Error("Gagal menghapus data");
        }


   } catch (error) {
    Swal.fire({
          title: "Error!",
          text: "Terjadi kesalahan saat menghapus data.",
          icon: "error"
        });
        console.log(error)
   }
  }
});

}

export const Create = async()=>{
 
const { value: data } = await Swal.fire({
  title: "Tambahkan Kategori Destinasi",
  input: "text",
  inputLabel: "kategori wisata",
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return "You need to write something!";
    }
  }
});
if (data) {
  try {
    async function create  (){
      await fetch(`${import.meta.env.VITE_API_URL}dash/kategori/create`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify({
          nama_kategori:data
        })

      })
    }
    create()
    
  } catch (error) {
    console.log(error)
  }
  Swal.fire(`kategori ${data} telah ditambahkan`);
}
}
export const Edit = async(id)=>{
  const res = await fetch(`${import.meta.env.VITE_API_URL}dash/kategori/${id}`,{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${localStorage.getItem("token")}`
        }
      })
  const kategori = await res.json();
  const inputValue = kategori.nama_kategori;
 
const { value: data } = await Swal.fire({
  title: "Edit Kategori Destinasi",
  input: "text",
  inputLabel: "kategori wisata",
  inputValue,
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return "You need to write something!";
    }
  }
});
if (data) {
  try {
    async function create  (){
      await fetch(`${import.meta.env.VITE_API_URL}dash/kategori/edit/${id}`,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify({
          nama_kategori:data
        })

      })
    }
    create()
    
  } catch (error) {
    console.log(error)
  }
  Swal.fire(`kategori telah di perbarui `);
}
}

export const Deletekategori = async (id)=>{
    Swal.fire({
  title: "Are you sure?",
  text: `You won't be able to revert this! ${id}`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then(async(result) => {

  if (result.isConfirmed) {
   try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}dash/kategori/delete/${id}`,{
        headers:{
            "Authorization":`Bearer ${localStorage.getItem("token")}`
        },
        method:"DELETE"
    })
    if(res.status === 200){
        Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
    }
    else {
          throw new Error("Gagal menghapus data");
        }


   } catch (error) {
    Swal.fire({
          title: "Error!",
          text: "Terjadi kesalahan saat menghapus data.",
          icon: "error"
        });
        console.log(error)
   }
  }
});

}