'use client'
import { useState, useEffect } from "react";

export default function Loader() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null; 
  return (

    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <h1 className="text-orange-600 font-semibold text-lg tracking-wide mb-5">
        MEGA.news
      </h1>

      <div className="relative w-48 h-3">
        {/* Faint Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 rounded-full" />
        {/* Growing Orange Loader */}
        <div className="absolute top-1/2 left-0 h-1 bg-orange-500 rounded-full -translate-y-1/2 animate-grow-loader" />
      </div>
    </div>


  );
}
