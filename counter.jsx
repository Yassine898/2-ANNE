import {useState} from 'react';
export default function Counter(){
    const [count,setCount]=useState(0);
    const [pas,setPas]=useState(1);
    const increment=()=>{
        setCount(count+parseInt(pas))
    }
    const decrement=()=>{
        setCount(count-parseInt(pas))
            }
            const init=()=>{
                setCount(0)
            }
    return (
        <>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={init}>initialiser</button>
        <input type="number" value={pas} onChange={(e)=>{setPas(e.target.value)}} />
        </>
    )
}