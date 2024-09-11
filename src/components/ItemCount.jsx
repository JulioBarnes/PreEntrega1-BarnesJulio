import {useState} from 'react'
export default function ContadorBasico (){
    const [contador,setcontador]=useState(0);

    const handleClickInc = () => {
        if(contador < 5){
            setcontador(contador + 1);
        } else {
            console.log("No nos queda mas Stock")
        }
    }
    const handleClickDec = () => {
        if(contador > 0){
            setcontador(contador - 1);
        } else {
        }
    }
    return(
        <>
            <section>
                <h3>Contador</h3>
                <p>{contador}</p>
                <button onClick={handleClickInc}>+</button>
                <button onClick={handleClickDec}>-</button>
            </section>
            

        </>
    )
}