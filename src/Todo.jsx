import React, { createContext, useState } from 'react'

export const taskContext = createContext()

const Todo = () => {
    const [completeGlobals, setCompleteGlobals] = useState([])
    const[task, setTask] = useState('')
    const[todos, setTodo] = useState([])
    const completedTask = (id) => {
        const filterCompletedTask = todos.find((todo)=>todo.id === id)
        setCompleteGlobals((complete)=>{
            const newlyCompleted = {filterCompletedTask, id:{id}}
            return [...complete, newlyCompleted ]
        })
        console.log(filterCompletedTask)
        taskRemover(id)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if(task){
            const taskInput ={id:new Date().getTime().toString(), task} 
            setTodo((todos)=>{
                return [...todos, taskInput]
            })
            setTask('')
        }else{
            alert('please put something in the input box!!!!') 
        }
    }

    const taskRemover = (id) => {
        const idRemover = todos.filter((todo)=> todo.id !== id)
        setTodo(idRemover)
    }
    return (
        <div className='timmana-regular'>
            <form onSubmit={submitHandler}>
                <input type="text" value={task} id='task' name='task' placeholder="Enter your task" onChange={(e)=>setTask(e.target.value)}/>
                <button type="submit">Add Todo</button>
            </form>
            {todos.map((todo)=>{
                const{id, task} = todo;
                return(
                    <div key={id}>
                        <p>{task}</p>
                        <button onClick={()=>taskRemover(id)}>Delete</button>
                        <button>Edit</button>
                        <button onClick={()=>completedTask(id)}>Completed</button>
                    </div>
                )
            })}
            <taskContext.Provider value={{completeGlobals}}>
                {completeGlobals.map((completed)=>{
                    const{ id, task} = completed;
                    return(
                        <div key={id}>
                            <p>{task}</p>
                        </div>
                    )
                })}
            </taskContext.Provider>
        </div>
    )
}

export default Todo
