'use client'
import React, { useEffect, useState } from 'react'
import { FaCcMastercard, FaCcVisa, FaFacebookF, FaFileWord, FaGithub, FaInstagram, FaLongArrowAltRight, FaPaypal, FaPinterestP, FaRegFileWord, FaTwitter } from 'react-icons/fa';
import { FaBitcoinSign } from "react-icons/fa6";
import Modal from './Modal';

interface TimeLeft {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}

export const Timer: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {
        const targetDate = new Date('2025-01-31T00:00:00'); // Set your target date here

        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({
                    days: String(days).padStart(2, '0'),
                    hours: String(hours).padStart(2, '0'),
                    minutes: String(minutes).padStart(2, '0'),
                    seconds: String(seconds).padStart(2, '0'),
                });
            } else {
                // If the countdown has ended
                setTimeLeft({
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00',
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, []);

    const handleOpenModal = (): void => {
        setIsModalOpen(true);
    };

    const handleCloseModal = (): void => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className='relative  token_gradiant'>
                <div data-aos="zoom-in" data-aos-duration='1100' className="tk_countdown  z-[1] transparent_bg token_bg token_circle text-center relative ">
                    <div className="banner_text tk_counter_inner">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="1200"
                            className="rounded-[9px] countdown p-0 transparent_bg shadow-none"
                        >
                            <span className="counter_box">
                                <span id="days" className="tk_counter days">
                                    {timeLeft.days}
                                </span>
                                <span className="tk_text">Days</span>
                            </span>

                            <span className="counter_box">
                                <span id="hours" className="tk_counter hours">
                                    {timeLeft.hours}
                                </span>
                                <span className="tk_text">Hours</span>
                            </span>

                            <span className="counter_box">
                                <span id="mins" className="tk_counter minutes">
                                    {timeLeft.minutes}
                                </span>
                                <span className="tk_text">Minutes</span>
                            </span>

                            <span className="counter_box">
                                <span id="secs" className="tk_counter seconds">
                                    {timeLeft.seconds}
                                </span>
                                <span className="tk_text">Seconds</span>
                            </span>
                        </div>

                        <div className="progress  " data-aos="fade-up" data-aos-duration='1300'>
                            <div className="progress-bar progress-bar-striped gradient w-[46%]">
                                46%
                            </div>
                            <div className="progress_label bg-white left-[30%]">
                                <strong> 46,000 MOT </strong>
                            </div>
                            <div className="progress_label bg-white left-[75%]">
                                <strong>  90,000 MOT  </strong>
                            </div>
                            <span className="progress_min_val">Sale Raised</span>
                            <span className='progress_max_val'>
                                Soft-caps
                            </span>
                        </div>
                        <div className="flex justify-center my-[15px]" data-aos="fade-up" data-aos-duration='1400'>

                            <button onClick={handleOpenModal} className="btn btnDefault rounded-[40px] flex items-center gap-2 ">
                                Buy Tokens
                                <FaLongArrowAltRight className='inline-block ml-2.5' />

                            </button>
                        </div>
                        {/* <ul className="flex justify-center list-none">
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
                        </ul> */}


                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
        </>

    )
}
