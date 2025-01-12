'use client';

import React, { useEffect } from 'react';
import { FaCcMastercard, FaCcVisa, FaFacebookF, FaFileWord, FaGithub, FaInstagram, FaLongArrowAltRight, FaPaypal, FaPinterestP, FaRegFileWord, FaTwitter } from 'react-icons/fa';
import { BiLogoMediumOld } from "react-icons/bi";
import { IoLogoBitcoin } from "react-icons/io";
import { FaBitcoinSign } from "react-icons/fa6";


const social = [
    {
        icon: <FaFacebookF />
    },
    {
        icon: <FaTwitter />
    },
    {
        icon: <FaPinterestP />
    },
    {
        icon: <FaGithub />
    },
    {
        icon: <FaInstagram />
    },
    {
        icon: <BiLogoMediumOld />
    },
    {
        icon: <IoLogoBitcoin />
    },
]

export const HomeSection = () => {
    useEffect(() => {
        const canvasAnimation = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            const canvas = document.getElementById('banner_canvas');
            const ctx = canvas.getContext('2d');
            const rate = 60;
            const arc = 200;
            const size = 7;
            const speed = 20;
            const colors = ['#FFC56E', '#FF6CC6', '#4241B8', '#F69040', '#0EADC9'];
            const mouse = { x: 0, y: 0 };
            const parts = [];

            canvas.width = w;
            canvas.height = h;

            for (let i = 0; i < arc; i++) {
                parts.push({
                    x: Math.ceil(Math.random() * w),
                    y: Math.ceil(Math.random() * h),
                    toX: Math.random() * 5 - 1,
                    toY: Math.random() * 2 - 1,
                    c: colors[Math.floor(Math.random() * colors.length)],
                    size: Math.random() * size,
                });
            }

            const particles = () => {
                ctx.clearRect(0, 0, w, h);
                canvas.addEventListener('mousemove', (e) => {
                    mouse.x = e.offsetX;
                    mouse.y = e.offsetY;
                });

                parts.forEach((li) => {
                    const distanceFactor = Math.max(
                        Math.min(15 - DistanceBetween(mouse, li) / 10, 10),
                        1
                    );
                    ctx.beginPath();
                    ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
                    ctx.fillStyle = li.c;
                    ctx.strokeStyle = li.c;
                    if (Math.random() > 0.5) ctx.stroke();
                    else ctx.fill();

                    li.x += li.toX * (speed * 0.05);
                    li.y += li.toY * (speed * 0.05);

                    if (li.x > w) li.x = 0;
                    if (li.y > h) li.y = 0;
                    if (li.x < 0) li.x = w;
                    if (li.y < 0) li.y = h;
                });

                setTimeout(particles, 1000 / rate);
            };

            const DistanceBetween = (p1, p2) => {
                const dx = p2.x - p1.x;
                const dy = p2.y - p1.y;
                return Math.sqrt(dx * dx + dy * dy);
            };

            particles();
        };

        canvasAnimation();
    }, []);

    return (
        <div id="home_section" className="section_gradiant3 section_banner">
            <canvas id="banner_canvas" className="transparent_effect w-full h-full"></canvas>
            <div className="px-[15px] max-w-[1170px] mx-auto">

                <div className="lg:h-[100px] h-[30px]"></div>
                <div className="lg:h-[50px] h-[20px] hidden lg:block"></div>
                <div className='grid grid-cols-1 items-center lg:grid-cols-2'>
                    <div className="sm:px-[15px]  text-center md:text-start order-2 lg:order-1 pt-[100px] lg:pt-0 ">
                        <h2 className="mb-[25px] font-normal text-white text-[20.8px] md:text-[40px]">
                            <strong>Bitcoin</strong> is an <strong>innovative</strong> payment
                            <strong>network</strong> and a new kind of <strong>money.</strong>
                        </h2>
                        <p className="text-white mb-[30px]">
                            The mining starts immediately after confirmed payment. First payouts within 24 hours.
                        </p>
                        <div className="flex">
                            <a href="#" className='inline-block  btn rounded-[40px] btnDefault'>
                                <FaRegFileWord className='inline-block mr-2.5' />
                                Whitepaper</a>
                            <a href="#" className='inline-block  btn rounded-[40px]  ml-2.5 border-2 border-white hover:text-black hover:bg-white transition-all'>
                                Sign Up To Join
                                <FaLongArrowAltRight className='inline-block ml-2.5' />
                            </a>
                        </div>
                        <div className="vertical_social">
                            <ul className='list-none flex lg:flex-col'>
                                {social.map((icons, index) =>
                                    <li className='py-[10px] px-[15px]' key={index}>
                                        <a href="#" className='transition-all text-white hover:text-[#ff69c9]'>
                                            {icons.icon}
                                        </a>
                                    </li>
                                )}

                            </ul>
                        </div>
                    </div>
                    <div className="md:px-[15px] max-w-[487px] w-full ml-auto order-1">
                        <div className='relative token_gradiant'>
                            <div className="tk_countdown transparent_bg token_bg token_circle text-center relative ">
                                <div className="banner_text tk_counter_inner">
                                    <div className="rounded-[9px] p-0 transparent_bg shadow-none">
                                        <span className="counter_box">
                                            <span id="days" className="tk_counter days">00 </span>
                                            <span className="tk_text">Days</span>
                                        </span>

                                        <span className="counter_box">
                                            <span id="hours" className="tk_counter hours">00</span>
                                            <span className="tk_text">Hours</span>
                                        </span>

                                        <span class="counter_box">
                                            <span id="mins" class="tk_counter minutes">00</span>
                                            <span class="tk_text">Minutes</span>
                                        </span>

                                        <span className="counter_box">
                                            <span id="secs" className="tk_counter seconds">00</span>
                                            <span className="tk_text">Seconds</span>
                                        </span>
                                    </div>

                                    <div className="progress  ">
                                        <div className="progress-bar progress-bar-striped gradient w-[46%]">
                                            46%
                                        </div>
                                        <div className="progress_label bg-white left-[30%]">
                                            <strong> 46,000 BCC </strong>
                                        </div>
                                        <div className="progress_label bg-white left-[75%]">
                                            <strong>  90,000 BCC  </strong>
                                        </div>
                                        <span className="progress_min_val">Sale Raised</span>
                                        <span className='progress_max_val'>
                                            Soft-caps
                                        </span>
                                    </div>
                                    <div className="flex justify-center my-[15px]">

                                        <button className="btn btnDefault rounded-[40px] flex items-center gap-2 ">
                                            Buy Tokens
                                            <FaLongArrowAltRight className='inline-block ml-2.5' />

                                        </button>
                                    </div>
                                    <ul className="flex justify-center list-none">
                                        <li className='px-[5px]'>
                                            <FaCcVisa className='w-[20px] h-auto' />
                                        </li>
                                        <li className='px-[5px]'>
                                            <FaCcMastercard className='w-[20px] h-auto' />
                                        </li>
                                        <li className='px-[5px]'>
                                            <FaBitcoinSign className='w-[20px] h-auto' />
                                        </li>
                                        <li className='px-[5px]'>
                                            <FaPaypal className='w-[20px] h-auto' />
                                        </li>
                                    </ul>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:h-[100px] h-[30px] hidden lg:block"></div>
                <div className="lg:h-[50px] h-[20px] hidden lg:block"></div>
            </div>
        </div>
    );
};
