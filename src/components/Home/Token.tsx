'use client'
import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { FaCcMastercard, FaCcVisa, FaLongArrowAltRight, FaPaypal } from 'react-icons/fa';

import Modal from '../ui/Modal';

type SaleDataItem = {
  title: string;
  date: string;
  duration: string;
};

type Stage = {
  stage: string;
  duration: string;
  discount: string;
  isDisabled: boolean;
};

const saleData: SaleDataItem[] = [
  {
    title: "Private Pre-Sale",
    date: "June 20, 2018",
    duration: '10 Days',
  },
  {
    title: "Public Pre-Sale",
    date: "July 18, 2018",
    duration: '20 Days',
  },
];

const saleData2: SaleDataItem[] = [
  {
    title: "Low - High 24h",
    date: "$ 0.02 - $ 0.1",
    duration: '30',
  },
  {
    title: "Total Token Sale",
    date: "100,000,000 MOT (20%)",
    duration: '30',
  },
  {
    title: "Acceptable Currency",
    date: "ETH, USDT, USDC",
    duration: '30',
  },
];

const stages: Stage[] = [
  {
    stage: "Stage 1",
    duration: "Aug 2 - Sep 15",
    discount: "95%",
    isDisabled: true,
  },
  {
    stage: "Stage 2",
    duration: "Sep 16 - Sep 23",
    discount: "60%",
    isDisabled: true,
  },
  {
    stage: "Stage 3",
    duration: "Sep 24 - Oct 5",
    discount: "25%",
    isDisabled: false,
  },
  {
    stage: "Stage 4",
    duration: "Oct 5 - Oct 16",
    discount: "10%",
    isDisabled: false,
  },
  {
    stage: "Stage 5",
    duration: "Oct 17 - Nov 25",
    discount: "5%",
    isDisabled: false,
  },
  {
    stage: "Stage 6",
    duration: "Nov 26 - Dec 31",
    discount: "0%",
    isDisabled: false,
  },
];

export const Token: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2025-01-31T00:00:00"); // Set your target date here

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime(); 

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      } else {
        // If the countdown has ended
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <div id='token' className='py-[30px] lg:py-[100px]' style={{ background: 'linear-gradient(to right, #193f88 0%,#0e082c 99%)' }}>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />

      <div className="px-[15px] max-w-[1170px] mx-auto">
        <div className="text-center">
          <h3 className='text-[26px] text-white font-bold mb-[20px]' data-aos="fade-up" data-aos-duration='1000'>
            Token Structure
          </h3>
        </div>
        <div className="grid grid-cols-12 gap-3 lg:gap-0 items-center">
          <div className="col-span-12 lg:col-span-3 lg:px-[15px]">
            {saleData.map((item, index) => (
              <div
                key={index}
                className="py-[20px] px-[15px] text-white mt-[20px] bg-[#ffffff1a] text-center"
                data-aos="fade-up" data-aos-duration={item.duration}
              >
                <h5 className="font-medium text-[20px]">{item.title}</h5>
                <span>{item.date}</span>
              </div>
            ))}
          </div>
          <div className="col-span-12 lg:col-span-6 lg:px-[15px]" data-aos="zoom-in" data-aos-duration='1600'>
            <div className="bg-[#ffffff1a] text-center lg:p-[35px] p-[15px]">
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

                <div className="progress" data-aos="fade-up" data-aos-duration='1300'>
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
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:px-[15px]">
            {saleData2.map((item, index) => (
              <div
                key={index}
                className="py-[20px] px-[15px] text-white mt-[20px] bg-[#ffffff1a] text-center"
                data-aos="fade-up" data-aos-duration={item.duration}
              >
                <h5 className="font-medium text-[20px]">{item.title}</h5>
                <span>{item.date}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[100px]"></div>
        <div className="text-center">
          <h1 className='text-[26px] font-bold text-white mb-[30px]' data-aos="fade-up" data-aos-duration='1300'>
            Bonus Stages
          </h1>
        </div>
        <div className="grid grid-cols-12 gap-[30px]">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="col-span-12 xl:col-span-2 lg:col-span-3 md:col-span-4"
              data-aos="fade-up" data-aos-duration={stage.duration}
            >
              <div className="bg-[#ffffff1a] text-center mt-[20px] rounded-[5px]">
                <div className="p-[10px] border-b border-[#fff3]">
                  <h5 className="font-bold text-white">{stage.stage}</h5>
                </div>
                <div className="p-[15px]">
                  <h6 className="text-white font-medium mb-[.5rem]">{stage.duration}</h6>
                  <div className="text-[#ffcb68] pt-[25px] pb-[15px]">
                    <span className="text-[20px]">{stage.discount}</span> Discount
                  </div>
                  <a
                    href="#"
                    className={`text-[20px] font-bold ${stage.isDisabled
                      ? "disabled opacity-[0.6] cursor-default"
                      : "text-white transition-all hover:text-[#ff69c9]"
                      }`}
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
