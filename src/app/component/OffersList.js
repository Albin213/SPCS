import React from 'react'
import { FaChevronRight } from "react-icons/fa6";


function OffersList() {
  return (
    <div className="pt-4">
    <div className="flex justify-between">
      <p className="font-semibold text-xl text-[#1C1B1B]">OFFER LIST</p>
      <p className="text-base text-[#615D5E] flex justify-center items-center gap-3">VIEW ALL <FaChevronRight/></p>

    </div>
    <div className="flex">
        <div className="w-[176px] h-[264px] bg-[#FDF8F8] mx-4 ">
            <div className="w-full h-[264px] ">
            <img src="offer1.svg" alt="offer1" className="w-full h-full object-cover " />
            </div>
        </div>


        <div className="w-[176px] h-[264px] bg-[#FDF8F8] mx-4 ">
            <div className="w-full full relative ">
            <img src="offer2.svg" alt="offer2" className="w-full h-full object-cover " />
            <div className="w-[160px] h-[115px] bg-[#313030] rounded-xl border-2 border-[#CFC4C6] absolute bottom-2 left-2 flex flex-col justify-center items-center text-[#F4F0EF]  ">
             <p className="text-2xl">UP TO</p> 
             <p className="text-2xl">50% OFF</p>  
             <p className="text-sm font-semibold">Shop Now</p>
            </div>
            </div>
        </div>

        <div className="w-[176px] h-[264px] bg-[#FDF8F8] mx-4 ">
            <div className="w-full h-[264px] ">
            <img src="offer1.svg" alt="offer1" className="w-full h-full object-cover " />
            </div>
        </div>

        <div className="w-[176px] h-[264px] bg-[#FDF8F8] mx-4 ">
            <div className="w-full h-[264px] ">
            <img src="offer1.svg" alt="offer1" className="w-full h-full object-cover " />
            </div>
        </div>

        <div className="w-[176px] h-[264px] bg-[#FDF8F8] mx-4 ">
            <div className="w-full h-[264px] ">
            <img src="offer1.svg" alt="offer1" className="w-full h-full object-cover " />
            </div>
        </div>

        <div className="w-[176px] h-[264px] bg-[#FDF8F8] mx-4 ">
            <div className="w-full h-[264px] ">
            <img src="offer1.svg" alt="offer1" className="w-full h-full object-cover " />
            </div>
        </div>

    </div>
</div>
  )
}

export default OffersList