import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

export const About = () => {
    return (
        <div id='about' className='bg-white py-[100px]'>
            <div className="px-[15px] max-w-[1170px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2  ">
                    <div className="px-[15px]">
                        <div className="">
                            <img src="/assets/about_img10.png" className='max-w-full mx-auto' alt="" />
                        </div>
                    </div>
                    <div className="px-[15px]">
                        <h4 className='text-[26px] text-[#0e082c] font-bold mb-[20px] '>
                            About The Cryptocash
                        </h4>
                        <p className='text-[#7a7a7a] mb-[30px]'>
                            Cryptocash is one of the most transformative technologies since the  invention of the Internet. Cryptocash stands firmly in support of financial freedom and the liberty that Bitcoin provides globally for anyone to voluntarily participate in a permissionless and decentralized network.
                        </p>
                        <p className='text-[#7a7a7a] mb-[30px]'>
                            Which empowers people to not be marginalized by governments and financial institutions.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
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
