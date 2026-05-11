"use client"

import { useState } from 'react';
import FeaturedCard from '../featured/FeaturedCard';


const AllAnimals = ({animals}) => {

     const [sortType, setSortType] = useState("all");

     const allAnimals =[...animals];
      
     if(sortType === 'highPrice') {
        
         allAnimals.sort((a,b)=> b.price - a.price)
     }else if(sortType === 'lowPrice'){
        allAnimals.sort((a,b)=>a.price-b.price)
     }

    return (
        <div>
             <div className="my-6 ">
                
     <select defaultValue="Short By" onChange={ (e)=> setSortType(e.target.value)}
                 className="select border  bg-green-100 border-gray-200 rounded-xl shadow-md px-4 py-2.5" >

                    <option disabled >Short By </option>
                    <option value={'All'}>All</option>
                    <option value={'highPrice'}>From High Price</option>
                    <option value={'lowPrice'}>From Low Price</option>
                    
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
                {allAnimals.map(animal => <FeaturedCard key={animal.id} animal={animal}></FeaturedCard>)}
            </div>
        </div>
    );
};

export default AllAnimals;