import React from 'react'
import ImageSlider from '../ui/ImageSlider'

export const Image = () => {
    return (
            <div className='bg-[#fbfaff] py-[30px] lg:py-[100px]'>
                <div className="text-center">
                    <h3 className='  text-[26px] text-[#0e082c] font-bold mb-[20px]'>
                        Brand Notoriety and Media Engagement
                    </h3>
                    <p className=' mb-[30px] max-w-[721px] mx-auto'>
                        <strong>Masters of Trivia</strong> enjoys significant media recognition and actively sponsors two rugby teams: Haguenau in France and the Hunslet Wolves in South Leeds, UK. These partnerships not only boost our visibility but also reinforce our commitment to fostering community and engagement on a global scale.
                    </p>

                    <p className=' mb-[30px] max-w-[721px] mx-auto'>
                        By building a recognized and trusted brand, <strong>Masters of Trivia</strong> creates a foundation for long-term name recognition and credibility. This visibility drives user adoption, enhances token market cap, and delivers value to stakeholders, ensuring the <strong>MOT</strong> platform remains a trusted and influential presence in both sports and edutainment.
                    </p>
                </div>
                <div className="px-[15px] max-w-[1170px] mx-auto">
                    <ImageSlider />
                </div>
            </div>
    )
}
