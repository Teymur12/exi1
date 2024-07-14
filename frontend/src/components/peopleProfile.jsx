
import React from 'react';
import Header from './header';
import Footer from './footer';
import tate from '../image/atate.jpg';
import { IoSettingsOutline } from 'react-icons/io5';
import { RiWindow2Line } from 'react-icons/ri';
import andrew from '../image/andrew.jpeg';

const Profile = () => {
  
    return (
        <div>
            <Header />
            <div className='flex justify-center'>
                <div className='grid mt-[20px]'>
                    <div>
                        <div className='flex justify-evenly flex-wrap gap-y-3'>
                            <div>
                                <img className='rounded-full w-[165px] h-[165px]' src={tate} alt='Profile' />
                            </div>
                            <div className='flex flex-col gap-y-5'>
                                <div className='flex items-center gap-3 '>
                                    <p className='font-bold text-2xl'>userName</p>
                                    <button className='border text-white w-[90px] h-[35px] rounded-[10px] bg-[#0095F6]'>Follow</button>
                                </div>
                                <div className='flex gap-3'>
                                    <div className='flex gap-1 cursor-pointer'><p className='font-bold'>0</p> gönderi</div>
                                    <div className='flex gap-1 cursor-pointer'><p className='font-bold'>0</p> takipçi</div>
                                    <div className='flex gap-1 cursor-pointer'><p className='font-bold'>0</p> takip</div>
                                </div>
                                <div>
                                    <p className='font-semibold'>fullname</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mt-[96px] border-t border-black pt-[15px]'>
                            <div className='flex items-center gap-1'>
                                <p><RiWindow2Line /></p>
                                <h1>POSTS</h1>
                            </div>
                        </div>
                        <div className='mt-8 flex flex-wrap ml-0 lg:ml-[70px]'>
                            <div className='flex gap-1 justify-center lg:justify-start flex-wrap max-w-screen-lg'>
                                {[1, 2, 3, 4].map((_, index) => (
                                    <a href="" key={index}>
                                        <img className='w-[307px] h-[307px] object-cover' src={andrew} alt='Post' />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
