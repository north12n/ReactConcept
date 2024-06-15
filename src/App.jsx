import React, { useState } from 'react'

export default function App() {
  // = public int number { get; set; }
  const [number, setnumber] = useState(0)
  

  const increment = (n)=>{
    // number = number + 20;
    setnumber(number + n)
    console.log(number);
  }
  const decrement = (n)=>{
    setnumber(number - n)
    console.log(number);
  }

  return (
    <div>
      {number}
      <button className='btn btn-primary' onClick={()=>increment(10)}>Add</button>
      <button className='btn btn-primary' onClick={()=>decrement(10)}>sud</button>
      <button className='btn btn-primary' onClick={()=>setnumber(0)}>reset</button>
    </div>
  )
}
