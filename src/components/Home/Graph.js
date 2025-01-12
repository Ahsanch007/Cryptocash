import React from 'react'

export const Graph = () => {
    return (
        <div className='py-[100px] bg-white'>
            <div className="px-[15px] max-w-[1170px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    <div className="">
                        <div className="text-center">
                            <h3 className='text-[#0e082c] text-[26px] font-bold mb-[20px]'>
                                Token Sale Proceeds
                            </h3>
                        </div>
                        <div className="pt-[30px]">
                            <img src="/assets/sale-proceeds7.png" className='max-w-full h-auto mx-auto' alt="" />
                        </div>
                    </div>
                    <div className="">
                        <div className="text-center">
                            <h3 className='text-[#0e082c] text-[26px] font-bold mb-[20px]'>
                                Token Distribution

                            </h3>
                        </div>
                        <div className="pt-[30px]">
                            <img src="/assets/distribution7.png" className='max-w-full h-auto mx-auto' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
