'use client'
import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose }) => {
    useEffect(() => {
        // Add or remove the scroll-lock class based on the modal state
        if (isOpen) {
            document.body.classList.add("scroll-lock");
        } else {
            document.body.classList.remove("scroll-lock");
        }

        // Cleanup on component unmount
        return () => {
            document.body.classList.remove("scroll-lock");
        };
    }, [isOpen]);

    if (!isOpen) return null;


    return (
        <div className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-gradient-2 rounded-lg shadow-lg max-w-md w-full p-6 relative">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    ✖
                </button>
                <div className="">
                    <div className="text-center">
                        <h1 className="uppercase text-[30px] font-bold">
                            🔥
                            Hot Sale
                            🔥
                        </h1>
                        <h3 className="text-[20px]">
                            Pre-Sale End In
                        </h3>
                        <p className="text-white">
                            Pre-Sale Price 1 EUCC = $0.1
                        </p>
                        <p className="text-white mb-3 text-[14px]">
                            You are good to go!
                        </p>

                        <p className="text-md text-white">
                            Listing price: <strong> $0.1</strong>
                        </p>
                        <div className="py-3 flex gap-3 justify-center items-center">
                            <button className="flex gap-1 items-center border border-white bg-transparent rounded-sm text-white hover:bg-white hover:text-[#0e082c] transition-all py-1 px-2 font-medium" >
                                ETH
                                <img src="/assets/ethereum.png" className="ml-1" alt="" />
                            </button>
                            <button className="flex gap-1 items-center border border-white bg-transparent rounded-sm text-white hover:bg-white hover:text-[#0e082c] transition-all py-1 px-2 font-medium" >
                                USDT
                                <img src="/assets/usdt.png" className="ml-1" alt="" />
                            </button>
                            <button className="flex gap-1 items-center border border-white bg-transparent rounded-sm text-white hover:bg-white hover:text-[#0e082c] transition-all py-1 px-2 font-medium" >
                                BNB
                                <img src="/assets/bnb.png" className="ml-1" alt="" />
                            </button>
                            <button className="flex gap-1 items-center border border-white bg-transparent rounded-sm text-white hover:bg-white hover:text-[#0e082c] transition-all py-1 px-2 font-medium" >
                                CARD
                                <img src="/assets/credit-card.png" className="ml-1" alt="" />
                            </button>
                        </div>
                        <div className="py-3">
                            <div className="mb-2">
                                <div className=" flex justify-between text-sm">
                                    <label htmlFor="" className=" block ">
                                        Amout in USDT you pay
                                    </label>
                                    <span className="block">
                                        MAX
                                    </span>
                                </div>
                                <div className="relative mt-2">
                                    <input type="number" placeholder='0' className='border  border-[#7a7a7a] rounded-[5px] w-full outline-none bg-white py-3 h-[38px] px-[15px] text-[#495057] ' />
                                    <img src="/assets/usdt.png" className="absolute right-2 top-[10px] max-w-full" alt="" />
                                </div>
                            </div>
                            <div className="my-2">
                                <div className=" flex justify-between text-sm">
                                    <label htmlFor="" className=" block ">
                                        Amout in EUCC you received
                                    </label>

                                </div>
                                <div className="relative mt-2">
                                    <input type="number" placeholder='0' className='border  border-[#7a7a7a] rounded-[5px] w-full outline-none bg-white py-3 h-[38px] px-[15px] text-[#495057] ' />
                                    <img src="/assets/usdt.png" className="absolute right-2 top-[10px] max-w-full" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-gradient-custom2 btn rounded-lg">
                                Start Purchase
                            </button>
                        </div>
                        <p className="text-white  my-5 text-[14px]">
                            Are you facing issues connecting with Trust Wallet Extension?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
