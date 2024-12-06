"use client"
import React from "react";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
  const router = useRouter();

  const handleStartExploring = () => {
    router.push("/bridge");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl md:text-6xl font-extrabold text-black text-center mb-6">
        WELCOME TO <span className="text-yellow-500">MAP9</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 text-center mb-12 max-w-2xl">
        A tool designed to visualize National Bridge Inventory (NBI) datasets with intuitive filtering and analysis capabilities.
      </p>
      <button
        onClick={handleStartExploring}
        className="px-6 py-3 bg-yellow-500 text-white rounded-lg shadow-md text-lg hover:scale-110 transition duration-300 ease-in-out"
      >
        Start Exploring
      </button>

    </div>
  );
};

export default Home;
