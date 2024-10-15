import React from 'react'
import { FaChevronRight } from "react-icons/fa6";



function PopularCatagories() {
  return (
    <div className="pt-4">
        
        <div className="flex justify-between">
      <p className="font-semibold text-xl text-[#1C1B1B]">POPULAR CATAGORIES</p>
      <p className="text-base text-[#615D5E] flex justify-center items-center gap-3">VIEW ALL <FaChevronRight/></p>

    </div>


        <div className=" flex ">
            <div className="w-[192px] h-[248px] bg-[#FDF8F8] mx-4 ">
                <div className="w-full h-full flex flex-col justify-center items-center hover:scale-105">
                    <img src="novel.svg" alt="novel" />
                    <p className="pt-2 text-[#615D5E] font-semibold text-base">Novel</p>
                </div>
            </div>



            <div className="w-[192px] h-[248px] bg-[#FDF8F8] mx-4 ">
                <div className="w-full h-full flex flex-col justify-center items-center hover:scale-105">
                    <img src="poem.svg" alt="poem" />
                    <p className="pt-2 text-[#615D5E] font-semibold text-base">Poem</p>
                </div>
            </div>




            <div className="w-[192px] h-[248px] bg-[#FDF8F8] mx-4 ">
                <div className="w-full h-full flex flex-col justify-center items-center hover:scale-105">
                    <img src="story.svg" alt="story" />
                    <p className="pt-2 text-[#615D5E] font-semibold text-base">Story & Short Story</p>
                </div>
            </div>




            <div className="w-[192px] h-[248px] bg-[#FDF8F8] mx-4 ">
                <div className="w-full h-full flex flex-col justify-center items-center hover:scale-105">
                    <img src="science.svg" alt="science" />
                    <p className="pt-2 text-[#615D5E] font-semibold text-base text-center">Science & Popular Science </p>
                </div>
            </div>



            <div className="w-[192px] h-[248px] bg-[#FDF8F8] mx-4 ">
                <div className="w-full h-full flex flex-col justify-center items-center hover:scale-105">
                    <img src="history.svg" alt="history" />
                    <p className="pt-2 text-[#615D5E] font-semibold text-base">History & Philosophy</p>
                </div>
            </div>



            <div className="w-[192px] h-[248px] bg-[#FDF8F8] mx-4 ">
                <div className="w-full h-full flex flex-col justify-center items-center hover:scale-105">
                    <img src="travelogue.svg" alt="travelogue" />
                    <p className="pt-2 text-[#615D5E] font-semibold text-base">Travelogue</p>
                </div>
            </div>
            






                    


        </div>
    </div>
  )
}

export default PopularCatagories