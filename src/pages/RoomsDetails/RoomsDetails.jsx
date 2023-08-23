import React from 'react';
import Container from '../../components/shared/Container/Container';
import Header from '../../components/Rooms/Header';
import RoomInfo from '../../components/Rooms/RoomInfo';
import RoomReservation from '../../components/Rooms/RoomReservation';

const RoomsDetails = () => {
    return (
        <Container>
            <div className='max-w-screen-lg mx-auto'>
                <div className='flex flex-col gap-6'>
                    <div><Header></Header></div>
                    <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
                        <RoomInfo />
                        <div className='mb-10 md:col-span-3'>
                            <RoomReservation />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default RoomsDetails;