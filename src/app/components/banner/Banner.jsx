'use client'
import { authClient } from '@/lib/auth-client';
import 'animate.css';
import Link from "next/link";
import { IoMdCloudDone } from "react-icons/io";

const Banner =() => {
  
  const userData = authClient.useSession();
    const user = userData.data?.user;

  return (
//     <div
//   className="bg-[url('https://i.ibb.co.com/hxt4v9W1/banner-Hatti-Fy.jpg')] min-h-[50vh]
//    md:h-[70vh] w-full bg-cover bg-no-repeat  bg-center flex items-center overflow-hidden">
      
//       <div className="w-full h-full  bg-black/60 flex items-center">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 text-white space-y-5">
          
//           <div>
// <h1 className="animate__animated animate__fadeInUp text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 md:mb-4 max-w-full md:max-w-3xl leading-snug md:leading-tight">
//   Secure & <span className="text-green-500">Healthy </span> 
//   <span className="md:text-green-500">Animals</span> for Your Sacred Sacrifice
// </h1>
//           <p className="text-lg animate__animated  animate__fadeInLeft md:text-2xl mb-8 max-w-xl text-gray-300 font-medium">
//             Farm-fresh, healthy, and certified animals delivered with trust.
//           </p>

//           </div>
//           <div className="flex flex-wrap gap-5">
//             <Link href="/animals">
//               <button className="bg-green-600 hover:bg-green-900  text-white font-bold py-3 px-8 rounded-full  shadow-lg">
//                 Browse Animals
//               </button>
//             </Link>

//             {
//               !user && (<Link href="/auth/signup">
//               <button className="border-2 border-white hover:bg-white hover:text-black text-white font-bold 
//               py-3 px-8 rounded-full  shadow-lg">
//                 Register Now
//               </button>
//             </Link>)
//             }
//           </div>

//           <div className=" flex gap-6 text-sm font-bold text-gray-300">
//             <span className="flex items-center gap-2"> <IoMdCloudDone  size={30} className="text-white" /> Healthy Certified</span>
//             <span className="flex items-center gap-2"> <IoMdCloudDone  size={30} className="text-white" /> Secure Booking</span>
//           </div>
          
//         </div>
//       </div>
//     </div>

<div className="relative bg-[url('https://i.ibb.co.com/hxt4v9W1/banner-Hatti-Fy.jpg')] min-h-[50vh] md:h-[70vh] w-full bg-cover bg-no-repeat bg-center flex items-center overflow-hidden">
  
  {/* এই ডিভটি পুরো ইমেজ জুড়ে ওভারলে দিবে */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* কন্টেন্ট ডিভ - এখানে z-10 ব্যবহার করা হয়েছে যাতে টেক্সট ওভারলের উপরে থাকে */}
  <div className="relative z-10 w-full">
    <div className="max-w-7xl mx-auto px-6 md:px-12 text-white space-y-5">
      
      <div>
        <h1 className="animate__animated animate__fadeInUp text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 md:mb-4 max-w-full md:max-w-3xl leading-snug md:leading-tight">
          Secure & <span className="text-green-500">Healthy </span> 
          <span className="md:text-green-500">Animals</span> for Your Sacred Sacrifice
        </h1>
        <p className="text-lg animate__animated animate__fadeInLeft md:text-2xl mb-8 max-w-xl text-gray-300 font-medium">
          Farm-fresh, healthy, and certified animals delivered with trust.
        </p>
      </div>

      <div className="flex flex-wrap gap-5">
        <Link href="/animals">
          <button className="bg-green-600 hover:bg-green-900 text-white font-bold py-3 px-8 rounded-full shadow-lg">
            Browse Animals
          </button>
        </Link>

        {!user && (
          <Link href="/auth/signup">
            <button className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-full shadow-lg">
              Register Now
            </button>
          </Link>
        )}
      </div>

      <div className="flex gap-6 text-sm font-bold text-gray-300">
        <span className="flex items-center gap-2"> <IoMdCloudDone size={30} className="text-white" /> Healthy Certified</span>
        <span className="flex items-center gap-2"> <IoMdCloudDone size={30} className="text-white" /> Secure Booking</span>
      </div>
      
    </div>
  </div>
</div>
  );
};

export default Banner;