"use client"
import React from "react";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  return (
    <div className="sticky top-0 z-50">
      <div className="w-screen h-24 bg-[#FDF8F8] flex px-11 border-b-[1px] border-[#CFC4C6] ">
        <div className="w-[55%] h-full  flex">
        <div className="w-1/6 h-full flex justify-center items-center ">
            <img src="/spcs-logo.svg" className="w-full" alt="logo" />
        </div>
        <div className="w-full h-full ">
            <ul className="w-full h-full text-[#1C1B1B] flex items-center justify-evenly font-semibold text-sm ">
                <li>BOOK STORE</li>
                <li>E-BOOKS</li>
                <li>AUDIO BOOKS</li>
                <li>GIFT CARDS</li>
                <li>CONTACT US</li>

            </ul>
        </div>
        </div>
        <div className="w-[45%] h-full  flex justify-center items-center ps-11">
        <div className="w-80 h-12 bg-[#ECE7E7] rounded-lg flex justify-center items-center ps-4">
            <IoSearch className="text-[#4C4547] size-6"/>
          <input
           type="search"
           className="w-80 h-full mx-4 outline-none  bg-[#ECE7E7] rounded-lg placeholder:text-[#4C4547] placeholder:font-light text-xs"
           placeholder="Search for Book, Authors and more"
         />
        </div>
        <div className="w-full h-full flex items-center justify-evenly">
            <div className="p-1 rounded-lg flex flex-col gap-1 justify-center items-center hover:bg-[#F1EDEC]">
                <img src="/user.svg" className="text-[#0F0C0D] size-6" alt="user" />
                 <p className="text-[#1C1B1B] font-medium text-xs">Profile</p>
            </div>
            <div className="p-1 rounded-lg flex flex-col gap-1 justify-center items-center  hover:bg-[#F1EDEC]">
                <img src="/wishlist.svg" className="text-[#0F0C0D] size-6" alt="user" />
                 <p className="text-[#1C1B1B] font-medium text-xs">Wishlist</p>
            </div>
            <div className="p-1 rounded-lg flex flex-col gap-1 justify-center items-center  hover:bg-[#F1EDEC]">
                <img src="/cart.svg" className="text-[#0F0C0D] size-6" alt="user" />
                 <p className="text-[#1C1B1B] font-medium text-xs">Cart</p>
            </div>

        </div>
        </div>

      </div>
      <div className="w-screen h-14  bg-[#F1EDEC] flex justify-between items-center px-[72px]">
        <div className="w-[410px] h-10 ms-4 flex  items-center">
            <ul className="w-full h-full font-medium text-sm text-[#4C4547] flex justify-between items-center"> 
                <li>Shop by category</li>
                <li>Sales</li>
                <li>Programs</li>
                <li>About us</li>
            </ul>
        </div>
        <div className="w-[391px] h-10 flex justify-between items-center text-[#4C4547] font-medium text-sm">
            <div className="w-[200px] flex justify-between items-center">
            <p>Krithi</p>  
            <p>Akshara Museum</p>  
            </div>
            <button className="w-[162px] h-10  bg-white rounded-2xl flex justify-center items-center gap-1">
                <img src="/playstore.svg" alt="playstore" />
                Download App
            </button>   

        </div>
      </div>
    </div>
  );
}

export default Navbar;
