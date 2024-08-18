import React, { useState } from 'react'

const Todo = () => {
    const[todos, setTodos] = useState([])
    const[task, setTask] = useState('')
    const [completedItems, setCompletedItems] = useState([])
    const [editId, setEditId] = useState(null)
    const [isEditing, setIsEditing] = useState(false)

    const editor = (id) => {
        const editable = todos.find((todo)=>todo.id === id)
        if(editable){
            setIsEditing(true)
            setTask(editable.task)
            setEditId(id)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault() 
        if(task){
            if(isEditing){
                const updater = todos.map((todo)=>todo.id === editId ? {...todo, task} : todo)
                setTodos(updater)
                setIsEditing(false)
                setEditId(null)
            }else{
                const newTask = {task, id: new Date().getTime().toString()}
                setTodos([...todos, newTask])
            }
            setTask('')
        }else{
            alert('please enter a task!!!')
        }
    }

    const eliminator = (id) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            const deleteItems = todos.filter((todo) => todo.id !== id);
            setTodos(deleteItems);
        }
    };
    
    const eliminator1 = (id) => {
        if (window.confirm('Are you sure you want to delete this completed task?')) {
            const deleteItems = completedItems.filter((item) => item.id !== id);
            setCompletedItems(deleteItems);
        }
    };    

    const completedTask = (id) => {
        if(completedItems){
            const completedTask = todos.find((todo)=>todo.id === id)
            setCompletedItems([...completedItems, completedTask])  
        }
        eliminator(id)
    }
    
    return (
        <div>
            <div className='flex flex-row gap-5 justify-center my-10 items-center'>
                <input type='text' value={task} id='task' name='task' onChange={(e)=>setTask(e.target.value)} className='border-2 border-blue-900 rounded-md'/>
                <button onClick={submitHandler} className='border-2 border-gray rounded-md px-2 hover:bg-blue-800 hover:text-white'>{isEditing? 'Edit Task' : 'Add Task' }</button>
            </div>
            <div>
                <div className='flex justify-center flex-col items-center'>
                    <h1 className='text-2xl mb-4'>Tasks:</h1>
                    {todos.map((todo)=>{
                        const{id, task} = todo
                        return(
                            <div key={id}>
                                <p className='mb-4 text-2xl capitalize'>{task}</p>
                                <button onClick={()=>eliminator(id)} className='border-2 border-gray rounded-md px-2 mr-3 hover:bg-red-500 hover:text-white'>Delete</button>
                                <button onClick={()=>editor(id)} className='border-2 border-gray rounded-md px-2 mr-3 hover:bg-gray-500 hover:text-white'>Edit</button>
                                <button onClick={()=>completedTask(id)} className='border-2 border-gray rounded-md px-2 mr-3 hover:bg-green-400 hover:text-white'>Completed</button>
                            </div>
                        )
                    })}
                </div>
                <div className='flex justify-center flex-col items-center'>
                    <h2 className='text-2xl mt-4'>Completed Tasks:</h2>
                    {completedItems.map((item)=>{
                        const{id, task} = item
                        return(
                            <div key={id} className='flex gap-5 mt-4 items-center'>
                                <p className='text-xl capitalize'>{task}</p>
                                <button onClick={()=>eliminator1(id)} className='border-2 border-gray rounded-md px-2 mr-3 hover:bg-red-500 hover:text-white'>Delete</button>
                            </div>
                        )
                    })}
                </div>
        </div>
        </div>
    )
}


export default Todo
