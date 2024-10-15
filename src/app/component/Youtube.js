// import { Input } from 'postcss'
// import React from 'react'

// function Youtube() {
//   return (
//     <div className="w-full h-full bg-[#F1EDEC] rounded-2xl p-4">
//         <p className="text-sm text-[#4B4848] leading-5">എസ്.പി.സി.എസ്. സ്വാഗതഗാനം - സംഘം മുന്‍പ്രസിഡന്‍റും വയലാര്‍ അവാര്‍ഡ് ജേതാവുമായ ശ്രീ ഏഴാച്ചേരി രാമചന്ദ്രന്‍ രചന നിര്‍വ്വഹിച്ച് ശ്രീ കല്ലറ ഗോപന്‍ ഈണം നല്‍കിയ ഗാനം</p>
//         <div className="w-full h-[330px] bg-yellow-600 flex">
//             <div className="w-5/12 h-full bg-red-500">
//             audio
//             </div>
//             <div className="w-7/12 h-full bg-teal-700">

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Youtube

// import React from 'react';

// function Youtube() {
//   return (
//     <div className="w-full h-full bg-[#F1EDEC] rounded-2xl p-4">
//       <p className="text-sm text-[#4B4848] leading-5">
//         എസ്.പി.സി.എസ്. സ്വാഗതഗാനം - സംഘം മുന്‍പ്രസിഡന്‍റും വയലാര്‍ അവാര്‍ഡ് ജേതാവുമായ
//         ശ്രീ ഏഴാച്ചേരി രാമചന്ദ്രന്‍ രചന നിര്‍വ്വഹിച്ച് ശ്രീ കല്ലറ ഗോപന്‍ ഈണം നല്‍കിയ
//         ഗാനം
//       </p>
//       <div className="w-full h-[330px] bg-yellow-600 flex">
//         <div className="w-5/12 h-full bg-red-500 ">
//           {/* Audio player */}
//           <audio controls className="w-full ">
//             <source src="audio.mp3" type="audio/mpeg" />
//             Your browser does not support the audio element.
//           </audio>
//         </div>
//         <div className="w-7/12 h-full bg-teal-700"></div>
//       </div>
//     </div>
//   );
// }

// export default Youtube;

import React from "react";

function Youtube() {
  return (
    <div className="w-full h-full bg-[#F1EDEC] rounded-2xl p-4">
      <p className="text-sm text-[#4B4848]  leading-5">
        എസ്.പി.സി.എസ്. സ്വാഗതഗാനം - സംഘം മുന്‍പ്രസിഡന്‍റും വയലാര്‍ അവാര്‍ഡ്
        ജേതാവുമായ ശ്രീ ഏഴാച്ചേരി രാമചന്ദ്രന്‍ രചന നിര്‍വ്വഹിച്ച് ശ്രീ കല്ലറ
        ഗോപന്‍ ഈണം നല്‍കിയ ഗാനം
      </p>
      <div className="w-full h-[330px] pt-4  flex">
        <div className="w-5/12 h-full flex flex-col justify-between  ">
          {/* Audio player container with rounded corners */}
          <div className="w-full h-14 pe-2 bg-white rounded-lg flex items-center justify-center p-2">
            <audio controls className="w-full h-full bg-white">
              <source src="audio.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <p className="text-sm font-semibold pb-4">
            സാഹിത്യ പ്രവർത്തക സഹകരണ സംഘത്തെക്കുറിച്ച്
            ഇന്ത്യൻ ന്യൂസ് റിവ്യൂ തയ്യാറാക്കി സിനിമാ തിയ്യേറ്ററുകളിലും മറ്റും
            പ്രദർശിപ്പിച്ചിരുന്ന ന്യൂസ് റീൽ.
          </p>
        </div>
       <div className="w-7/12 h-full ps-2  ">
       <div className="w-full h-full  rounded-xl overflow-hidden">
          <iframe
            width="100%"
            height="100%" 
            src="https://www.youtube.com/embed/rpHg5j-n-x4?si=DYGRaoQAliMScER9"
          ></iframe>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Youtube;
