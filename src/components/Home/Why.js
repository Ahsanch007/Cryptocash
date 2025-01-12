import React from 'react'

const data = [
    {
        img: "/assets/wc_icon4.png",
        title: "Fully Secured Data",
        description:
            "Cryptocash bitcoin ensures every block and transaction it accepts is a valid, increasing not only your security but also helping prevent miners and banks from taking control of Bitcoin.",
    },
    {
        img: "/assets/wc_icon5.png",
        title: "A Better User Interface",
        description:
            "Bitcoin wallet has features most other wallets don't have. But if you don't need them, you can use several other wallets on top of Bitcoin without losing Bitcoin Core's security and privacy benefits.",
    },
    {
        img: "/assets/wc_icon6.png",
        title: "Support The Network",
        description:
            "Bitcoin helps support other peers.This isn't as useful as helping to keep Bitcoin decentralized, but it's an easy way for broadband users to contribute to less well-connected users.",
    },
];

export const Why = () => {
    return (
        <div id='why' className='bg-[#fbfaff] py-[100px]'>
            <div className="px-[15px] max-w-[1170px] mx-auto">
                <div className="text-center">
                    <h3 className='text-[#0e082c] text-[26px] font-bold mb-[20px]'>
                        Why Choose Us?
                    </h3>
                    <p className='text-[#7a7a7a] mb-[30px] max-w-[555px] mx-auto'>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit animid est laborum.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:grid-cols-3">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="box_wrap rounded-[5px] bg-white text-center"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="mx-auto max-w-full"
                            />
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
