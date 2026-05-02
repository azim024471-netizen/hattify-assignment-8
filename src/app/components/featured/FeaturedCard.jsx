import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaMapLocationDot, FaWeightScale } from 'react-icons/fa6';
import { MdOutlineUpdate } from 'react-icons/md';

const FeaturedCard = ({ animal }) => {
    // console.log(animal)


    return (
        <div className="bg-white rounded-lg shadow-lg  hover:shadow-2xl
         hover:bg-green-50 transition-all duration-300 flex flex-col h-full">

            <div className="relative h-56 w-full">
                <Image
                    alt={animal.name}
                    src={animal.image}
                    fill
                    className="object-cover rounded-sm"

                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <span className="absolute top-3 right-3 bg-green-900 text-white text-xs px-3 py-1 rounded-full ">
                    {animal.category}
                </span>
            </div>


            <div className="p-5 flex flex-col  text-center sm:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight">
                    {animal.name}
                </h3>

                <div className="flex items-center justify-center md:justify-between gap-8 space-y-2 mb-4">

                    <p className="text-green-700 font-extrabold text-xl">
                        {animal.price.toLocaleString()} <span className="text-sm font-medium">BDT</span>
                    </p>


                    <div className="flex items-center">
                        <span className="bg-red-400 px-3 py-1 text-xs  text-white rounded-full uppercase  shadow-sm">
                            {animal.type}
                        </span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-900 mb-5 justify-center sm:justify-start">
                    <span className="flex items-center font-extrabold gap-2">
                        <FaWeightScale size={20} className='text-black' /> {animal.weight}Kg </span>

                    <span className="flex items-center gap-2 font-medium text-black">
                        <MdOutlineUpdate size={20} className='text-red-600' /> {animal.age} Yrs </span>

                    <span className="flex items-center gap-2 font-bold text-black">
                        <FaMapLocationDot size={20} className='text-green-500' /> {animal.location} </span>
                </div>


                <div>
                    <Link href={`/animals/${animal.id}`}>
                        <button className="w-full bg-green-900 text-white font-bold py-2 rounded-lg
                         hover:bg-green-700 transition-colors">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;