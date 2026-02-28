
import { useState } from "react";
import { useNavigate } from "react-router";
import { Signin } from "../api/api";



const Login = ()=>{
    const [email,setemail] = useState();
    const [pass,setpass] = useState();

    const navigate = useNavigate();


    const handlersubmite= async(e)=>{
        e.preventDefault();
        const data = {
            email:email,
            password:pass
        }
        const ress = await Signin(data);
        // console.log(ress.access_token)
        localStorage.setItem('token',ress.access_token);
        navigate('/dashboard')

}

return(
    <div className="flex justify-center flex-col items-center h-screen bg-gray-500 ">
        <p className="text-4xl font-poppins font-bold text-white mb-10">Login</p>
            <div className=" flex flex-col bg-white rounded-xl items-center justify-center py-20 px-5  ">
                <p className="text-xl font-poppins font-semibold text-gray-600 mb-2">Masukan Email</p>
                <form action="" onSubmit={(e)=>handlersubmite(e)}>
                <input type="email" name="email" id="" placeholder="email.."  onChange={(e)=>setemail(e.target.value)} className="px-4 pr-36 py-2 text-black font-poppins font-medium border-2 border-gray-600 rounded-2xl mb-10"/>

                <p className="text-xl font-poppins font-semibold text-gray-600 mb-2">Masukan Password</p>
                <input type="password" name="password" id="" placeholder="password..." onChange={(e)=>setpass(e.target.value)} className="px-4 pr-36 py-2 text-black font-poppins font-medium border-2 border-gray-600 rounded-2xl"/>

                <input type="submit" value={"login"} className=" flex w-full justify-center items-center bg-gray-500 py-2 text-xl font-bold font-poppins rounded-xl hover:bg-gray-600 cursor-pointer mt-5" />
</form>
            </div>
    </div>
)
}

export default Login;

