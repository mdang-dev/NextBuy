'use client'

import React, {useState} from 'react';
import {Menu, X, ShoppingCart, Search, User2} from 'lucide-react';
import {Input} from "@/components/ui/input";
import Link from "next/link";

const Navbar: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="bg-white text-white shadow-2xl">
            <div className="w-full px-12 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href={'/'}>
                        <span className="text-2xl font-bold cursor-pointer text-black">NextBuy</span>
                    </Link>
                </div>


                <div className={`flex items-center gap-4`}>
                    <div className="flex items-center px-2 bg-white gap-2 max-sm:gap-0">
                        <Input
                            type="text"
                            placeholder="Search products..."
                            className="py-2 max-sm:hidden 2xl:w-[800px] lg:w-max focus:border-none text-black rounded-2xl outline-none"
                        />
                        <button className="bg-blue-500 w-28 h-10 flex rounded-3xl max-sm:w-10">
                            <div className={`m-auto flex items-center gap-2`}>
                                <Search size={20}/>
                                <span className={`max-sm:hidden max-md:hidden max-lg:hidden`}>Search</span>
                            </div>
                        </button>
                    </div>

                    <ul className="hidden md:flex space-x-6 text-black">
                        <li className="hover:text-gray-300 cursor-pointer">Home</li>
                        <li className="hover:text-gray-300 cursor-pointer">Shop</li>
                        <li className="hover:text-gray-300 cursor-pointer">Deals</li>
                        <li className="hover:text-gray-300 cursor-pointer">Contact</li>
                    </ul>

                    <div className="flex items-center space-x-4">

                        <div className={`cursor-pointer`}>
                            <User2 size={28} color={'black'}/>
                        </div>

                        <div className="relative cursor-pointer">
                            <ShoppingCart size={28} color={'black'}/>
                            <span
                                className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
                        </div>

                        <button className="md:hidden" onClick={toggleMenu}>
                            {menuOpen ? <X size={28} color={'black'}/> : <Menu size={28} color={'black'}/>}
                        </button>
                    </div>
                </div>
            </div>

            {menuOpen && (
                <ul className={`md:hidden bg-white flex flex-col items-center py-4 space-y-4 text-black ${menuOpen && 'transition-all ease-in-out duration-200'}`}>
                    <li className="hover:text-gray-300 cursor-pointer">Home</li>
                    <li className="hover:text-gray-300 cursor-pointer">Shop</li>
                    <li className="hover:text-gray-300 cursor-pointer">Deals</li>
                    <li className="hover:text-gray-300 cursor-pointer">Contact</li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
