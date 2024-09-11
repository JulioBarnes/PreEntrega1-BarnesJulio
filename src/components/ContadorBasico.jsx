import {useState, useRef, useEffect} from 'react'
export default function ContadorBasico (){
    const [contador,setcontador]=useState(0);
    const clickRef = useRef(0)
    useEffect(() => {
        console.log(`El contador ahora es ${contador}`);
    }, [contador]); // Este efecto se ejecuta cada vez que contador cambia

    const handleClickInc = () => {
        setcontador(contador + 1);
        clickRef.current++;
        console.log(`El botón se clickeó ${clickRef.current} veces`);
    }
    const handleClickDec = () => {
        if(contador > 0){
            setcontador(contador - 1);
            clickRef.current++;
            console.log(`El botón se clickeó ${clickRef.current} veces`);
        } else {clickRef.current++;
            console.log(`El botón se clickeó ${clickRef.current} veces`);}
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