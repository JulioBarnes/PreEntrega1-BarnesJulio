import { useState} from "react"
import './CounterComponent.css'
export default function CounterComponent(){
    const [counter, setcounter]= useState(1)
    const handleClickInc=()=>{
        setcounter(counter + 1)
    }
    const handleClickDec=()=>{
        setcounter(counter - 1)
    }
    return(
        <>
            <section>
                <h2>Contador</h2>
                <h3>{counter}</h3>
                <button className="buttonCounter" onClick={handleClickInc}>+</button>
                <button className="buttonCounter" onClick={handleClickDec}>-</button>
            </section>        
        </>
    )
}