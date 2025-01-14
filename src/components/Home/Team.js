'use client'
import Aos from 'aos';
import React, { useEffect } from 'react'
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa'


const teamMembers = [
    {
        name: 'Dom Einhorn',
        title: 'Founder',
        imgSrc: '/assets/1.png',
        socialLinks: [
            // { url: '#', label: 'Facebook', icon: <FaFacebookF /> },
            // { url: '#', label: 'Twitter', icon: <FaTwitter /> },
            { url: 'https://www.linkedin.com/in/mastersoftrivia', label: 'LinkedIn', icon: <FaLinkedinIn /> },
            // { url: '#', label: 'Pinterest', icon: <FaPinterestP /> },
        ],
        duration: '1000'
    },
    {
        name: 'Dmytro Shkuratov',
        title: 'CTO',
        imgSrc: '/assets/placeholder9.png',
        socialLinks: [
            // { url: '#', label: 'Facebook', icon: <FaFacebookF /> },
            // { url: '#', label: 'Twitter', icon: <FaTwitter /> },
            { url: 'https://www.linkedin.com/in/dmo-shkuratov', label: 'LinkedIn', icon: <FaLinkedinIn /> },
            // { url: '#', label: 'Pinterest', icon: <FaPinterestP /> },
        ],
        duration: '1200'

    },
    {
        name: 'Lucas Caneda',
        title: 'COO',
        imgSrc: '/assets/2.png',
        socialLinks: [
            // { url: '#', label: 'Facebook', icon: <FaFacebookF /> },
            // { url: '#', label: 'Twitter', icon: <FaTwitter /> },
            { url: 'https://www.linkedin.com/in/lucascaneda', label: 'LinkedIn', icon: <FaLinkedinIn /> },
            // { url: '#', label: 'Pinterest', icon: <FaPinterestP /> },
        ],
        duration: '1400'

    },
    {
        name: 'Dr. Mia Nguyen',
        title: 'VP Brand',
        imgSrc: '/assets/3.png',
        socialLinks: [
            // { url: '#', label: 'Facebook', icon: <FaFacebookF /> },
            // { url: '#', label: 'Twitter', icon: <FaTwitter /> },
            { url: 'https://www.linkedin.com/in/dr-mia-hanh-nguyen-0a79141a3', label: 'LinkedIn', icon: <FaLinkedinIn /> },
            // { url: '#', label: 'Pinterest', icon: <FaPinterestP /> },
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
        <div className='py-[30px] lg:py-[100px] bg-[#fbfaff]'>
            <div className="px-[15px] max-w-[1170px] mx-auto">
                <div className="text-center">
                    <h3 className='  text-[26px] text-[#0e082c] font-bold mb-[20px]'>
                        Our Team
                    </h3>
                    <p className=' mb-[30px]   max-w-[555px] mx-auto'>
                        Our management team brings over 50 years of combined expertise in finance, business development, and marketing to the table.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-[30px]">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} {...member} />
                    ))}
                </div>
                <div className="h-[100px]"></div>
                
            </div>
        </div>
    )
}
