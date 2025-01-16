'use client';

import React, { useEffect } from 'react';
import { FaCcMastercard, FaCcVisa, FaFacebookF, FaFileWord, FaGithub, FaInstagram, FaLongArrowAltRight, FaPaypal, FaPinterestP, FaRegFileWord, FaTwitter } from 'react-icons/fa';
import { BiLogoMediumOld } from "react-icons/bi";
import { IoLogoBitcoin } from "react-icons/io";
import { FaBitcoinSign } from "react-icons/fa6";
 
import { Timer } from '../ui/Timer';
import * as Aos from 'aos';

interface SocialIcon {
    icon: React.ReactNode;
}

const social: SocialIcon[] = [
    { icon: <FaFacebookF /> },
    { icon: <FaTwitter /> },
    { icon: <FaPinterestP /> },
    { icon: <FaGithub /> },
    { icon: <FaInstagram /> },
    { icon: <BiLogoMediumOld /> },
    { icon: <IoLogoBitcoin /> },
];

export const HomeSection: React.FC = () => {
    useEffect(() => {
        const canvasAnimation = () => {
            const canvas = document.getElementById('banner_canvas') as HTMLCanvasElement;
            const ctx = canvas.getContext('2d');
            const arc = 200;
            const size = 7;
            const speed = 20;
            const colors = ['#FFC56E', '#FF6CC6', '#4241B8', '#F69040', '#0EADC9'];
            const mouse = { x: 0, y: 0 };
            const parts: { x: number, y: number, toX: number, toY: number, c: string, size: number }[] = [];

            const resizeCanvas = () => {
                canvas.width = canvas.offsetWidth;
                canvas.height = canvas.offsetHeight;
            };

            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);

            for (let i = 0; i < arc; i++) {
                parts.push({
                    x: Math.ceil(Math.random() * canvas.width),
                    y: Math.ceil(Math.random() * canvas.height),
                    toX: Math.random() * 5 - 1,
                    toY: Math.random() * 2 - 1,
                    c: colors[Math.floor(Math.random() * colors.length)],
                    size: Math.random() * size,
                });
            }

            const DistanceBetween = (p1: { x: number, y: number }, p2: { x: number, y: number }) => {
                const dx = p2.x - p1.x;
                const dy = p2.y - p1.y;
                return Math.sqrt(dx * dx + dy * dy);
            };

            const drawParticles = () => {
                ctx?.clearRect(0, 0, canvas.width, canvas.height);
                parts.forEach((li) => {
                    const distanceFactor = Math.max(
                        Math.min(10 - DistanceBetween(mouse, li) / 10, 10),
                        1
                    );
                    ctx?.beginPath();
                    ctx?.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
                    ctx!.fillStyle = li.c;
                    ctx!.fill();

                    li.x += li.toX * (speed * 0.05);
                    li.y += li.toY * (speed * 0.05);

                    if (li.x > canvas.width) li.x = 0;
                    if (li.y > canvas.height) li.y = 0;
                    if (li.x < 0) li.x = canvas.width;
                    if (li.y < 0) li.y = canvas.height;
                });

                requestAnimationFrame(drawParticles);
            };

            const onMouseMove = (e: MouseEvent) => {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
            };

            canvas.addEventListener('mousemove', onMouseMove);
            drawParticles();

            // Cleanup on component unmount
            return () => {
                canvas.removeEventListener('mousemove', onMouseMove);
                window.removeEventListener('resize', resizeCanvas);
            };
        };

        canvasAnimation();
    }, []);

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="section_gradiant3 section_banner relative">
            <div className="loggo absolute top-2 left-2">
                <img src="/assets/logo1.png" className='max-w-[100px] lg:max-w-[180px] h-auto' alt="" />
            </div>
            <canvas id="banner_canvas" className="transparent_effect w-full h-full"></canvas>
            <div className="px-[15px] max-w-[1170px] mx-auto">

                <div className="lg:h-[100px] h-[30px]"></div>
                <div className="lg:h-[50px] h-[20px] hidden lg:block"></div>
                <div className='grid grid-cols-1 items-center lg:grid-cols-2'>
                    <div className="sm:px-[15px]  text-center md:text-start order-2 lg:order-1 pt-[100px] lg:pt-0 ">
                        <h2 data-aos="fade-up" data-aos-duration='1100' className="mb-[25px] font-normal text-white text-[20.8px] md:text-[40px]">
                            <strong>Join the fastest-growing quiz community on the planet</strong>
                        </h2>
                        <p data-aos="fade-up" data-aos-duration='1300' className="text-white mb-[30px]">
                            Own a piece of the future of interactive learning and global gamified knowledge - powered by the Master of Trivia token.
                        </p>
                        <div className="flex" data-aos="fade-up" data-aos-duration='1500'>
                            <a href="#" className='inline-block  btn rounded-[40px] btnDefault'>
                                <FaRegFileWord className='inline-block mr-2.5' />
                                Whitepaper</a>
                            {/* <a href="#" className='inline-block  btn rounded-[40px]  ml-2.5 border-2 border-white hover:text-black hover:bg-white transition-all'>
                                Sign Up To Join
                                <FaLongArrowAltRight className='inline-block ml-2.5' />
                            </a> */}
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
                        <Timer />
                    </div>
                </div>
                <div className="lg:h-[100px] h-[30px] hidden lg:block"></div>
                <div className="lg:h-[50px] h-[20px] hidden lg:block"></div>
            </div>
        </div>
    );
};
