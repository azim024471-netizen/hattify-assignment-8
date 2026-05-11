// 'use client'
// import { useState } from 'react';
// import FeaturedCard from '../components/featured/FeaturedCard';
import AllAnimals from '../components/animals/AnimalCard';

const Animals = async () => {    
    const res = await fetch('http://localhost:3000/data.json');
    // const res = await fetch('https://hattify-assignment-8.vercel.app/data.json');
     const animals= await res.json(); 
     


       
    return (
        <div className='container mx-auto'>
            <div>

   <h1 className="text-2xl font-bold m-4">All Animals</h1>
            </div>
       <AllAnimals animals={animals}>

       </AllAnimals>


        </div>
    );
};

export default Animals;




