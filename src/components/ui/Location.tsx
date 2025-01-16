import React from 'react';

const Location = () => {
    return (
        <div className="relative w-full h-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47795.691972406086!2d-74.31074574850314!3d41.52094211531457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dcd87863e8274b%3A0xbec6bafc32f9c7b0!2sMontgomery%2C%20NY%2012549%2C%20USA!5e0!3m2!1sen!2s!4v1736747049048!5m2!1sen!2s" width="100%"

                style={{ border: 0, height: '100%' }}
                
                loading="lazy"></iframe>
        </div>
    );
};

export default Location;
