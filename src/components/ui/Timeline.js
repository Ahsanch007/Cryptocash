import { useState, useLayoutEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Timeline = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Start with the first item as active
    const [itemsToShow, setItemsToShow] = useState(5); // Default value for larger screens

    const timelineData = [
        { date: "April 2024", content: "MOT Platform Relaunch" },
        { date: "September 2024", content: "100,000 Downloads Reach" },
        { date: "December 2024", content: "200,000 Downloads Reach" },
        { date: "January 2025", content: "50,000+ Monthly Active Users" },
        { date: "February 2025", content: "Launch of the MOT Token" },
    ];

    // Handle screen resize dynamically
    useLayoutEffect(() => {
        const updateItemsToShow = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setItemsToShow(2); // Show 1 item on mobile screens
            } else {
                setItemsToShow(5); // Show multiple items on larger screens
            }
        };

        updateItemsToShow(); // Set initial value
        window.addEventListener("resize", updateItemsToShow); // Update on resize

        return () => {
            window.removeEventListener("resize", updateItemsToShow); // Cleanup listener
        };
    }, []);

    const handleNavigation = (direction) => {
        if (direction === "prev" && activeIndex > 0) {
            setActiveIndex((prev) => prev - 1); // Move to previous item
        } else if (direction === "next" && activeIndex < timelineData.length - itemsToShow) {
            setActiveIndex((prev) => prev + 1); // Move to next item
        }
    };

    return (
        <div className="relative bg-gradient-to-r from-blue-800 to-blue-900 text-white py-12 px-4">
            {/* Navigation Arrows */}
            <button
                onClick={() => handleNavigation("prev")}
                className={`absolute top-[34%] sm:top-[34%] z-[1] left-0 transform -translate-y-1/2 p-2 rounded-full ${activeIndex === 0
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-white text-[#0e082c] hover:bg-[#ff69c9] hover:text-white shadow-md"
                    }`}
                disabled={activeIndex === 0}
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={() => handleNavigation("next")}
                className={`absolute top-[34%] sm:top-[34%] z-[1] right-0 transform -translate-y-1/2 p-2 rounded-full ${activeIndex >= timelineData.length - itemsToShow
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-white text-[#0e082c] hover:bg-[#ff69c9] hover:text-white shadow-md"
                    }`}
                disabled={activeIndex >= timelineData.length - itemsToShow}
            >
                <FaChevronRight />
            </button>

            {/* Timeline */}
            <div className="relative flex items-center justify-between">
                {/* Background Line */}
                <div className="absolute top-[19%] sm:top-[17%] left-0 h-1 w-full bg-[#fff3] transform -translate-y-1/2"></div>
                <div className={`absolute top-[19%] sm:top-[17%] ${activeIndex === 3 ? 'w-[22%]' : activeIndex ? 'w-[70%]' : 'w-[20%]'}  lg:w-[70%] left-0 h-1 bg-[#ff69c9] transform -translate-y-1/2 transition-all duration-300`}></div>

                {/* Timeline Items */}
                {timelineData.slice(activeIndex, activeIndex + itemsToShow).map((item, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center text-center"
                        style={{ flex: "1 1 auto" }}
                    >
                        {/* Circle */}
                        <div
                            className={`w-8 h-8 flex items-center justify-center rounded-full ${index <= 3
                                ? "border-[#ff69c9] bg-white border-4"
                                : "border-2 border-white"
                                }`}
                        >
                            <div
                                className={`w-[20px] h-[20px] rounded-full ${index + activeIndex <= activeIndex ? "bg-white" : "bg-white"
                                    }`}
                            ></div>
                        </div>

                        {/* Date */}
                        <div className=" px-1">

                            <p className="mt-4 text-sm md:text-md font-bold text-white">{item.date}</p>
                            <p className="md:text-sm text-xs sm:block text-white">{item.content}</p>
                        </div>

                        {/* Content Box */}
                        {index + activeIndex === 3 && (
                            <div className="absolute mt-12  p-2 md:p-4 bg-[#ff69c9] text-white rounded-md shadow-lg">
                                <h3 className="text-sm md:text-md font-bold">{item.date}</h3>
                                <p className="md:text-sm text-xs text-white">{item.content}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
