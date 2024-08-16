import React, { useState } from 'react';
import { FaBars, FaPlus, FaTimes } from 'react-icons/fa';

const Home = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className='timmana-regular p-4 bg-[hsl(223,65%,52%)] max-w-[80rem] mx-auto border-b-2 border-[#3461d4]'>
                <header className='md:flex justify-around items-center bg-[#a1affa] p-3'>
                    <div className='flex justify-between items-center'>
                        <a href='/' className='text-white text-2xl font-bold flex items-center'>
                            <img src='/images/planner-icon.png' alt='website-logo' className='w-[3rem]' />
                            <h1 className='ml-2 mt-4'>Todo Planner</h1>
                        </a>
                        <button
                            className='mr-4 text-white md:hidden hover:text-[#27378c]'
                            onClick={() => setShow(!show)}
                            aria-label={show ? 'Close menu' : 'Open menu'}
                            aria-expanded={show}
                        >
                            {show ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    <nav>
                        <ul className={`md:flex md:space-x-4 ${show ? 'flex flex-col items-center' : 'hidden'} md:flex`}>
                            <li className='mt-2 md:mt-0'>
                                <button className='block px-4 py-2 text-white hover:text-[#27378c] hover:border-b-2 border-[#1f3cd4]'>
                                    Home
                                </button>
                            </li>
                            <li className='mt-2 md:mt-0'>
                                <button className='block px-4 py-2 text-white hover:text-[#27378c] hover:border-b-2 border-[#1f3cd4]'>
                                    Todo Tasks
                                </button>
                            </li>
                            <li className='mt-2 md:mt-0'>
                                <button className='block px-4 py-2 text-white hover:text-[#27378c] hover:border-b-2 border-[#1f3cd4]'>
                                    Completed Tasks
                                </button>
                            </li>
                        </ul>
                    </nav>
                </header>
                
            </div>
            <div className='mx-auto'>
                <div className='w-[10rem] bg-[#a1affa] mx-auto rounded-md mt-10 text-white p-5'>
                    <p className='flex justify-center font-semibold'>Add a Task</p>
                    <FaPlus className='mx-auto text-4xl mt-5'/>
                </div>
            </div>
            
        </>
    );
};

export default Home;
