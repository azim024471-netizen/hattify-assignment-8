import React from 'react';
import FeaturedCard from './FeaturedCard';




const FeaturedAnimals = async () => {
  
    const res = await fetch('https://hattify-assignment-8.vercel.app/data.json');
    const animals = await res.json();
     
      const featuredAnimals = animals.slice(0, 4)

    // console.log(featuredAnimals)


    return (
          <div className=' my-10 container'>
            <h1 className="text-2xl font-bold my-5">Top Generations</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
                {featuredAnimals.map(animal => <FeaturedCard key={animal.id} animal={animal}></FeaturedCard>)}
            </div>
        </div>
    );
};

export default FeaturedAnimals;