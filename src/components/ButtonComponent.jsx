import './ButtonComponent.css'
export default function ButtonComponent({nombre}){
    const handleClick = () => {
        alert(`Has clickeado el botón ${nombre} 😎`)
    }
    return(
        <>
            <button onClick={handleClick} className="misEstilosBoton">{nombre}</button>
        </>
    )
}