import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <header>
      {/* Top nav*/}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex item-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search*/}
        <div className="hidden sm:flex item-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/*Right*/}
        <div className="text-white flex item-center text-xs space-x-6 mx-6">
          <div className="link">
            <p>Hello, Gaurav</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center">
          <span className="absolute top-0 right-0 md:right-6 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
            <ShoppingCartIcon className="h-10"/>
            <p className=" hidden md:inline mt-2 font-extrabold md:text-sm">Cart</p>
          </div>
        </div>

      </div>

      {/* bottom nav*/}
      <div className="flex space-x-5 p-2 pl-6 item-center bg-amazon_blue-light text-white text-sm">
       <p className="link flex item-center"><MenuIcon className="h-6 mr-1"/>All</p>
       <p className="link">Sell</p>
       <p className="link">Fresh</p>
       <p className="link">Mobile</p>
       <p className="link hidden lg:inline-flex">Computer</p>
       <p className="link hidden lg:inline-flex">Today's Deal</p>
       <p className="link hidden lg:inline-flex">Amazone miniTV</p>
       <p className="link hidden lg:inline-flex">New Releases</p>
       <p className="link hidden lg:inline-flex">Prime</p>
       <p className="link hidden lg:inline-flex">Gift ideas</p>
      </div>
    </header>
  );
}

export default Header;
