import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../redux/counterSlice'

const Counter = () => {
    // grabbing the state
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Introduction to Redux</h1>
        <h2>Counter: {count} </h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter