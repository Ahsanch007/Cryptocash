import React from 'react'

export const Client = () => {
    return (
        <div className='py-[100px] bg-white'>
            <div className="px-[15px] max-w-[1170px] mx-auto">
                <div className="text-center">
                    <h3 className='text-[26px] text-[#0e082c] font-bold mb-[20px]'>
                        Our Clients
                    </h3>
                </div>
                <div className="mt-4 grid grid-cols-2 lg:grid-cols-4">
                    <div className="logo_border relative px-[15px] py-[40px]">
                        <div className="flex justify-center h-full">
                            <img src="/assets/client_logo_dark_gray1.png" className='max-w-full' alt="" />
                        </div>
                    </div>
                    <div className="logo_border relative px-[15px] py-[40px]">
                        <div className="flex justify-center h-full">
                            <img src="/assets/client_logo_dark_gray2.png" className='max-w-full' alt="" />
                        </div>
                    </div>
                    <div className="logo_border relative px-[15px] py-[40px]">
                        <div className="flex justify-center h-full">
                            <img src="/assets/client_logo_dark_gray3.png" className='max-w-full' alt="" />
                        </div>
                    </div>
                    <div className="logo_border2 relative px-[15px] py-[40px]">
                        <div className="flex justify-center h-full">
                            <img src="/assets/client_logo_dark_gray4.png" className='max-w-full' alt="" />
                        </div>
                    </div>

                    <div className="logo_border3 relative px-[15px] py-[40px]">
                        <div className="flex justify-center h-full">
                            <img src="/assets/client_logo_dark_gray5.png" className='max-w-full' alt="" />
                        </div>
                    </div>
                    <div className="logo_border3 relative px-[15px] py-[40px]">
                        <div className="flex justify-center h-full">
                            <img src="/assets/client_logo_dark_gray6.png" className='max-w-full' alt="" />
                        </div>
                    </div>
                    <div className="logo_border3 relative px-[15px] py-[40px]">
                        <div className="flex justify-center h-full">
                            <img src="/assets/client_logo_dark_gray7.png" className='max-w-full' alt="" />
                        </div>
                    </div>
                    <div className="logo_border4 relative px-[15px] py-[40px]">
                        <div className="flex justify-center h-full">
                            <img src="/assets/client_logo_dark_gray8.png" className='max-w-full' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
