'use client'
import Aos from 'aos';
import React, { useEffect } from 'react'
import { IoDownloadOutline } from "react-icons/io5";

export const WhitePaper = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className='py-[30px] lg:py-[100px] bg-white'>
            <div className="px-[15px] max-w-[1170px] mx-auto">
                <div className="text-center">
                    <h3 data-aos="fade-up" data-aos-duration='1300' className='  text-[26px] text-[#0e082c] font-bold mb-[20px]'>
                        Download Our Documents

                    </h3>
                    <p data-aos="fade-up" data-aos-duration='1500' className=' mb-[30px]   max-w-[555px] mx-auto'>
                        Marketers create whitepapers to educate their audience about a particular issue, or explain and promote a particular methodology
                    </p>
                </div>

                <div className="mt-[20px] grid grid-cols-12 gap-[30px] ">
                    <div className="col-span-12 lg:col-span-7 md:order-1">
                        <p className='mb-[30px]' data-aos="fade-up" data-aos-duration='1500'>
                            A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution.Digital signatures provide part of the solution, but the main benefits are lost if a trusted third party is still required to prevent double-spending.
                        </p>
                        <p className='mb-[30px]' data-aos="fade-up" data-aos-duration='1700'>
                            The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work.
                        </p>
                        <div className="mb-[20px]" data-aos="fade-up" data-aos-duration='1900'>
                            <label htmlFor="" className='mb-[.5rem] text-[#7a7a7a]'>
                                Select Document
                            </label>
                            <select id="countries" className=" bg-transparent ml-3 text-[#7a7a7a] border border-[#7a7a7a] py-[3px] px-[15px] rounded-[40px]">
                                <option >Whitepaper</option>
                                <option >Onepaper</option>
                                <option >Terms Conditions</option>
                                <option >Privacy Policy</option>
                            </select>
                        </div>
                        <div className="">
                            <ul className="flex list-none gap-[14px]">
                                <li data-aos="fade-up" data-aos-duration='2000'>
                                    <div className='bg-white text-center cursor-pointer rounded-[5px] transition-all text-[#7a7a7a] hover:text-[#ff69c9]' style={{ boxShadow: '0 0 10px rgba(0,0,0,0.09)', padding: '15px 15px 10px' }}>
                                        <img src="/assets/eng_flage.png" className='max-w-[33px] mx-auto ' alt="" />
                                        <span className='mt-[5px] flex gap-2 items-center'>
                                            English
                                            <IoDownloadOutline />
                                        </span>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration='2300'>
                                    <div className='bg-white text-center cursor-pointer rounded-[5px] transition-all text-[#7a7a7a] hover:text-[#ff69c9]' style={{ boxShadow: '0 0 10px rgba(0,0,0,0.09)', padding: '15px 15px 10px' }}>
                                        <img src="/assets/rus_flage.png" className='max-w-[33px] mx-auto ' alt="" />
                                        <span className='mt-[5px] flex gap-2 items-center'>
                                            Russian
                                            <IoDownloadOutline />
                                        </span>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration='2500'>
                                    <div className='bg-white text-center cursor-pointer rounded-[5px] transition-all text-[#7a7a7a] hover:text-[#ff69c9]' style={{ boxShadow: '0 0 10px rgba(0,0,0,0.09)', padding: '15px 15px 10px' }}>
                                        <img src="/assets/chn_flage.png" className='max-w-[33px] mx-auto ' alt="" />
                                        <span className='mt-[5px] flex gap-2 items-center'>
                                            Chinese
                                            <IoDownloadOutline />
                                        </span>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-duration='2600'>
                                    <div className='bg-white text-center cursor-pointer rounded-[5px] transition-all text-[#7a7a7a] hover:text-[#ff69c9]' style={{ boxShadow: '0 0 10px rgba(0,0,0,0.09)', padding: '15px 15px 10px' }}>
                                        <img src="/assets/frn_flage.png" className='max-w-[33px] mx-auto ' alt="" />
                                        <span className='mt-[5px] flex gap-2 items-center'>
                                            French
                                            <IoDownloadOutline />
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-5 order-1">
                        <div className="" data-aos="zoom-in" data-aos-duration='2000'>
                            <img src="/assets/whitepaper5.png" className='max-w-full mx-auto' alt="" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
