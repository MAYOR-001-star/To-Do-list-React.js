import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Add_task from './Add_task';
import CompletedTask from './CompletedTask';
import { useGlobalContext } from './Context';
import Todo from './Todo';

const Home = () => {
    const [show, setShow] = useState(false);
    const { currentView, showTodo, showCompleted, showAddTask } = useGlobalContext();
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
                        {/* <ul className={`md:flex md:space-x-4 ${show ? 'flex flex-col items-center slide-down' : 'hidden slide-up'}`}> */}
                        <ul className={`md:flex md:space-x-4 ${show ? 'flex flex-col items-center slide-down' : 'hidden slide-up'}`}><li className='mt-2 md:mt-0'><button
                                    className='block px-4 py-2 text-white hover:text-[#27378c] hover:border-b-2 border-[#1f3cd4]'
                                    onClick={showAddTask}>
                                    Home
                                </button>
                            </li>
                            <li className='mt-2 md:mt-0'>
                                <button className='block px-4 py-2 text-white hover:text-[#27378c] hover:border-b-2 border-[#1f3cd4]' onClick={showTodo}>
                                    Todo Tasks
                                </button>
                            </li>
                            <li className='mt-2 md:mt-0'>
                                <button className='block px-4 py-2 text-white hover:text-[#27378c] hover:border-b-2 border-[#1f3cd4]' onClick={showCompleted}>
                                    Completed Tasks
                                </button>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
            {currentView === 'addTask' && <Add_task />}
            {currentView === 'todo' && <Todo />}
            {currentView === 'completed' && <CompletedTask />}
        </>
    );
};

export default Home;
