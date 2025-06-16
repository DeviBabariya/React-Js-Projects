import { useState } from "react";
import "./Counter.css"

const Counter = () => {

    const [count , setCount] = useState(0);

    const handleIncrement = () =>{
        setCount(count => count + 1);
    }

    const handleDecrement = () =>{
        setCount(count => count - 1);
        if(count <= 0){
            setCount(0)
            alert("The counter can't be negative !!!");
            
        }
    }
 
    const handleReset = () =>{
        setCount(0);
        if (count == 0){
            alert("The counter is already at 0 !");
        }
    }


    return(
            <section className="counter">
                <div className="container">
                    <div className="title">
                        <h1>Counter</h1>
                    </div>
                    <div className="counter-elem">
                        <ul>
                            <li>
                                <a href="javascript:void(0)" onClick={handleDecrement}>-</a>
                            </li>
                            <li>
                                <h2> {count}</h2>
                            </li>
                            <li>
                                <a href="javascript:void(0)" onClick={handleIncrement}>+</a>
                            </li>
                        </ul>
                    </div>
                    <div className="reset">
                        <a href="javascript:void(0)" onClick={handleReset}>Reset</a>
                    </div>
                </div>
            </section>
    )
};

export default Counter;