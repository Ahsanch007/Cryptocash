import React from 'react'
import ImageSlider from '../ui/ImageSlider'
import Timeline from '../ui/Timeline'

export const Roadmap = () => {
    return (
        <div className='py-[30px] lg:py-[100px] bg-gradient-2'>
            <div className="px-[15px] max-w-[1170px] mx-auto">
                <div className="text-center">
                    <h3 className='  text-[26px] text-white font-bold mb-[20px]'>
                        Roadmap
                    </h3>
                    <p className=' mb-[30px] text-white  max-w-[555px] mx-auto'>
                        After a 16-year hiatus, Masters of Trivia made its comeback in 2024, blending Web2 and Web3 technologies to create a groundbreaking trivia experience.

                    </p>
                </div>
                <Timeline />
                {/* <ImageSlider /> */}


            </div>
        </div>
    )
}
