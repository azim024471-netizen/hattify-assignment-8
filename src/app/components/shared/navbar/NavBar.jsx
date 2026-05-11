'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button, } from '@heroui/react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import BtnProfileLogOut from './BtnProfileLogOut';
import { TbMenuDeep } from 'react-icons/tb';
import { IoClose } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
// import { FiLogIn } from 'react-icons/fi';

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
const NavBar = () => {
 const [open, setOpen] = useState(false);

 const userData = authClient.useSession();
  const user = userData.data?.user;
  
     const pathName = usePathname();   

     
    const handleSignOut = async () => {
        await authClient.signOut();
        setOpen(false);
    };


    return (
        <div className=" bg-green-100 w-full sticky top-0 z-50   ">

        <div className='max-w-7xl mx-auto px-4 '>
<header className="flex  
  items-center justify-between py-2 h-18 "> 
    
    {/* left logo ////////////////////// */}

     <div className="flex items-center gap-3">
      <p className="md:font-bold font-semibold text-2xl md:text-4xl"> HattiFY</p>
     
    </div>

 {/* middel nav lin ////////////////////////// */}
    <ul className="flex flex-wrap justify-center 
    md:justify-start items-center gap-3 md:gap-4">
           {
        linkInfo.map((link,index) =>{
            const isActive = link.path === pathName;

    return(
  <li className={`${isActive && 'border-b-2 font-bold border-black'}  text-sm md:text-xl`} 
           key={index}> 
         <Link href={link.path}>{link.name}</Link></li>
            )
        })
      }
    </ul>


    {/* right part problem  */}

      <div>


 {/* desktop not userrrrrrr  */}
 {
  !user && (<div className="hidden md:flex flex-wrap justify-center items-center 
  gap-2 md:gap-4">
   <Link className='text-black font-bold ' href={'/auth/login'}>Sign In</Link>
<Link className='bg-green-800 text-white font-bold px-3 py-2 rounded-sm' 
href={'/auth/signup'}>Sign Up</Link>
 
    </div>)
      }

         {/* user //////////////////////////////////////////////// */}
<div className='flex justify-center items-center gap-5 '>




    {user && (
            <div className="flex  justify-center items-center gap-3">


 {/* avatar working  */}
             <div className='flex flex-col items-center '>
  <Avatar size="sm">
    <Avatar.Image
      alt={user?.name}
      src={user?.image}
      referrerPolicy="no-referrer"
    />
    <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
  </Avatar>

  <p className='text-xs font-bold text-black'>{user?.name}</p>
</div>   
  
     {/* btn for desktop  */}
          

             <BtnProfileLogOut></BtnProfileLogOut>  

            </div>
          )}

           
         {/* for mobile /////////////////////////// */}

              <div  className=' md:hidden'>

  {
    open
      ? <IoClose onClick={() => setOpen(!open)} size={24} />
      : <TbMenuDeep  onClick={() => setOpen(!open)}  size={24} />
  }


  <ul
    className={`md:hidden absolute duration-1000 
    top-18 flex  w-full px-4  justify-end-safe bg-green-800 text-xl text-white
    ${open ? 'right-0' : 'right-full'}
    `}
  >

    {
  user && (
    <>
      <li>
        <Link href={'/profile'}>
          <Button variant="light">
            <CgProfile className='text-white' size={16} />
            Profile
          </Button>
        </Link>
      </li>

      <li>
        <Link href={'/auth/login'}>
          <Button className={'rounded-md'} onClick={handleSignOut} size="sm" variant='light'>
            SignOut
          </Button>
        </Link>
      </li>
    </>
  )
}
 


{
  !user && (
    <>
     
  <li>
       <Link href={'/auth/login'}>  

          <Button variant="light">
            {/* <FiLogIn size={6} /> */}

            Sign In
          </Button>
        </Link>
      </li>

      <li>
        <Link href={'/auth/signup'}>
          <Button className={'rounded-md'}  size="sm" variant='light'>
             Sign Up
          </Button>
        </Link>
      </li>




    </>
  )
}
   
    
  </ul>

</div>


</div>

      </div>

  </header>
 </div>
        </div>
    );
};

export default NavBar;



