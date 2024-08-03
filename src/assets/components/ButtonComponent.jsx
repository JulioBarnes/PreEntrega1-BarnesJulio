export default function ButtonComponent({nombre, color}){
    const misEstilos = {
        backgroundColor: color,
        color: 'black',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer'
    } 
    
    const handleClick = () => {
        alert(`Has clickeado el botón ${nombre} 😎`)
    }
    return(
        <>
            <button onClick={handleClick} style={misEstilos}>{nombre}</button>
        </>
    )
}