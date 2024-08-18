
import { useState } from 'react';
import './App.css';


function App() {

    const[count, setCount] = useState(0);
    function decreaseHandler(){
      setCount(count-1);
    }
    function increaseHandler(){
      setCount(count+1);
    }
    function resetHandled(){
      setCount(0);
    }


  return (
    <div className="w-[100vw] h-[100vh] gap-10 flex flex-col justify-center items-center bg-slate-500">
      <div className="text-blue-400 font-medium text-2xl">Increment && Decrement</div>
      <div className="flex bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-slate-900 " >
        <button onClick={decreaseHandler} className='border-r-2 text-center w-20 border-slate-400 text-5xl'> - </button>
        <div className='font-bold gap-12 text-5xl'>{count}</div>
        <button onClick={increaseHandler} className='border-l-2 text-center w-20 border-slate-400 text-5xl'> + </button>
      </div>
      <button onClick={resetHandled} className='bg-slate-300 text-slate-700 px-5 rounded-md text-lg font-medium py-2'>Reset</button>
      
    </div>
  );
}

export default App;
