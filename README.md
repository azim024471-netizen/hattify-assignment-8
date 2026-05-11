# HattiFY - Digital Livestock Marketplace

HattiFY is a modern e-commerce platform dedicated to the Qurbani season. It provides a secure and user-friendly interface for browsing and booking livestock from trusted sources.

## Live Link

https://hattify-assignment-8.vercel.app/

## Key Features
* **Diverse Marketplace**: Includes specific categories for Cows, Goats, Sheep, and Camels.
* **Secure Authentication**: Integrated Google Social Login and email-based authentication via BetterAuth.
* **Profile Management**: Dedicated user profiles with the ability to update names and profile images.
* **Pricing Logic**: Advanced sorting functionality based on animal price.
* **Responsive UI**: Optimized layout for mobile, tablet, and desktop devices using Tailwind CSS.

## Animal Inventory
The platform features a curated list of livestock categorized by type:
* **Large Animals**: Premium Cows and Camels.
* **Small Animals**: Healthy Goats and Sheep.
* **Details**: Each listing includes weight, age, breed, and location.

## Technology Stack
* **Frontend**: Next.js, React.js
* **Styling**: Tailwind CSS
* **Auth**: BetterAuth
* **Icons**: React Icons, Gravity UI Icons
* **Deployment**: Vercel

## Installation
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Configure environment variables for BetterAuth.
4. Execute `npm run dev` to start the local server.




 const short = animals.sort((a, b) => a.price - b.price);
    console.log(animals)


    / //   second code from ai bot /////////////////////////////////////////////////////////******************** */

// // // /import FeaturedCard from '../components/featured/FeaturedCard';
// // import FeaturedCard from '../components/featured/FeaturedCard';
// // import SortSelect from '../components/shorting/SortSelect';
// // // import SortSelect from '../components/shorting/SortSelect';

// // const Animals = async ({ searchParams }) => {
// //     // ১. ডাটা ফেচ করা (ক্যাশিং বন্ধ রাখা হয়েছে যাতে সর্টিং সাথে সাথে কাজ করে)
// //     const res = await fetch('http://localhost:3000/data.json', { cache: 'no-store' });
// //     const animals = await res.json();

// //     // ২. Next.js ১৫-এর নিয়ম অনুযায়ী searchParams কে await করা
// //     const params = await searchParams;
// //     const sortValue = params.sort; 

// //     // ৩. সর্টিং লজিক (মেইন ডাটা ঠিক রেখে নতুন একটি ভেরিয়েবলে সাজানো)
// //     let displayAnimals = [...animals]; 

// //     if (sortValue === 'low') {
// //         displayAnimals.sort((a, b) => a.price - b.price); // ছোট থেকে বড়
// //     } else if (sortValue === 'high') {
// //         displayAnimals.sort((a, b) => b.price - a.price); // বড় থেকে ছোট
// //     }

// //     return (
// //         <div className='container mx-auto p-4'>
// //             <div className='flex justify-between items-center my-6'>
// //                 <h1 className="text-2xl font-bold">All Animals</h1>
                
// //                 {/* সর্ট করার ড্রপডাউন কম্পোনেন্ট */}
// //                 <SortSelect />
// //             </div>

// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
// //                 {displayAnimals.map(animal => (
// //                     <FeaturedCard key={animal.id} animal={animal} />
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default Animals;











// // third code from ai bot using client components /////////=======================================================================================


// "use client";

// import React, { useState, useEffect } from 'react';
// import FeaturedCard from '../components/featured/FeaturedCard';

// const Animals = () => {
//     const [animals, setAnimals] = useState([]); // মেইন ডাটা রাখার জন্য
//     const [displayAnimals, setDisplayAnimals] = useState([]); // স্ক্রিনে দেখানোর জন্য
//     const [loading, setLoading] = useState(true);

//     // ১. ডাটা ফেচ করা
//     useEffect(() => {
//         fetch('http://localhost:3000/data.json')
//             .then(res => res.json())
//             .then(data => {
//                 setAnimals(data);
//                 setDisplayAnimals(data); // শুরুতে সব ডাটা দেখাবে
//                 setLoading(false);
//             });
//     }, []);

//     // ২. সর্টিং ফাংশন
//     const handleSort = (e) => {
//         const value = e.target.value;
//         let sortedData = [...animals]; // অরিজিনাল ডাটা থেকে কপি নিলাম

//         if (value === 'low') {
//             sortedData.sort((a, b) => a.price - b.price);
//         } else if (value === 'high') {
//             sortedData.sort((a, b) => b.price - a.price);
//         }

//         setDisplayAnimals(sortedData); // সাজানো ডাটা সেট করে দেওয়া
//     };

//     if (loading) return <p className='text-center mt-10'>Loading Animals...</p>;

//     return (
//         <div className='container mx-auto p-4'>
//             <div className='flex justify-between items-center my-6'>
//                 <h1 className="text-2xl font-bold">All Animals</h1>

//                 {/* ৩. সর্ট সিলেক্ট বক্স (একই ফাইলে) */}
//                 <div className="my-6">
//                     <select 
//                         onChange={handleSort} 
//                         className="select border bg-green-100 border-gray-200 rounded-xl shadow-md px-5 py-2.5 outline-none"
//                     >
//                         <option value="all">Sort By: All</option>
//                         <option value="high">From High Price</option>
//                         <option value="low">From Low Price</option>
//                     </select>
//                 </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
//                 {displayAnimals.map(animal => (
//                     <FeaturedCard key={animal.id} animal={animal} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Animals;


















"use client";

import { useRouter, useSearchParams } from 'next/navigation';

const SortSelect = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSort = (e) => {
        const value = e.target.value;
        
        if (value === "all") {
            router.push('/animals'); // আপনার মেইন পেজের রাউট নাম
        } else {
            // এটি ইউআরএল-কে আপডেট করবে: ?sort=low অথবা ?sort=high
            router.push(`?sort=${value}`);
        }
    };

    return (
        <div className="my-4">
            <select 
                onChange={handleSort}
                defaultValue={searchParams.get('sort') || "all"}
                className="select border bg-green-100 border-gray-200 rounded-xl shadow-md px-5 py-2.5 outline-none"
            >
                <option value="all">Sort By: Default</option>
                <option value="high">From High Price</option>
                <option value="low">From Low Price</option>
            </select>
        </div>
    );
};

export default SortSelect;



// "use client"; 
// import { useRouter } from 'next/navigation';

// const SortSelect = () => {
//     const router = useRouter();

//     const handleSort = (e) => {
//         const value = e.target.value;
//         // ইউজার যা সিলেক্ট করবে সেই অনুযায়ী ইউআরএল পাল্টে যাবে
//         // যেমন: localhost:3000/animals?sort=low
//         router.push(`?sort=${value}`);
//     };

//     return (
//         <div className="my-6">
//             <select onChange={handleSort} className="select border bg-green-100 p-3 rounded-xl shadow-md">
//                 <option value="all">Sort By: All</option>
//                 <option value="high">From High Price</option>
//                 <option value="low">From Low Price</option>
//             </select>
//         </div>
//     );
// };

// export default SortSelect;















 //  const params = await searchParams
    //  console.log(params, 'this is searchi params .................................... ')
       