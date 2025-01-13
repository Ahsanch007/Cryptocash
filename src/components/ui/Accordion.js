'use client'
import Aos from 'aos';
import React, { useState, useRef, useEffect } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const AccordionItem = ({ title, content, isOpen, toggle }) => {
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    const handleToggle = () => {
        toggle();
    };

    React.useEffect(() => {
        if (isOpen) {
            setHeight(contentRef.current.scrollHeight); // Set height to the full content height
        } else {
            setHeight(0); // Reset to 0 when closed
        }
    }, [isOpen]);
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className={`border-[#193f88] ${isOpen ? 'border rounded-[5px] mt-3' : 'border-b'}`} data-aos="fade-up" data-aos-duration='1600'>
            <button
                onClick={handleToggle}
                className="flex gap-2 relative items-center text-[#193f88] w-full p-[15px] text-left text-[18px] font-semibold focus:outline-none"
            >
                <div className="text-[24px] rounded-full flex justify-center items-center font-bold h-[30px] w-[30px] bg-[#193f88] text-white py-[5px]">
                    ?
                </div>
                {title}
                <span className={`transition-transform absolute right-3 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                    <FaLongArrowAltRight />
                </span>
            </button>
            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{
                    height: height ? `${height}px` : '0px', // Dynamically adjust height
                    transitionProperty: 'height',
                }}
            >
                <div className="relative p-[1.25rem] pl-[40px] card-body text-gray-600 border-t border-[#193f88]">
                    {content}
                </div>
            </div>
        </div>
    );
};

export const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };



    return (
        <div>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    toggle={() => toggleAccordion(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
