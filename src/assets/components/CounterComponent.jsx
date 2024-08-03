import { useState} from "react"
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
                <button onClick={handleClickInc}>+</button>
                <button onClick={handleClickDec}>-</button>
            </section>        
        </>
    )
}