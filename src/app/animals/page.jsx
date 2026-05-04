import React from 'react';
import FeaturedCard from '../components/featured/FeaturedCard';



const Animals = async () => {


    const res = await fetch('https://hattify-assignment-8.vercel.app/data.json');
    // const res = await fetch('http://localhost:3000/data.json');


    const animals = await res.json();
     
    console.log(animals)


    return (
        <div className='container mx-auto'>
            <div>

   <h1 className="text-2xl font-bold m-4">All Animals</h1>

             <div className="my-6  ">

                <select defaultValue="Short By"
                 className="select border bg-green-100 border-gray-200 rounded-xl shadow-md px-5 py-2.5" >

                    <option value="All">Short By </option>
                    <option>From High Price</option>
                    <option>From Low Price</option>
                    
                </select>
   
            </div>
   
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
                {animals.map(animal => <FeaturedCard key={animal.id} animal={animal}></FeaturedCard>)}
            </div>
        </div>
    );
};

export default Animals;