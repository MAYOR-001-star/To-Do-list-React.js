import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { useGlobalContext } from './Context';

const Add_task = () => {
    const{showTodo} = useGlobalContext()
    return (
        <div className={`mx-auto timmana-regular`}>
            <div className='w-[10rem] bg-[#a1affa] mx-auto rounded-md mt-[9rem] text-white p-5'>
                <p className='flex justify-center font-semibold'>Add a Task</p>
                <FaPlus className='mx-auto text-4xl mt-5' onClick={showTodo}/>
            </div>
        </div> 
    )
}

export default Add_task