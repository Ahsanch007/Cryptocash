'use client'
import Aos from 'aos';
import React, { useEffect } from 'react'
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaPinterest, FaTwitter } from 'react-icons/fa'
import { IoIosSend } from 'react-icons/io';
interface Link {
    name: string
    href: string
  }
  
  const quickLinks: Link[] = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Tokens', href: '#' },
    { name: 'Team', href: '#' },
    { name: 'Contact', href: '#' },
  ]
  
  const supportLinks: Link[] = [
    { name: 'Documentation', href: '#' },
    { name: 'IOS & Android Apps', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Support Forum', href: '#' },
    { name: 'Terms Conditions', href: '#' },
  ]
  
  export const Footer: React.FC = () => {
    useEffect(() => {
      Aos.init()
    }, [])
    return (
        <div className='bg-gradient-2'>
            <div className="py-[30px] lg:py-[100px]">
                <div className="px-[15px] max-w-[1170px] mx-auto">
                    <div className="grid grid-cols-12 gap-[30px]">
                        <div className="col-span-12 lg:col-span-4">
                            <div className="logo mb-[1rem]">
                                <a href="#" data-aos="fade-up" data-aos-duration='1000'>

                                    <img src="/assets/footer_logo.png" className='max-w-full' alt="" />
                                </a>
                            </div>
                            {/* <p className="text-white text-[14px]" data-aos="fade-up" data-aos-duration='1300'>
                                Cryptocash stands firmly in support of financial freedom and the liberty that Bitcoin provides globally for anyone.
                            </p> */}
                            <ul className="flex mt-[1rem] gap-2.5">
                                <li data-aos="fade-up" data-aos-duration='1000'>
                                    <a href="#" className='text-white hover:text-[#ff69c9] transition-all '>
                                        <div className="w-[30px] h-[30px] flex justify-center items-center bg-[#ffffff1a] rounded-full">

                                            <FaFacebookF />
                                        </div>
                                    </a>
                                </li>
                                <li data-aos="fade-up" data-aos-duration='1200'>
                                    <a href="#" className='text-white hover:text-[#ff69c9] transition-all '>
                                        <div className="w-[30px] h-[30px] flex justify-center items-center bg-[#ffffff1a] rounded-full">

                                            <FaTwitter />
                                        </div>
                                    </a>
                                </li>
                                <li data-aos="fade-up" data-aos-duration='1300'>
                                    <a href="#" className='text-white hover:text-[#ff69c9] transition-all '>
                                        <div className="w-[30px] h-[30px] flex justify-center items-center bg-[#ffffff1a] rounded-full">

                                            <FaGooglePlusG />
                                        </div>
                                    </a>
                                </li>
                                <li data-aos="fade-up" data-aos-duration='1400'>
                                    <a href="#" className='text-white hover:text-[#ff69c9] transition-all '>
                                        <div className="w-[30px] h-[30px] flex justify-center items-center bg-[#ffffff1a] rounded-full">

                                            <FaPinterest />
                                        </div>
                                    </a>
                                </li>
                                <li data-aos="fade-up" data-aos-duration='1500'>
                                    <a href="#" className='text-white hover:text-[#ff69c9] transition-all '>
                                        <div className="w-[30px] h-[30px] flex justify-center items-center bg-[#ffffff1a] rounded-full">

                                            <FaLinkedinIn />
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-6 md:col-span-3 lg:col-span-2">
                            <h4 className="text-white text-[18px] uppercase font-semibold my-[15px]" data-aos="fade-up" data-aos-duration='1300'>
                                Quick Links
                            </h4>
                            <ul className="list-none">
                                {quickLinks.map((link, index) => (
                                    <li key={index} data-aos="fade-up" data-aos-duration='1500'>
                                        <a href={link.href} className="text-white leading-[30px] hover:text-[#ff69c9] transition-all">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-span-6 md:col-span-3 lg:col-span-2">
                            <h4 data-aos="fade-up" data-aos-duration='1000' className="text-white text-[18px] uppercase font-semibold my-[15px]">
                                Support
                            </h4>
                            <ul className="list-none" >
                                {supportLinks.map((link, index) => (
                                    <li key={index} data-aos="fade-up" data-aos-duration='1600'>
                                        <a href={link.href} className="text-white leading-[30px] hover:text-[#ff69c9] transition-all">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <h4 className="text-white text-[18px] uppercase font-semibold my-[15px]" data-aos="fade-up" data-aos-duration='1000'>
                                SUBSCRIBE Newsletter
                            </h4>
                            <p className="text-white text-[14px] leading-[30px] mb-[1rem]" data-aos="fade-up" data-aos-duration='1500'>
                                By subscribing to our mailing list you will always be update with the latest news from us.
                            </p>
                            <form action="" className='relative'>
                                <input type="text" className='w-full bg-transparent h-[46px] pr-[50px] border-2 border-white text-white placeholder:text-white rounded-[50px] pl-[20px] py-2.5' placeholder='Enter Email' />
                                <button className='bg-gradient-custom2 flex justify-center items-center top-[6px] h-[35px] w-[35px] absolute right-2 rounded-full'>
                                    <IoIosSend />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-[15px] max-w-[1170px] mx-auto">
                <div className="border-t border-white py-5 text-center">
                    <p className='text-white text-[14px]'>
                        Copyright © 2025 All Rights Reserved.
                    </p>
                </div>
            </div>

        </div>
    )
}
