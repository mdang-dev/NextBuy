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
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href={'/'}>
                        <span className="text-2xl font-bold cursor-pointer text-black">NextBuy</span>
                    </Link>
                </div>


                <div className="hidden md:flex items-center px-2 bg-white overflow-hidden gap-2">
                    <Input
                        type="text"
                        placeholder="Search products..."
                        className="px-3 py-2 focus:border-none text-black rounded-2xl outline-none w-96"
                    />
                    <button className="bg-blue-500 w-28 h-10 flex rounded-3xl">
                        <div className={`m-auto flex items-center gap-2`}>
                            <Search size={20}/>
                            Search
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

            {menuOpen && (
                <ul className="md:hidden bg-white flex flex-col items-center py-4 space-y-4 text-black transition-all ease-in-out duration-200">
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
