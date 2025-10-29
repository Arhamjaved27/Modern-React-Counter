import React from 'react'
import "./Counter.css"

function Counter() {
  return (
    <div className="counter-contaner">
        <h1 className="toatl-counter"> Modern Counter </h1>

        <h2>Total Target</h2>
        <div className='goal'>
            <input type='text' className='goal-input' />
            <h4>Counts</h4>
        </div>
        <h5>Percent Message</h5>
      </div>
  )
}

export default Counter