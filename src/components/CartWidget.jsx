import carrito from "../assets/img/Carrito 32.png"
export default function CartWidget() {
    return (
        <>
            <div>
                <button>
                    <img src={carrito} alt="carro de compras" />
                    <span>2</span>
                </button>
            </div>
        </>
    )
}



