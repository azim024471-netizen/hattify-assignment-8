import { PlaceBookingNow } from '@/app/components/bookingmodal/PlaceBookingNow';
import Image from 'next/image';
import React from 'react';
import { FaMapLocationDot, FaWeightScale } from 'react-icons/fa6';
import { MdOutlineUpdate } from 'react-icons/md';

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://hattify-assignment-8.vercel.app/data.json');
   


    const allAnimals = await res.json();
    const detailsAnimal = allAnimals.find((animal) => animal.id === Number(id));

    if (!detailsAnimal) {
        return <div className="h-screen flex items-center justify-center text-2xl font-bold">Animal Not Found!</div>;
    }

    const { name, type, breed, price, weight, age, location, description, image, category } = detailsAnimal;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 
             bg-green-50 p-6 rounded-lg shadow-sm border border-gray-100">

               
                <div className="relative h-87 md:h-125 w-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {category}
                    </div>
                </div>

               
                <div className="flex flex-col space-y-6">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-2">{name}</h1>
                        <div className="flex items-center gap-3">
                            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-md text-sm font-bold uppercase ">
                                {type}
                            </span>
                            <p className="text-gray-500 text-xs font-bold">Breed: <span className="text-gray-800 font-semibold ">{breed}</span></p>
                        </div>
                    </div>

                    <p className="text-4xl font-black text-green-700">
                        ৳{price.toLocaleString()} <span className="text-lg font-normal text-gray-500">BDT</span>
                    </p>

                    <hr className="border-gray-300" />

                   
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-gray-100 text-center">
                            <p className="text-gray-500 text-sm mb-1">Weight</p>
                            <p className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2.5 ">
                                <FaWeightScale size={20} className='text-black' />  {weight} KG</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-gray-100 text-center">
                            <p className="text-gray-500 text-sm mb-1">Age</p>
                            <p className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2.5">

                                <MdOutlineUpdate size={20} className='text-red-600 ' />
                                {age} Years</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-gray-100 text-center col-span-2 md:col-span-1">
                            <p className="text-gray-500 text-sm mb-1">Location</p>
                            <p className="text-xl font-bold flex  items-center justify-center gap-2.5 text-gray-800">
                                <FaMapLocationDot size={20} className='text-green-500' /> {location}</p>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-green-600 inline-block pb-2">
                            Description
                        </h3>
                        <p className="text-gray-600 text-lg font-semibold italic">
                            "<span>{description}</span>"
                        </p>
                    </div>

                    <div className="pt-6">


                        <PlaceBookingNow></PlaceBookingNow>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;