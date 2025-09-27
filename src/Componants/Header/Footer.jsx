import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 w-full py-2.5 absolute  bottom-0 fixed">
      <div className="flex flex-col md:flex-col justify-end lg:items-center items-center ">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-gradient-to-r from-purple-400 to-green-400 rounded"></div>
          <span className="text-xl font-bold text-white">vsStart</span>
        </div>
        <div className="text-center md:text-right text-gray-400">
          &copy; {new Date().getFullYear()} vsStart. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
