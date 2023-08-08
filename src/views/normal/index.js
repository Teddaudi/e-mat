import React from 'react';
import mni from "assets/img/avatars/main.PNG"

const LandingPage = () => {
  const backgroundColor = "#302C42";

  return (
    <div style={{ backgroundColor }} className="min-h-screen flex flex-col">
      <div className="flex justify-between p-4">
        <button className="font-semibold italic text-white py-2 px-4 rounded-full shadow-md">
          EMAT
        </button>
        <div className="flex">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow-md mr-2">
            Sign Up
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow-md">
            Sign In
          </button>
        </div>
      </div>
      
      <img src={mni} className="border w-full h-[239px]" alt="App Screenshot" />

    </div>
  );
};

export default LandingPage;
