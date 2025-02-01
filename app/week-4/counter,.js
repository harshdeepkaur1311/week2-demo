"use client";
import { useState } from "react";


export default function Counter() {
    const [count, setCount] = useState(0);
    

    const increment = () => setCount(count + 1);
    // const decrement = () => setCount(count - 1);
  

    return (
        <div>
            <h1>{count}</h1>
           
            {/* {count > 5 && <p>Counter is greater than 5</p>} */}
            {count === 3 ? <p>Counter is equal to 3</p> : <p>Counter is not equal to 3</p>}
            
            <button className="bg-blue-300 h-50 w-70 my-5 mx-4 px-7 hover:bg-gray-100
            active:bg-red-300 rounded w-32" onClick={increment}>Increment</button>
            {/* <button className="bg-blue-300 h-50 w-70 my-5 mx-4 px-7 hover:bg-gray-100
            active:bg-red-300 rounded w-32" onClick={decrement}>Decrement</button> */}

        </div>
    )

}


