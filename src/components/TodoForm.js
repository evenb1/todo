import React, {useState} from 'react'

export const TodoForm = () => {
    const [value, setValue] = useState("")


  return (
<form className='TodoForm'>
        <input type='text' className='todo-input' placeholder='Whats the task today?'></input>
        <button type='submit' className='todo-btn' 
        onChange={(e) => setValue(e.target.value)}>Add</button>
    </form>
      )
}