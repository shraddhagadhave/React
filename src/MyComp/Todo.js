import React from 'react'

export const Todo =  (props) => {
  return (
    <>
    <div>
      <h4>{props.todo.sno}</h4>
      <h4>{props.todo.title}</h4>
      <button className='btn btn-sm btn-danger' onClick={()=>props.onDelete(props.todo)}>Delete</button>
      </div>
      <hr/>
      </>
  )
}

// With this change, the onDelete function will now receive the correct props.todo as an argument,
// and the warning about missing keys should no longer appear.
