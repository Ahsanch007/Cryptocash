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
        <div className='  overflow-hidden bg-white relative py-[30px] lg:py-[100px]'>
            <div className="px-[15px] max-w-[1170px] mx-auto">
                <div className="rounded-3xl relative gradient-bg p-8 outline outline-2 outline-white/[0.04] lg:p-[72px] ">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
                        <div className="flex flex-col gap-6 lg:w-[600px] lg:gap-8">
                            <h3 className="font-rubik text-2xl !leading-[normal] max-lg:text-left lg:text-[40px]">
                                Download our App Now!
                            </h3>
                            <p className='text-sm text-white opacity-[0.88] lg:text-base'>
                                Join the ranks of true trivia champions and quench your thirst for knowledge with Masters of Trivia – the ultimate quiz app designed to test your wits and unlock a world of fun facts.

                            </p>
                            <p className="text-sm text-white leading-normal opacity-[0.88] lg:text-base">
                                Challenge your brain, compete with friends, and discover fascinating tidbits from diverse categories. Don't miss out on the exhilarating experience that awaits you – get started now!
                            </p>
                            <div className="flex gap-6 max-lg:flex-wrap">
                                <a href="#" className='flex h-[72px] cursor-pointer items-center gap-4 rounded-2xl bg-[#121618] px-8 py-6 shadow-inner hover:shadow-2xl max-lg:basis-full max-lg:justify-center'>
                                    <img src="/assets/googleplay.webp" className='h-[20px]w-[20px] object-contain max-lg:h-6 max-lg:w-6' alt="" />
                                    <div>
                                        <p className='mb-1 text-white text-[11px] leading-none'>
                                            Get it on
                                        </p>
                                        <p className="font-rubik text-white leading-none">
                                            Google Play
                                        </p>
                                    </div>
                                </a>
                                <a className="flex h-[72px] cursor-pointer items-center gap-4 rounded-2xl bg-[#121618] px-8 py-6 shadow-inner hover:shadow-2xl max-lg:basis-full max-lg:justify-center" href="#">
                                    <img alt="google play" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" className="h-[20px]w-[20px] object-contain max-lg:h-6 max-lg:w-6" src='/assets/ios.webp' />
                                    <div className=""><p className="mb-1 text-white text-[11px] leading-none">Download on the</p><p className="font-rubik text-white leading-none">App Store</p></div></a>
                            </div>
                        </div>
                        <div className="flex-shrink-0 lg:basis-[400px]">
                            <img src="/assets/mobile.webp" className='  max-w-full h-auto' alt="" />

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="waveWrapper">
                <div className="wave waveTop"></div>
                <div className="wave waveMiddle"></div>
            </div> */}
        </div>
    )
}
