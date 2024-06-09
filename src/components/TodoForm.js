import React from 'react'

export const TodoForm = () => {
  return (
<form className='TodoForm'>
        <input type='text' className='todo-input' placeholder='Whats the task today?'></input>
        <button type='submit' className='todo-btn'>Add</button>
    </form>
      )
}