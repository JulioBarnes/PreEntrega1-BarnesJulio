import './ButtonComponent.css'
export default function ButtonComponent({nombre}){
    const handleClick = () => {
        alert(`Has clickeado el botón ${nombre} 😎`)
    }
    return(
        <>
            <button className="estilosBoton">
                <Link to={`/masculino`}>{nombre}</Link>
            </button>
        </>
    )
}