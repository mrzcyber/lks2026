import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";


const Footer= ()=>{
    return(
        
        <div className="w-full flex flex-col bg-gray-900 px-10 md:px-20 ">
        <div className="w-full py-5 flex flex-col md:flex-row justify-between items-start gap-5 ">
                    <div className="w-80"><img src="/sangiran.png" alt="" /> </div>
                    <div className="flex flex-col  w-80">
                        <p className="text-2xl font-poppins text-white font-semibold">Destinasi Sragen</p>
                        <p className="text-lg text-gray-400 font-poppins font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, numquam voluptas consectetur quae a quisquam.</p>
                         </div>
                    <div className="text-md font-poppins font-medium w-80 text-gray-400 flex flex-col ">
                        <p className="text-white font-semibold text-2xl ">Kontak</p>
                        <p className=" flex flex-row gap-2"><FaPhoneAlt />  08580983</p>    
                        <p className=" flex flex-row gap-2"> <FaLocationDot />  Sragen Jawa Tengah</p>    
                        <p className=" flex flex-row gap-2"> <IoMail />  Sragen@gmail.com</p>
                        <div className="flex flex-row gap-2 text-lg mt-2">
                        <a href=""><IoLogoWhatsapp /></a>
                        <a href=""><GrInstagram /></a>
                        <a href=""><FaFacebookSquare /></a>
                        </div>    
                     </div>

        </div>
        <p className="py-5 text-gray-300 font-poppins text-sm font-medium border-t-2 ">copyright@Sragen</p>
        </div>

    )
}

export default Footer;