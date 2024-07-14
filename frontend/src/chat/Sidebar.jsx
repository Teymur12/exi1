import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import tate from '../image/andrew.jpeg';

const Sidebar = () => {
    return (
        <div className=' w-[200px] md:w-[150px] lg:w-[400px] h-[100vh] bg-gray-100 pl-3 overflow-y-scroll'>
            <div className='pt-3 h-[100px] w-[25px]'>
                <Link className='text-[25px]' to='/'>
                    <FaAngleLeft />
                </Link>
            </div>
            <div className='grid gap-y-3'>
                <div>
                    <h1 className='font-bold text-xl'>Messages</h1>
                </div>
                <div className='grid gap-y-3'>
                    <Link to='/Profile'>
                        <div className='flex items-center gap-2 bg-gray-200 h-[70px]'>
                            <div className='h-12 w-12 rounded-full overflow-hidden'>
                                <img src={tate} alt='profile' className='h-full w-full' />
                            </div>
                            <p>Username</p>
                        </div>
                    </Link>
                    <Link to='/Profile'>
                        <div className='flex items-center gap-2 h-[70px]'>
                            <div className='h-12 w-12 rounded-full overflow-hidden'>
                                <img src={tate} alt='profile' className='h-full w-full' />
                            </div>
                            <p>Username</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
