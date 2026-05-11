import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { CgProfile } from 'react-icons/cg';


const BtnProfileLogOut = () => {
    
        const handleSignOut = async () => {
        await authClient.signOut();
        
      }
    return (
        <div className='md:flex gap-3 hidden '>
                 <Link href={'/profile'}><Button variant="tertiary">
        <CgProfile className='text-blue-600' size={16} />
        Profile
      </Button></Link>

             <Link href={'/auth/login'}>
              <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
              </Link>
               </div>
    );
};

export default BtnProfileLogOut;