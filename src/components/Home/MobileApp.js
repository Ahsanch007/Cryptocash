'use client'
import Aos from 'aos';
import React, { useEffect } from 'react'
import { FaApple, FaCodepen, FaMobileAlt } from 'react-icons/fa'
import { IoLogoAndroid } from 'react-icons/io';
import { MdOutlineShoppingCart } from "react-icons/md";
const features = [
    {
        icon: <FaMobileAlt />,
        title: "Different devices compatible",
        description: "If you are going to use a passage of device, you need to be sure there isn't anything middle of text.",
    },
    {
        icon: <FaCodepen />,
        title: "Cryptocash transformative technologies",
        description: "If you are going to use a passage of device, you need to be sure there isn't anything middle of text.",
    },
    {
        icon: <MdOutlineShoppingCart />,
        title: "Online Buy & Sell Your coin",
        description: "If you are going to use a passage of device, you need to be sure there isn't anything middle of text.",
    },
];
export const MobileApp = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className='bg-custom-gradient overflow-hidden relative py-[100px]'>
            <div className="px-[15px] max-w-[1170px] mx-auto">
                <div className="grid grid-cols-12 gap-[30px]">
                    <div className="col-span-12 lg:col-span-5 lg:order-1">
                        <div data-aos="fade-right" data-aos-duration='1400'>
                            <img src="/assets/mobile_app8.png" className='max-w-full h-auto w-full' alt="" />
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7 order-1">
                        <div>
                            <h3 className='text-[26px] font-bold mb-[30px]' data-aos="fade-up" data-aos-duration='1000'>
                                Download Mobile App
                            </h3>
                            <p className="text-white mb-[30px]" data-aos="fade-up" data-aos-duration='1400'>
                                The use of crypto-currencies has become more widespread, and they are now increasingly accepted as a legitimate currency for transactions.
                            </p>
                            <ul className="list-none">
                                {features.map((feature, index) => (
                                    <li key={index} className="mb-[40px] flex items-start">
                                        <div data-aos="fade-right" data-aos-duration='1400' className="rounded-full h-[68px] flex justify-center items-center text-[30px] py-[15px] text-center w-[68px] bg-gradient-custom2 flex-shrink-0">
                                            {feature.icon}
                                        </div>
                                        <div data-aos="fade-up" data-aos-duration='1400' className="pl-5 overflow-hidden">
                                            <h5 className="text-[18px] mb-2 text-white font-medium">{feature.title}</h5>
                                            <p className="text-white">{feature.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex gap-3">
                                <button data-aos="fade-up" data-aos-duration='1600' className='btn flex items-center gap-3 bg-gradient-custom2 rounded-[40px] font-medium'>
                                    <IoLogoAndroid className='text-[25px]' />
                                    Google Store
                                </button>
                                <button data-aos="fade-up" data-aos-duration='1800' className='btn bg-gradient-custom2  flex items-center gap-3 rounded-[40px] font-medium'>
                                    <FaApple className='text-[25px]' />
                                    Google Store
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="waveWrapper">
                <div className="wave waveTop"></div>
                <div className="wave waveMiddle"></div>
            </div>
        </div>
    )
}
