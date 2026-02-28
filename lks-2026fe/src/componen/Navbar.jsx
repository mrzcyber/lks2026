const Navbar = ()=>{
    return(
        <div className="w-full z-10 fixed bg-white flex flex-row justify-between items-center py-5 md:py-2 md:px-10">
                <img src="/sangiran.png" alt="image" className=" h-12 " />
                <div className="flex flex-row gap-4 font-semibold md:font-bold font-poppins md:mr-44">
                    <a href="/" className="hover:text-gray-600 duration-300 transition-all  ">Beranda</a>
                    <a href="/destinasi"className="hover:text-gray-600 duration-300 transition-all  ">Katalog</a>
                    <a href="/#about"className="hover:text-gray-600 duration-300 transition-all  ">Tentang kami</a>
                </div>
                <a href="/login" className="font-poppins text-md font-semibold border-2 px-2 rounded-sm md:block hidden ">Login</a>
        </div>
    )
}

export default Navbar;