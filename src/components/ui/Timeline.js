import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Timeline = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showContent, setShowContent] = useState(true); // To control content visibility

    const timelineData = [
        { date: "April 2018", content: "Initial Coin Distribution & marketing" },
        { date: "February 2018", content: "Exchange Cryptocash to Bitcoin" },
        { date: "March 2018", content: "BTCC mode of payment in Cryptocash" },
        { date: "June 2018", content: "Send-Receive coin Cryptocash & mobile" },
        { date: "October 2018", content: "Coin Marketcap, World Coin Index" },
        { date: "October 2018", content: "Coin Marketcap, World Coin Index" },
    ];

    const itemsToShow = window.innerWidth < 768 ? 2 : window.innerWidth < 1024 ? 3 : 5; // Set number of items to show based on screen size

    const handleNavigation = (direction) => {
        setShowContent(false); // Hide content when navigating

        if (direction === "prev" && activeIndex > 0) {
            setActiveIndex((prev) => prev - 1); // Move to previous item
        } else if (direction === "next" && activeIndex < timelineData.length - itemsToShow) {
            setActiveIndex((prev) => prev + 1); // Move to next item
        }

        // Reset active state after navigating to give a clear transition
        setTimeout(() => {
            setShowContent(true); // Re-show the content (second data)
        }, 300); // Adjust time delay to your preference
    };

    return (
        <div className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-12 px-4">
            {/* Navigation Arrows */}
            <button
                onClick={() => handleNavigation("prev")}
                className={`absolute top-[40%] z-[1] left-4 transform -translate-y-1/2 p-2 rounded-full ${activeIndex === 0
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-white text-[#0e082c] hover:bg-[#ff69c9] hover:text-white shadow-md  "
                    }`}
                disabled={activeIndex === 0}
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={() => handleNavigation("next")}
                className={`absolute top-[40%] z-[1] right-4 transform -translate-y-1/2 p-2 rounded-full ${activeIndex >= timelineData.length - itemsToShow
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-white text-[#0e082c] hover:bg-[#ff69c9] hover:text-white shadow-md  "
                    }`}
                disabled={activeIndex >= timelineData.length - itemsToShow}
            >
                <FaChevronRight />
            </button>

            {/* Timeline */}
            <div className="relative flex items-center justify-between">
                {/* Background Line */}
                <div className="absolute top-[25%] left-0 h-1 w-full bg-[#fff3] transform -translate-y-1/2"></div>

                {/* Active Progress Bar */}
                <div
                    className="absolute top-[25%] w-full lg:w-[30%] left-0 h-1 bg-[#ff69c9] transform -translate-y-1/2 transition-all duration-300"

                ></div>

                {/* Timeline Items */}
                {timelineData.slice(activeIndex, activeIndex + itemsToShow).map((item, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center text-center"
                        style={{ flex: "1 1 auto" }}
                    >
                        {/* Circle */}
                        <div
                            className={`w-8 h-8 flex items-center justify-center rounded-full  ${index <= 1 ? "border-[#ff69c9] bg-white border-4" : " border-2 border-white "
                                }  `}
                        >
                            <div
                                className={`w-[20px] h-[20px] rounded-full ${index <= activeIndex ? "bg-white" : "bg-white"
                                    }`}
                            ></div>
                        </div>

                        {/* Date */}
                        <p
                            className={`mt-4 text-md font-bold text-white
                                `}
                        >
                            {item.date}
                        </p>

                        {/* Content Box */}
                        {showContent && index === 1 && ( // Only show content for the second item
                            <div className="absolute mt-12 p-4 bg-[#ff69c9] text-white rounded-md shadow-lg">
                                <div className="relative timeline_inner">
                                    <h3 className="text-md font-bold">
                                        {item.date}
                                    </h3>
                                    <p className="text-sm text-white">{item.content}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
