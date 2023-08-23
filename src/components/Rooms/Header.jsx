import React from 'react';
import Heading from '../Heading/Heading';

const Header = () => {
    return (
        <>
            <Heading
                title={"Kecamatan Ubud, Bali"}
                subtitle={"Khao Lak, Thailand"}
                center={false}>
            </Heading>
            <div className='w-full md:h-[70vh] overflow-hidden rounded-xl'>
                <img className='object-cover w-full h-full' src="https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg" alt="detail-image" />
            </div>
        </>
    );
};

export default Header;