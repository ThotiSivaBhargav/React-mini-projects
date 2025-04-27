import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const[result, setResult] = useState(0)
  const handler =(e)=>{
    setInput(e.target.value);
  }

  const clearInput = ()=>{
    setInput("");
    setResult("0")
  }

  return (
    <div className='bg-gray-700 w-md gap-1.5 rounded-2xl border-white'>
      <h2 className='text-3xl'>Calculator</h2>
      <input type="text" name='input' value={input} onChange={handler} className='border m-2.5 w-2xs rounded-md'/> <br />
      <button className='m-2.5' onClick={ () =>{
        try {
          setResult(eval(input).toString());
        } catch (error) {
          setInput(" fill the value")
        }
      }}>Result</button>
      <h4 className='m-2.5'>Result is : {result}</h4> 

      <button className='m-1' onClick={()=>setInput(input+1)}>1</button>
      <button className='m-1' onClick={()=>setInput(input+2)}>2</button>
      <button className='m-1' onClick={()=>setInput(input+3)}>3</button>
      <button className='m-1' onClick={()=>setInput(input+4)}>4</button><br />
      <button className='m-1' onClick={()=>setInput(input+5)}>5</button>
      <button className='m-1' onClick={()=>setInput(input+6)}>6</button>
      <button className='m-1' onClick={()=>setInput(input+7)}>7</button>
      <button className='m-1' onClick={()=>setInput(input+8)}>8</button><br />
      <button className='m-1' onClick={()=>setInput(input+9)}>9</button>
      <button className='m-1' onClick={()=>setInput(input+0)}>0</button>
      <button className='m-1' onClick={clearInput}>c</button><br />
      <button className='m-1' onClick={()=>setInput(input+'+')}>+</button>
      <button className='m-1' onClick={()=>setInput(input+'-')}>-</button>
      <button className='m-1' onClick={()=>setInput(input+'*')}>*</button>
      <button className='m-1' onClick={()=>setInput(input+'/')}>/</button>

    </div>
      
  )
}

export default App