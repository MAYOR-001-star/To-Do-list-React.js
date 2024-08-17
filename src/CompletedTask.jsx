import React, { useContext } from 'react'
import { taskContext } from './Todo'


const CompletedTask = () => {
  const realCompletedTask = useContext(taskContext)
  return (
    {realCompletedTask}
  )
}

export default CompletedTask
