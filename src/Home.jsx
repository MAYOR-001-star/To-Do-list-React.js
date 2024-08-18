import React from 'react';
import Todo from './Todo';

const Home = () => {
    return (
        <>
            <div className='timmana-regular p-4 bg-[hsl(223,65%,52%)] max-w-[55rem] mx-auto border-b-2 border-[#3461d4]'>
                <header className='md:flex justify-around items-center bg-[#a1affa] p-3'>
                    <div className='flex justify-between items-center'>
                        <a href='/' className='text-white text-2xl font-bold flex items-center'>
                            <img src='/images/planner-icon.png' alt='website-logo' className='w-[3rem]' />
                            <h1 className='ml-2 mt-4'>Todo Planner</h1>
                        </a>
                    </div>
                </header>
            </div>
            <Todo/>
        </>
    );
};

export default Home;
