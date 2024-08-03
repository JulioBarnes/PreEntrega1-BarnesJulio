import carrito from "../img/Carrito 32.png"
export default function CartWidget() {
    return (
        <>
            <div>
                <button>
                    <img src={carrito} alt="" />
                    <span>2</span>
                </button>
            </div>
        </>
    )
}



