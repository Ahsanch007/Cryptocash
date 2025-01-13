'use client'
import Aos from 'aos';
import React, { useEffect } from 'react'

export const Graph = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className='py-[100px] bg-white overflow-hidden'>
            <div className="px-[15px] max-w-[1170px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    <div className="">
                        <div className="text-center" data-aos="fade-up" data-aos-duration='1300'>
                            <h3 className='text-[#0e082c] text-[26px] font-bold mb-[20px]'>
                                Token Sale Proceeds
                            </h3>
                        </div>
                        <div className="pt-[30px]" data-aos="fade-left" data-aos-duration='1300'>
                            <img src="/assets/sale-proceeds7.png" className='max-w-full h-auto mx-auto' alt="" />
                        </div>
                    </div>
                    <div className="">
                        <div className="text-center">
                            <h3 className='text-[#0e082c] text-[26px] font-bold mb-[20px]' data-aos="fade-up" data-aos-duration='1300'>
                                Token Distribution

                            </h3>
                        </div>
                        <div className="pt-[30px]" data-aos="fade-right" data-aos-duration='1300'>
                            <img src="/assets/distribution7.png" className='max-w-full h-auto mx-auto' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
