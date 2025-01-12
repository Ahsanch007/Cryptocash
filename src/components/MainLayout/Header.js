'use client'
import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaTelegramPlane } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const navItems = [
    {
        id: 1,
        name: 'Home',
        active: true,
    },
    {
        id: 2,
        name: 'About',
        active: false,
    },
    {
        id: 3,
        name: 'Why',
        active: false,
    },
    {
        id: 4,
        name: 'Token',
        active: false,
    },
    {
        id: 5,
        name: 'Roadmap',
        active: false,
    },
    {
        id: 6,
        name: 'Team',
        active: false,
    },
    {
        id: 7,
        name: 'Faq',
        active: false,
    },
    {
        id: 8,
        name: 'Contact',
        active: false,
    },
    {
        id: 9,
        name: 'Telegram',
        active: false,
    },
]

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`md:fixed w-full absolute top-0 right-0 left-0 z-[1030] py-[10px] ${scrolled ? 'lg:py-[10px] bg-[#193d85]  ' : 'lg:py-[25px]  '}  transition-all `}>
            <div className="px-[15px] relative">
                <div className="flex justify-between items-center">
                    <div className="logo">
                        <img src="/assets/logo.png" className={` ${scrolled ? 'max-w-[200px] lg:max-w-[180px]' : ' max-w-[200px] lg:max-w-full'}  h-auto`} alt="" />
                    </div>
                    <div className="menu-list hidden lg:block">
                        <ul className='flex list-none items-center p-0 m-0'>
                            {navItems.map((item, index) =>
                                <li className="relative px-[10px]" key={index}>
                                    {item.name == 'Telegram' ? (
                                        <div className="h-[32px] w-[32px] bg-[#fff3] rounded-full flex justify-center hover:text-[#ff69c9] text-white transition-all cursor-pointer items-center">
                                            <FaTelegramPlane />
                                        </div>
                                    ) : (

                                        <a href="#" className={` ${item.active ? 'text-[#ff69c9]' : 'text-white'} transition-all hover:text-[#ff69c9]   font-medium relative uppercase   text-[15px]`}>
                                            {item.name}
                                            {item.active &&
                                                <span className='absolute bottom-[-10px] w-full right-0 left-0 h-px bg-[#ff69c9]'></span>
                                            }
                                        </a>
                                    )}
                                </li>
                            )}


                        </ul>
                    </div>
                    <div className="md:flex hidden items-center">
                        <div className="relative">

                            <div className="flex gap-2 cursor-pointer items-center">
                                <img src="/assets/eng.png" className='max-w-[20px] h-auto rounded-full ' alt="" />
                                <span className='text-white'>
                                    EN
                                </span>
                                <FaChevronDown />
                            </div>
                        </div>
                        <div className="ml-[15px]">
                            <button className='text-[15px] text-white bg-[#fff3] py-2.5 px-[25px] rounded-[40px] font-medium transition-all hover:text-black'>
                                LOGIN
                            </button>
                        </div>
                    </div>
                    <button className='flex btnDefault md:hidden py-[.25rem] px-[.75rem] '>
                        <GiHamburgerMenu />
                    </button>
                </div>
            </div>

        </div>
    )
}
