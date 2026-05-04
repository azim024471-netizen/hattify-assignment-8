'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { CgProfile } from 'react-icons/cg';

const NavBar = () => {
 const userData = authClient.useSession();
  const user = userData.data?.user;
  
  console.log(user, 'this is logged user')
 
    const handleSignOut = async () => {
    await authClient.signOut();
  }

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

      <div>

      {
        !user && (<div  className="flex items-center gap-4">

   <Link className='text-black font-bold ' href={'/auth/login'}>
  
    Sign In
  
     </Link>

     <Link className='bg-green-800 text-white font-bold px-3 py-2 rounded-sm' href={'/auth/signup'}>
  
    Sign Up
  
    </Link>

      
    </div>)
      }
       

         

    {user && (
            <div className="flex justify-center items-center  gap-3">

             <div className='flex flex-col items-center '>
  <Avatar size="md">
    <Avatar.Image
      alt={user?.name}
      src={user?.image}
      referrerPolicy="no-referrer"
    />
    <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
  </Avatar>

  <p className='text-xs font-bold text-black'>{user?.name}</p>
</div>


                <Link href={'/profile'}><Button variant="tertiary">
        <CgProfile className='text-blue-600' size={16} />
        Profile
      </Button></Link>

              <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
            </div>
          )}



      </div>


  </header>
 </div>
        </div>
    );
};

export default NavBar;