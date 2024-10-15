import React from "react";
import { FaYoutube } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdOutlinePhoneAndroid } from "react-icons/md";


function Footer() {
  return (
    <div className="w-full h-[552px] px-10 bg-gradient-to-b from-[#0f0c0d] to-[rgba(15,12,13,0.751)] text-white flex justify-between items-center">
  
  <div className="w-[305px] h-80">
    <h1 className="font-semibold text-2xl text-white">About us</h1>
    <p className="pt-4 text-sm text-white">
     It can be said that more than 75% of the best
     works produced in Malayalam literature 
     during the last 79 years were published by SPCS. 
    </p>
  </div>

  <div className="w-[222px] h-80">
    <h1 className="font-semibold text-2xl text-white">Connect with us</h1>
    <p className="pt-4 text-[#7E7577] text-sm flex gap-2 hover:text-white"><FaYoutube className="text-xl"/> Youtube</p>
    <p className="pt-4 text-[#7E7577] text-sm flex gap-2 hover:text-white"><RiFacebookBoxFill className="text-xl"/> Facebook</p>
    <p className="pt-4 text-[#7E7577] text-sm flex gap-2 hover:text-white"><FaInstagram className="text-xl"/> Instagram</p>


  </div>

  <div className="w-[222px] h-80">
  <h1 className="font-semibold text-2xl text-white">Connect with us</h1>
  <p className="pt-4 text-[#7E7577] text-sm flex gap-2 hover:text-white">Pre-Publication</p>
  <p className="pt-4 text-[#7E7577] text-sm flex gap-2 hover:text-white">Archives</p>
  <p className="pt-4 text-[#7E7577] text-sm flex gap-2 hover:text-white">Bulletin</p>
  <p className="pt-4 text-[#7E7577] text-sm flex gap-2 hover:text-white">Catalogue</p>
  <p className="pt-4 text-[#7E7577] text-sm flex gap-2 hover:text-white">Feedback</p>
  <p className="pt-4 text-[#7E7577] text-sm flex gap-2 hover:text-white">Return & Refund Policy</p>
  <p className="pt-4 text-[#7E7577] text-sm flex gap-2 hover:text-white">Privacy Policy</p>
  <p className="pt-4 text-[#7E7577] text-sm flex gap-2 hover:text-white">Terms & Conditions</p>


  </div>

  <div className="w-[184px] h-80 text-white">
  <h1 className="font-semibold text-2xl text-white">Contact us</h1>
  <p className="pt-4 text-white text-sm flex gap-2 leading-6 pb-4">SPCS<br></br>
  Kottayam, Head Office ,
  Kottayam - 686001.
  </p>
  <p className="flex  text-sm gap-2 pb-4"><IoMail className="text-2xl"/> spcsktm@gmail.com</p>
  <div className="flex  text-sm gap-2 pb-4"><img src="telephone.svg" alt="telephone" /> <p>0481- 2301812</p></div>
  <p className="text-sm ps-8 pb-4">0481- 2564111</p>
  <p className="flex  text-sm gap-4"><MdOutlinePhoneAndroid className="text-2xl"/>+919048397101</p>
  </div>

</div>



  );
}

export default Footer;
