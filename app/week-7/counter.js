"use client";
import { useState } from "react";

export default function Counter() {
    // const [count, setCount] = useState(0);
    const[person, setPerson] = useState({name: "John", age: 30});
    const increment = () => {
        // setCount(count + 1);
        // setCount((prevCount) => prevCount + 1);
        // setCount((prevCount) => prevCount + 1);
        setPerson({...person, age:person.age+1});

    }


    return(
        <div>
            <h2>Counter</h2>
            {/* <p>{count}</p> */}
            <p>{person.age}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}