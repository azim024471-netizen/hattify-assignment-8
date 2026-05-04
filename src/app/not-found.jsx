import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center bg-black text-white justify-center text-center px-4">
      
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      
      <p className="mb-6 text-orange-500">
        The page you are looking for does not exist.
      </p>

      <Link href="/">
        <button className="px-6 py-2 bg-orange-700 text-white rounded-lg">
          Go Home
        </button>
      </Link>

    </div>
    );
};

export default NotFound;

