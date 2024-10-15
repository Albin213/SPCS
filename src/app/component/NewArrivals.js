import React from "react";
import { IoCart } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

function NewArrivals() {
  return (
    <div className="pt-4">
      <div className="flex justify-between">
        <p className="font-semibold text-xl text-[#1C1B1B]">NEW ARRIVALS</p>
        <p className="text-base text-[#615D5E] flex justify-center items-center gap-3">VIEW ALL <FaChevronRight/></p>
      </div>
      <div className="bg-white flex gap-4">
        <div className="group relative w-[208px] h-[372px] bg-[#FDF8F8] p-4 shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out border border-transparent group-hover:border-[#0F0C0D]">
          {/* Hover overlay div */}
          <div className="absolute w-full h-36 px-4 bg-white left-0 bottom-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
            <div className="w-full h-10 mt-4 flex justify-between">
              <button className="w-[127px] h-full bg-white text-[#0F0C0D] font-semibold border-2 border-[#0F0C0D] rounded-lg text-xs flex justify-center items-center hover:bg-[#0F0C0D] hover:text-white hover:border-white">
                <IoCart className="text-xl" />
                ADD TO CART
              </button>
              <button className="w-10 h-full flex justify-center items-center text-2xl text-[#0F0C0D] font-semibold border-2 border-[#0F0C0D] rounded-lg   ">
                <IoBookmarkOutline />
              </button>
            </div>
            <button className="w-full h-9 mt-2 flex justify-center items-center bg-[#0F0C0D] text-white font-semibold text-sm rounded-lg hover:text-[#0F0C0D] hover:bg-[#979696ee]">
              BUY NOW
            </button>
            <div className="flex items-center pt-2 gap-4">
              <p className="text-[#0F0C0D] font-semibold text-sm">₹ 479</p>
              <p className="text-[#4C4547] text-xs line-through">₹ 999</p>
              <p className="text-[#BA1A1A] text-xs">(52% OFF)</p>
            </div>
          </div>

          {/* Image and content */}
          <div className="relative z-10">
            <div className="w-full h-[264px]">
              <img
                src="bookimg.svg"
                alt="book"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[#313030] font-medium text-sm pt-2">
                Oru Swavargaanuragiude Jeevithanubhavangal
              </p>
              <div className="flex items-center pt-2 gap-4">
                <p className="text-[#0F0C0D] font-semibold text-sm">₹ 479</p>
                <p className="text-[#4C4547] text-xs line-through">₹ 999</p>
                <p className="text-[#BA1A1A] text-xs">(52% OFF)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative w-[208px] h-[372px] bg-[#FDF8F8] p-4 shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out border border-transparent group-hover:border-[#0F0C0D]">
          {/* Hover overlay div */}
          <div className="absolute w-full h-36 px-4 bg-white left-0 bottom-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
            <div className="w-full h-10 mt-4 flex justify-between">
              <button className="w-[127px] h-full bg-white text-[#0F0C0D] font-semibold border-2 border-[#0F0C0D] rounded-lg text-xs flex justify-center items-center">
                <IoCart className="text-xl" />
                ADD TO CART
              </button>
              <button className="w-10 h-full flex justify-center items-center text-2xl text-[#0F0C0D] font-semibold border-2 border-[#0F0C0D] rounded-lg">
                <IoBookmarkOutline />
              </button>
            </div>
            <button className="w-full h-9 mt-2 flex justify-center items-center bg-[#0F0C0D] text-white font-semibold text-sm rounded-lg">
              BUY NOW
            </button>
            <div className="flex items-center pt-2 gap-4">
              <p className="text-[#0F0C0D] font-semibold text-sm">₹ 479</p>
              <p className="text-[#4C4547] text-xs line-through">₹ 999</p>
              <p className="text-[#BA1A1A] text-xs">(52% OFF)</p>
            </div>
          </div>

          {/* Image and content */}
          <div className="relative z-10">
            <div className="w-full h-[264px]">
              <img
                src="bookimg.svg"
                alt="book"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[#313030] font-medium text-sm pt-2">
                Oru Swavargaanuragiude Jeevithanubhavangal
              </p>
              <div className="flex items-center pt-2 gap-4">
                <p className="text-[#0F0C0D] font-semibold text-sm">₹ 479</p>
                <p className="text-[#4C4547] text-xs line-through">₹ 999</p>
                <p className="text-[#BA1A1A] text-xs">(52% OFF)</p>
              </div>
            </div>
          </div>
        </div>



        
        <div className="group relative w-[208px] h-[372px] bg-[#FDF8F8] p-4 shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out border border-transparent group-hover:border-[#0F0C0D]">
          {/* Hover overlay div */}
          <div className="absolute w-full h-36 px-4 bg-white left-0 bottom-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
            <div className="w-full h-10 mt-4 flex justify-between">
              <button className="w-[127px] h-full bg-white text-[#0F0C0D] font-semibold border-2 border-[#0F0C0D] rounded-lg text-xs flex justify-center items-center">
                <IoCart className="text-xl" />
                ADD TO CART
              </button>
              <button className="w-10 h-full flex justify-center items-center text-2xl text-[#0F0C0D] font-semibold border-2 border-[#0F0C0D] rounded-lg">
                <IoBookmarkOutline />
              </button>
            </div>
            <button className="w-full h-9 mt-2 flex justify-center items-center bg-[#0F0C0D] text-white font-semibold text-sm rounded-lg">
              BUY NOW
            </button>
            <div className="flex items-center pt-2 gap-4">
              <p className="text-[#0F0C0D] font-semibold text-sm">₹ 479</p>
              <p className="text-[#4C4547] text-xs line-through">₹ 999</p>
              <p className="text-[#BA1A1A] text-xs">(52% OFF)</p>
            </div>
          </div>

          {/* Image and content */}
          <div className="relative z-10">
            <div className="w-full h-[264px]">
              <img
                src="bookimg.svg"
                alt="book"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[#313030] font-medium text-sm pt-2">
                Oru Swavargaanuragiude Jeevithanubhavangal
              </p>
              <div className="flex items-center pt-2 gap-4">
                <p className="text-[#0F0C0D] font-semibold text-sm">₹ 479</p>
                <p className="text-[#4C4547] text-xs line-through">₹ 999</p>
                <p className="text-[#BA1A1A] text-xs">(52% OFF)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative w-[208px] h-[372px] bg-[#FDF8F8] p-4 shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out border border-transparent group-hover:border-[#0F0C0D]">
          {/* Hover overlay div */}
          <div className="absolute w-full h-36 px-4 bg-white left-0 bottom-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
            <div className="w-full h-10 mt-4 flex justify-between">
              <button className="w-[127px] h-full bg-white text-[#0F0C0D] font-semibold border-2 border-[#0F0C0D] rounded-lg text-xs flex justify-center items-center">
                <IoCart className="text-xl" />
                ADD TO CART
              </button>
              <button className="w-10 h-full flex justify-center items-center text-2xl text-[#0F0C0D] font-semibold border-2 border-[#0F0C0D] rounded-lg">
                <IoBookmarkOutline />
              </button>
            </div>
            <button className="w-full h-9 mt-2 flex justify-center items-center bg-[#0F0C0D] text-white font-semibold text-sm rounded-lg">
              BUY NOW
            </button>
            <div className="flex items-center pt-2 gap-4">
              <p className="text-[#0F0C0D] font-semibold text-sm">₹ 479</p>
              <p className="text-[#4C4547] text-xs line-through">₹ 999</p>
              <p className="text-[#BA1A1A] text-xs">(52% OFF)</p>
            </div>
          </div>

          {/* Image and content */}
          <div className="relative z-10">
            <div className="w-full h-[264px]">
              <img
                src="bookimg.svg"
                alt="book"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[#313030] font-medium text-sm pt-2">
                Oru Swavargaanuragiude Jeevithanubhavangal
              </p>
              <div className="flex items-center pt-2 gap-4">
                <p className="text-[#0F0C0D] font-semibold text-sm">₹ 479</p>
                <p className="text-[#4C4547] text-xs line-through">₹ 999</p>
                <p className="text-[#BA1A1A] text-xs">(52% OFF)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative w-[208px] h-[372px] bg-[#FDF8F8] p-4 shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out border border-transparent group-hover:border-[#0F0C0D]">
          {/* Hover overlay div */}
          <div className="absolute w-full h-36 px-4 bg-white left-0 bottom-0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-20">
            <div className="w-full h-10 mt-4 flex justify-between">
              <button className="w-[127px] h-full bg-white text-[#0F0C0D] font-semibold border-2 border-[#0F0C0D] rounded-lg text-xs flex justify-center items-center">
                <IoCart className="text-xl" />
                ADD TO CART
              </button>
              <button className="w-10 h-full flex justify-center items-center text-2xl text-[#0F0C0D] font-semibold border-2 border-[#0F0C0D] rounded-lg">
                <IoBookmarkOutline />
              </button>
            </div>
            <button className="w-full h-9 mt-2 flex justify-center items-center bg-[#0F0C0D] text-white font-semibold text-sm rounded-lg">
              BUY NOW
            </button>
            <div className="flex items-center pt-2 gap-4">
              <p className="text-[#0F0C0D] font-semibold text-sm">₹ 479</p>
              <p className="text-[#4C4547] text-xs line-through">₹ 999</p>
              <p className="text-[#BA1A1A] text-xs">(52% OFF)</p>
            </div>
          </div>

          {/* Image and content */}
          <div className="relative z-10">
            <div className="w-full h-[264px]">
              <img
                src="bookimg.svg"
                alt="book"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[#313030] font-medium text-sm pt-2">
                Oru Swavargaanuragiude Jeevithanubhavangal
              </p>
              <div className="flex items-center pt-2 gap-4">
                <p className="text-[#0F0C0D] font-semibold text-sm">₹ 479</p>
                <p className="text-[#4C4547] text-xs line-through">₹ 999</p>
                <p className="text-[#BA1A1A] text-xs">(52% OFF)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative w-[208px] h-[372px] bg-[#FDF8F8] p-4 shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out border border-transparent group-hover:border-[#0F0C0D] overflow-hidden">
          <div className="absolute w-20 h-12 px-4 bg-[#FDF8F8] -right-3 top-1 text-white rotate-45 z-20">
            <div className="w-full h-full text-xl text-[#0F0C0D] flex justify-center items-center">
              <FaBookmark className="-rotate-45 text-2xl" />
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-full h-[264px]">
              <img
                src="bookimg.svg"
                alt="book"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-[#313030] font-medium text-sm pt-2">
                Oru Swavargaanuragiude Jeevithanubhavangal
              </p>
              <div className="flex items-center pt-2 gap-4">
                <p className="text-[#0F0C0D] font-semibold text-sm">₹ 479</p>
                <p className="text-[#4C4547] text-xs line-through">₹ 999</p>
                <p className="text-[#BA1A1A] text-xs">(52% OFF)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
