import React from "react";
import { BiChevronRight ,BiSearch,BiMenu,BiChevronDown} from "react-icons/bi";


//small device
const NavSm = () =>{
    return(
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                <h3 className = "text-x1 font-bold">It All starts Here!</h3>
                <span className= "text-gray-400 text-xs flex item-center">Delhi<BiChevronRight/></span>
                </div>
                <div className="w-8 h-8">
                    <BiSearch className="w-full h-full"/>
                </div>
                
            </div>
        </>
    );
};

//medium device
const NavMd = () =>{
    return (
    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
        <BiSearch />
        <input type="search" className="w-full bg-transparent border-none focus:outline-none"
             placeholder="Search for movies, events, Plays, Sports and Activities." />
    </div>
    )
    
};
//large device
const NavLg = () =>{
    return (
        <>
        <div className="container mx-auto px-4 flex items-center justify-between ">
            <div className="flex items-center w-1/2 gap-3">
                <div className="w-12 h-12 ">
                   <img  src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" 
                   alt="logo" 
                    className="w-full h-full"/>
                </div>
                <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                    <BiSearch />
                     <input type="search" className="w-full bg-transparent border-none focus:outline-none"
                     placeholder="Search for movies, events, Plays, Sports and Activities." />
                </div>
            </div>
            <div className="flex items-center gap-3  ">
                <span className= "text-gray-300 text-xs flex item-center cursor-pointer hover:text-white">Delhi<BiChevronDown/></span>

                <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">Sign in
                </button>
                <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full"/>
                 </div>
            </div>
            
        </div>
        </>
    );
};

const Navbar = () =>{
    return (
        <>
            <nav className="bg-bms-700 p-4" >
                <div className="md:hidden ">
                    {/*mobile screen */}
                    <NavSm />
                </div>
                <div className ="hidden md:flex lg:hidden">
                    {/*medium/tab screen */}
                    < NavMd />
                </div>
                <div className ="hidden w-full lg:flex">
                    {/*large screen */}
                    <NavLg />
                </div>
            </nav>
        </>
    );
};

export default Navbar;