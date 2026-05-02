'use client'
import Link from 'next/link';

import { usePathname } from 'next/navigation';

const NavBar = () => {


     const pathName = usePathname();   
    const linkInfo = [
        {
            path: "/",
            name: "Home",
        },
        {
            path: "/animals",
            name: "All Animals",
            
        },
    ];



    return (
        <div className=" bg-green-100 w-full  ">
          

          <div className='w-13/16 mx-auto'>
     <header className="flex h-16 items-center justify-between px-6">
    <div className="flex items-center gap-3">
      <p className="font-bold text-2xl md:text-4xl"> HattiFY</p>
    </div>

    <ul className="flex items-center gap-4">
           {
        linkInfo.map((link,index) =>{
            const isActive = link.path === pathName;

            return(
                <li className={`${isActive && 'border-b-2 border-black  font-bold'}`} 
                key={index}> 
                <Link href={link.path}>{link.name}</Link></li>
            )
        })
      }
    </ul>

      <div  className="flex items-center gap-4">

   <Link className='text-black font-bold ' href={'/auth/login'}>
  
    Sign In
  
</Link>
   
   

   <Link className='bg-green-800 text-white font-bold px-3 py-2 rounded-sm' href={'/auth/signup'}>
  
    Sign Up
  
   </Link>

     
      
    </div>


  </header>
 </div>
        </div>
    );
};

export default NavBar;