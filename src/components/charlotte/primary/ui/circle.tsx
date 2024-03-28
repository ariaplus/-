import React, { useState } from 'react';
import Head from 'next/head';

export default function RotatingCircle() {
  const [isRotating, setIsRotating] = useState(true); // State to control rotation

  return (
    <div className="flex justify-center items-center h-screen">
      <Head>
        <title>Rotating Circle</title>
      </Head>
      <button
        className="fixed top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md"
        onClick={() => setIsRotating((prevState) => !prevState)} // Toggle rotation on button click
      >
        {isRotating ? 'Stop Rotation' : 'Start Rotation'}
      </button>
      <div
        className={`w-24 h-24 bg-blue-500 rounded-full transform-gpu ${
          isRotating ? 'rotate-x-20' : ''
        } transition-transform duration-1000`}
      ></div>
    </div>
  );
}
