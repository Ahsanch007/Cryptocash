'use client'
import Aos from 'aos';
import React, { useEffect } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

export const About = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className='bg-white py-[30px] lg:py-[100px]'>
            <div className="px-[15px] max-w-[1170px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2  ">
                    <div className="px-[15px]">
                        <div className="" data-aos="zoom-in" data-aos-duration='1000'>
                            <img src="/assets/about_img10.png" className='max-w-full mx-auto' alt="" />
                        </div>
                    </div>
                    <div className="px-[15px] text-center pt-5 lg:pl-0 md:text-start ">
                        <h4 data-aos="fade-up" data-aos-duration='1400' className='text-[26px] text-[#0e082c] font-bold mb-[20px] '>
                            About The Master of Trivia
                        </h4>
                        <p data-aos="fade-up" data-aos-duration='1600' className='text-[#7a7a7a] mb-[30px]'>
                        Imagine a world where knowledge is power – and that power is rewarded.  <strong> Masters of Trivia </strong> takes education and entertainment to a whole new level, offering a global platform where users test their knowledge, compete for rewards, and grow together.
                        </p>
                        <p className='text-[#7a7a7a] mb-[30px]' data-aos="fade-up" data-aos-duration='1800'>
                        With participants from 196 countries, prizes ranging from exclusive merchandise to custom sports memorabilia, and the promise of lifelong learning, the <strong>MOT</strong> token is your chance to fuel this revolution. Supported by extensive media coverage and third-party credibility, Masters of Trivia isn’t just a token – it’s a ticket to the future of gamified learning.
                        </p>
                        <p className='text-[#7a7a7a] mb-[30px]' data-aos="fade-up" data-aos-duration='1800'>
                        <strong>Masters of Trivia</strong> doesn’t just ask questions – it builds connections. With MOT tokens, you’re joining an international movement that unites curious minds, fosters friendly competition, and turns knowledge into tangible rewards. Think global tournaments, community-driven growth, and countless opportunities to make learning fun and rewarding. We bridge the gap between education and entertainment with a global platform that tests your mind, rewards your curiosity, and connects you with a worldwide community.
                        </p>
                        <a href="#" className='inline-block  btn btnDefault rounded-[40px]  ml-2.5 border-2 border-white   hover:bg-white transition-all'>
                            Let's Start
                            <FaLongArrowAltRight className='inline-block ml-2.5' />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}
