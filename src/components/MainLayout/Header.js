'use client'
import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaTelegramPlane } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [navItems, setNavItems] = useState([
        { id: 1, name: 'Home', active: true, path: '#home_section', duration: '1100' },
        { id: 2, name: 'About', active: false, path: '#about', duration: '1200' },
        { id: 3, name: 'Why', active: false, path: '#why', duration: '1300' },
        { id: 4, name: 'Token', active: false, path: '#token', duration: '1400' },
        { id: 5, name: 'Roadmap', active: false, path: '#roadmap', duration: '1500' },
        { id: 6, name: 'Team', active: false, path: '#team', duration: '1600' },
        { id: 7, name: 'Faq', active: false, path: '#faq', duration: '1700' },
        { id: 8, name: 'Contact', active: false, path: '#contact', duration: '1800' },
        { id: 9, name: 'Telegram', active: false, path: '', duration: '1900' },
    ]);

    const handleNavItemClick = (item) => {
        if (item.path) {
            // Scroll to the section
            const element = document.querySelector(item.path);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Set the clicked item as active and others as inactive
        const updatedNavItems = navItems.map(navItem => ({
            ...navItem,
            active: navItem.id === item.id
        }));

        setNavItems(updatedNavItems);

        setIsMenuOpen(false)
    };
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <>
            <div className={`md:fixed w-full absolute top-0 right-0 left-0 z-[9] py-[10px] ${scrolled ? 'lg:py-[10px] bg-[#193d85]  ' : 'lg:py-[25px]  '}  transition-all `}>
                <div className="px-[15px] relative">
                    <div className="flex justify-between items-center">
                        <div className="logo" data-aos="fade-down" data-aos-duration='1000'>
                            {/* <img src="/assets/logo.png" className={` ${scrolled ? 'max-w-[200px] lg:max-w-[180px]' : ' max-w-[200px] lg:max-w-full'}  h-auto`} alt="" /> */}
                        </div>
                        <div className="menu-list hidden lg:block">
                            <ul className="flex list-none items-center p-0 m-0">
                                {navItems.map((item, index) => (
                                    <li className="relative px-[10px]" key={index} data-aos="fade-down" data-aos-duration={item.duration}>
                                        {item.name === 'Telegram' ? (
                                            <div
                                                className="h-[32px] w-[32px] bg-[#fff3] rounded-full flex justify-center hover:text-[#ff69c9] text-white transition-all cursor-pointer items-center"
                                                onClick={() => handleNavItemClick(item)}
                                            >
                                                <FaTelegramPlane />
                                            </div>
                                        ) : (
                                            <a

                                                onClick={() => handleNavItemClick(item)}
                                                className={`${item.active ? 'text-[#ff69c9]' : 'text-white'
                                                    } transition-all cursor-pointer hover:text-[#ff69c9] font-medium relative uppercase text-[15px]`}
                                            >
                                                {item.name}
                                                {item.active && (
                                                    <span className="absolute bottom-[-10px] w-full right-0 left-0 h-px bg-[#ff69c9]" />
                                                )}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:flex hidden items-center">
                            {/* <div className="relative">

                                <div className="flex gap-2 cursor-pointer items-center" data-aos="fade-down" data-aos-duration='2000'>
                                    <img src="/assets/eng.png" className='max-w-[20px] h-auto rounded-full ' alt="" />
                                    <span className='text-white'>
                                        EN
                                    </span>
                                    <FaChevronDown />
                                </div>
                            </div> */}
                            <div className="ml-[15px] mt-3" data-aos="fade-down" data-aos-duration='2100'>
                                <button className='text-[15px] text-white bg-[#fff3] py-2.5 px-[25px] rounded-[40px] font-medium transition-all hover:text-black'>
                                    LOGIN
                                </button>
                            </div>
                        </div>
                        <button
                            className="flex btnDefault md:hidden py-[.25rem] px-[.75rem]"
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                        >
                            <GiHamburgerMenu />
                        </button>
                    </div>
                </div>

            </div>
            <div
                className={`bg-[#193d85] py-3 absolute top-0 z-[99] right-0 left-0 w-full transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                    }`}
                style={{ boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)" }}
            >
                <div className="px-[15px]">
                    <div className="flex justify-between items-center">
                        <div className="logo" data-aos="fade-down" data-aos-duration="1000">
                            <img
                                src="/assets/logo.png"
                                className="max-w-[200px] lg:max-w-[180px] h-auto"
                                alt="Logo"
                            />
                        </div>
                        <button
                            className="flex btnDefault md:hidden py-[.25rem] px-[.75rem]"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <GiHamburgerMenu />
                        </button>
                    </div>
                    <ul className="flex flex-col pt-4 gap-3 items-center text-center">
                        {navItems.map((item, index) => (
                            <li
                                className="relative px-[10px]"
                                key={index}
                                data-aos="fade-down"
                                data-aos-duration={item.duration}
                            >
                                {item.name === "Telegram" ? (
                                    <div
                                        className="h-[32px] w-[32px] bg-[#fff3] rounded-full flex justify-center hover:text-[#ff69c9] text-white transition-all cursor-pointer items-center"
                                        onClick={() => handleNavItemClick(item)}
                                    >
                                        <FaTelegramPlane />
                                    </div>
                                ) : (
                                    <a
                                        onClick={() => handleNavItemClick(item)}
                                        className={`${item.active ? "text-[#ff69c9]" : "text-white"
                                            } transition-all cursor-pointer hover:text-[#ff69c9] font-medium relative uppercase text-[15px]`}
                                    >
                                        {item.name}
                                        {item.active && (
                                            <span className="absolute bottom-[-5px] w-full right-0 left-0 h-px bg-[#ff69c9]" />
                                        )}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    )
}
