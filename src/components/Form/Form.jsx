import React from 'react'
import './Form.css'
import { useState } from 'react'

export default function Form( props ) {

    const [value, setValue] = useState(" ")

  return (
    <form className='form' onSubmit={e => {
        e.preventDefault()
        props.putTodo(value)
        setValue("")
    }}>
        <input type="text" placeholder='Enter a text...' className='input' value={value} onChange={e => setValue(e.target.value)}/>
    </form>
  )
}
