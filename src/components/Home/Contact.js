'use client'
import React, { useEffect } from 'react'
import Location from '../ui/Location'
import { FaArrowRight, FaGlobeAfrica, FaPhoneAlt, FaTelegramPlane } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import Aos from 'aos'

export const Contact = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className='bg-[#fbfaff]'>
            <div className=" ">
                <div className="">
                    {/* <div className="col-span-12 lg:col-span-7 relative">
                        <div className="h-full">
                            <Location />
                        </div>
                    </div> */}
                    <div className="max-w-[500px] mx-auto px-[15px]">
                        <div className="py-[40px] px-[30px]">
                            <div className="" data-aos="fade-up" data-aos-duration='1100'>
                                <h4 className='text-[#0e082c] font-bold text-[26px] mb-[20px] '>
                                    Leave a Message
                                </h4>
                                <p className='mb-[30px]' data-aos="fade-up" data-aos-duration='1300'>
                                    If You have any questions? we're happy to help
                                </p>
                                <form action="" className=''>
                                    <div className="form-group mb-[1rem]" data-aos="fade-up" data-aos-duration='1700'>
                                        <input type="text" placeholder='Enter Name *' name="first-name" id="first-name" className='border border-[#7a7a7a] rounded-[5px] w-full outline-none bg-white py-3 h-[38px] px-[15px] text-[#495057] ' />
                                    </div>
                                    <div className="form-group mb-[1rem]" data-aos="fade-up" data-aos-duration='1900'>
                                        <input type="email" placeholder='Enter Name *' name="email" id="email" className='border border-[#7a7a7a] rounded-[5px] w-full outline-none bg-white py-3 h-[38px] px-[15px] text-[#495057] ' />
                                    </div>
                                    <div className="form-group mb-[1rem]" data-aos="fade-up" data-aos-duration='2100'>
                                        <textarea type="text" placeholder='Message *' name="description" id="description" className='border border-[#7a7a7a] rounded-[5px] w-full outline-none bg-white py-3   px-[15px] text-[#495057] ' >
                                        </textarea>
                                    </div>
                                    <button data-aos="fade-up" data-aos-duration='2300' className='btn bg-gradient-custom2 rounded-[40px] flex gap-2 items-center'>
                                        Submit
                                        <FaArrowRight />
                                    </button>
                                </form>
                                <div className=' grid grid-cols-1 md:grid-cols-2'>
                                    <div className='mt-[20px] flex gap-3 items-center' data-aos="fade-up" data-aos-duration='1600'>
                                        <FaGlobeAfrica className='text-[#193f88]' />
                                        <p className='text-[14px]'>
                                            4 Montgomery, NY 12549
                                        </p>

                                    </div>
                                    <div className='mt-[20px] flex gap-3 items-center' data-aos="fade-up" data-aos-duration='2000'>
                                        <FaPhoneAlt className='text-[#193f88]' />
                                        <p className='text-[14px]'>
                                            +23 0123 4567
                                        </p>

                                    </div>
                                    <div className='mt-[20px] flex gap-3 items-center' data-aos="fade-up" data-aos-duration='2200'>
                                        <IoMdMail className='text-[#193f88]' />
                                        <p className='text-[14px]'>
                                            Yourmail@gmail.com
                                        </p>

                                    </div>
                                    <div className='mt-[20px] flex gap-3 items-center' data-aos="fade-up" data-aos-duration='2400'>
                                        <FaTelegramPlane className='text-[#193f88]' />
                                        <p className='text-[14px]'>
                                            Join us on Telegram
                                        </p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
