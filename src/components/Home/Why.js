'use client'
import Aos from 'aos';
import React, { useEffect } from 'react'

const data = [
    {
        img: "/assets/wc_icon4.png",
        title: "A Thriving Global Ecosystem",
        description:
            "Masters of Trivia connects 196 countries in a dynamic trivia community, driving demand for MOT tokens through tournaments, rewards, and exclusive features—boosting long-term value for investors.",
    },
    {
        img: "/assets/wc_icon5.png",
        title: "Liquidity and Growth Potential",
        description:
            "With strategic tokenomics, robust liquidity pools, and increasing adoption, MOT tokens are designed for sustainable price growth, creating lucrative opportunities for investors as the platform scales globally.",
    },
    {
        img: "/assets/wc_icon6.png",
        title: "A Proven, Media-Backed Platform",
        description:
            "Featured in top media outlets, Masters of Trivia combines credibility with innovation, ensuring investor confidence while attracting millions of engaged users who drive the token’s utility and value.",
    },
];

export const Why = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className='bg-[#fbfaff] py-[30px] lg:py-[100px]'>
            <div className="px-[15px] max-w-[1170px] mx-auto">
                <div className="text-center">
                    <h3 className='text-[#0e082c] text-[26px] font-bold mb-[20px]' data-aos="fade-up" data-aos-duration='1000'>
                        What we Do, in One Sentence.
                    </h3>
                    <p className='text-[#7a7a7a] mb-[30px] max-w-[555px] mx-auto' data-aos="fade-up" data-aos-duration='1200'>
                        We bring the world together through trivia, turning knowledge into entertainment, community, and meaningful rewards.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:grid-cols-3">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="box_wrap rounded-[5px] bg-white text-center"
                            data-aos="fade-up" data-aos-duration='1200'
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="mx-auto max-w-full"
                            />
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
