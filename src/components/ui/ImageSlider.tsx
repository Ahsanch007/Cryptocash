"use client";
import React, { useState, MouseEvent } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdClose } from "react-icons/md"; // React Icon for close button

const images: string[] = [
    "/assets/image1.png", // Replace with your image paths
    "/assets/2.png",
    "/assets/image3.png",
];

const ImageSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handlePrev = (): void => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = (): void => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const openModal = (index: number): void => {
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = (): void => {
        setIsModalOpen(false);
    };

    const handleBackdropClick = (e: MouseEvent<HTMLDivElement>): void => {
        if ((e.target as HTMLDivElement).id === "modal-backdrop") {
            closeModal();
        }
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
            {/* Images */}
            <div
                className="flex transition-transform duration-500"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-full shrink-0 cursor-pointer"
                        onClick={() => openModal(index)}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="max-w-[600px] w-full h-auto mx-auto object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Left Arrow */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 -translate-y-1/2 left-4 text-[#0e082c] bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
            >
                <FaArrowLeft size={20} />
            </button>

            {/* Right Arrow */}
            <button
                onClick={handleNext}
                className="absolute top-1/2 -translate-y-1/2 right-4 text-[#0e082c] bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
            >
                <FaArrowRight size={20} />
            </button>

            {/* Fullscreen Modal */}
            {isModalOpen && (
                <div
                    id="modal-backdrop"
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={handleBackdropClick}
                >
                    <div className="relative">
                        <img
                            src={images[currentIndex]}
                            alt={`Fullscreen Slide ${currentIndex + 1}`}
                            className="max-w-[700px] h-[600px] 2xl:h-[800px] object-contain"
                        />
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-[#0e082c] text-3xl hover:text-gray-300"
                        >
                            <MdClose size={20} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageSlider;
