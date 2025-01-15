import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Timeline = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [showContent, setShowContent] = useState(true); // To control content visibility
    const [itemsToShow, setItemsToShow] = useState(5); // Initialize with default value

    const timelineData = [
        { date: "April 2024", content: "MOT Platform Relaunch" },
        { date: "September 2024", content: "100,000 Downloads Reach" },
        { date: "December 2024", content: "200,000 Downloads Reach" },
        { date: "January 2025", content: "50,000+ Monthly Active Users" },
        { date: "February 2025", content: "Launch of the MOT Token" },
    ];

    // Handle screen resize dynamically
    useEffect(() => {
        const updateItemsToShow = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setItemsToShow(1);
            } else if (width < 1024) {
                setItemsToShow(3);
            } else {
                setItemsToShow(5);
            }
        };

        updateItemsToShow(); // Set initial value
        window.addEventListener("resize", updateItemsToShow); // Update on resize

        return () => {
            window.removeEventListener("resize", updateItemsToShow); // Cleanup listener
        };
    }, []);

    const handleNavigation = (direction) => {
        setShowContent(false); // Hide content when navigating

        if (direction === "prev" && activeIndex > 0) {
            setShowContent(true)
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
                className={`absolute top-[34%]   sm:top-[34%] z-[1] left-0 transform -translate-y-1/2 p-2 rounded-full ${activeIndex === 0
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-white text-[#0e082c] hover:bg-[#ff69c9] hover:text-white shadow-md"
                    }`}
                disabled={activeIndex === 0}
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={() => handleNavigation("next")}
                className={`absolute top-[34%]   sm:top-[34%] z-[1] right-0 transform -translate-y-1/2 p-2 rounded-full ${activeIndex >= timelineData.length - itemsToShow
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
                <div className="absolute top-[19%]   sm:top-[17%] left-0 h-1 w-full bg-[#fff3] transform -translate-y-1/2"></div>

                {/* Active Progress Bar */}
                {showContent &&
                    <div
                        className="absolute top-[19%]   sm:top-[17%] w-full lg:w-[70%] left-0 h-1 bg-[#ff69c9] transform -translate-y-1/2 transition-all duration-300"
                    ></div>
                }

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
                                : " border-2 border-white"
                                }`}
                        >
                            <div
                                className={`w-[20px] h-[20px] rounded-full ${index <= activeIndex ? "bg-white" : "bg-white"
                                    }`}
                            ></div>
                        </div>

                        {/* Date */}
                        <p
                            className={`mt-4 text-md font-bold text-white`}
                        >
                            {item.date}
                        </p>
                        <p className="text-sm   sm:block text-white">{item.content}</p>

                        {/* Content Box */}
                        {showContent && index === 3 && ( // Only show content for the second item
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
