'use client'
import Aos from 'aos';
import React, { useEffect } from 'react'
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa'


const teamMembers = [
    {
        name: 'Derek Castro',
        title: 'Head Of Marketing',
        imgSrc: '/assets/placeholder9.png',
        socialLinks: [
            { url: '#', label: 'Facebook', icon: <FaFacebookF /> },
            { url: '#', label: 'Twitter', icon: <FaTwitter /> },
            { url: '#', label: 'LinkedIn', icon: <FaLinkedinIn /> },
            { url: '#', label: 'Pinterest', icon: <FaPinterestP /> },
        ],
        duration: '1000'
    },
    {
        name: 'Jessica Bell',
        title: 'Head Of Sale',
        imgSrc: '/assets/placeholder9.png',
        socialLinks: [
            { url: '#', label: 'Facebook', icon: <FaFacebookF /> },
            { url: '#', label: 'Twitter', icon: <FaTwitter /> },
            { url: '#', label: 'LinkedIn', icon: <FaLinkedinIn /> },
            { url: '#', label: 'Pinterest', icon: <FaPinterestP /> },
        ],
        duration: '1200'

    },
    {
        name: 'Alvaro Martin',
        title: 'Blockchain App Developer',
        imgSrc: '/assets/placeholder9.png',
        socialLinks: [
            { url: '#', label: 'Facebook', icon: <FaFacebookF /> },
            { url: '#', label: 'Twitter', icon: <FaTwitter /> },
            { url: '#', label: 'LinkedIn', icon: <FaLinkedinIn /> },
            { url: '#', label: 'Pinterest', icon: <FaPinterestP /> },
        ],
        duration: '1400'

    },
    {
        name: 'Maria Willium',
        title: 'Community Manager',
        imgSrc: '/assets/placeholder9.png',
        socialLinks: [
            { url: '#', label: 'Facebook', icon: <FaFacebookF /> },
            { url: '#', label: 'Twitter', icon: <FaTwitter /> },
            { url: '#', label: 'LinkedIn', icon: <FaLinkedinIn /> },
            { url: '#', label: 'Pinterest', icon: <FaPinterestP /> },
        ],
        duration: '1600'

    },
];



const TeamMemberCard = ({ name, title, imgSrc, socialLinks, duration }) => {
    return (
        <div className="bg-white rounded-[5px] p-[20px]" data-aos="fade-up" data-aos-duration={duration} >
            <div className="text-center relative">
                <img
                    src={imgSrc}
                    className="max-w-full mx-auto"
                    alt={`Profile of ${name}`}
                />
                <div className="team_social_s2">
                    <ul className="list-none flex flex-col gap-3">
                        {socialLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.url}
                                    className="text-white hover:text-[#444] transition-all"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="pt-[15px] text-center">
                <a href="#" className="text-[#444444] text-[20px] font-medium">
                    {name}
                </a>
                <p>{title}</p>
            </div>
        </div>
    );
};
const socialLinkss = [
    { url: '#', label: 'Facebook', icon: <FaFacebookF /> },
    { url: '#', label: 'Twitter', icon: <FaTwitter /> },
    { url: '#', label: 'LinkedIn', icon: <FaLinkedinIn /> },
    { url: '#', label: 'Pinterest', icon: <FaPinterestP /> },
]
export const Team = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className='py-[100px] bg-[#fbfaff]'>
            <div className="px-[15px] max-w-[1170px] mx-auto">
                <div className="text-center">
                    <h3 className='  text-[26px] text-[#0e082c] font-bold mb-[20px]'>
                        Our Core Team
                    </h3>
                    <p className=' mb-[30px]   max-w-[555px] mx-auto'>
                        we are proud of our great team. He is one of the most motivated and is always ready and willing to help out where needed.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-[30px]">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} {...member} />
                    ))}
                </div>
                <div className="h-[100px]"></div>
                <div className="text-center">
                    <h3 className='  text-[26px] text-[#0e082c] font-bold mb-[20px]'>
                        Invester Board
                    </h3>

                </div>
                <div className="grid grid-cols-12 justify-center">
                    <div className="lg:col-span-9 col-span-12">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">

                            <div className="bg-white rounded-[5px] p-[20px]" data-aos="fade-up" data-aos-duration='2000'>
                                <div className="text-center relative">
                                    <img
                                        src='/assets/placeholder9.png'
                                        className="max-w-full mx-auto"
                                        alt={` `}
                                    />
                                    <div className="team_social_s2">
                                        <ul className="list-none flex flex-col gap-3">
                                            {socialLinkss.map((link, index) => (
                                                <li key={index}>
                                                    <a
                                                        href={link.url}
                                                        className="text-white hover:text-[#444] transition-all"
                                                        aria-label={link.label}
                                                    >
                                                        {link.icon}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="pt-[15px] text-center">
                                    <a href="#" className="text-[#444444] text-[20px] font-medium">
                                        Tricia Diyana
                                    </a>
                                    <p>Invester</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-[5px] p-[20px]" data-aos="fade-up" data-aos-duration='2200'>
                                <div className="text-center relative">
                                    <img
                                        src='/assets/placeholder9.png'
                                        className="max-w-full mx-auto"
                                        alt={` `}
                                    />
                                    <div className="team_social_s2">
                                        <ul className="list-none flex flex-col gap-3">
                                            {socialLinkss.map((link, index) => (
                                                <li key={index}>
                                                    <a
                                                        href={link.url}
                                                        className="text-white hover:text-[#444] transition-all"
                                                        aria-label={link.label}
                                                    >
                                                        {link.icon}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="pt-[15px] text-center">
                                    <a href="#" className="text-[#444444] text-[20px] font-medium">
                                        Tricia Diyana
                                    </a>
                                    <p>Invester</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-[5px] p-[20px]" data-aos="fade-up" data-aos-duration='2400'>
                                <div className="text-center relative">
                                    <img
                                        src='/assets/placeholder9.png'
                                        className="max-w-full mx-auto"
                                        alt={` `}
                                    />
                                    <div className="team_social_s2">
                                        <ul className="list-none flex flex-col gap-3">
                                            {socialLinkss.map((link, index) => (
                                                <li key={index}>
                                                    <a
                                                        href={link.url}
                                                        className="text-white hover:text-[#444] transition-all"
                                                        aria-label={link.label}
                                                    >
                                                        {link.icon}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="pt-[15px] text-center">
                                    <a href="#" className="text-[#444444] text-[20px] font-medium">
                                        Tricia Diyana
                                    </a>
                                    <p>Invester</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
