import { useCarritoContext } from "../../context/CartContext";
import { ItemList } from "../ItemList/ItemList";
import { Link } from "react-router-dom";

export const Cart = () => {
    const {carrito, removeItem, totalPrice, emptyCart} = useCarritoContext();

    return (
        <>
        {
            carrito.length === 0 ? 
            <>
                <h1>Carrito vacio</h1>
            </> 
            : 
            <div className="d-flex flex-wrap justify-content-between">
                {<ItemList productos={carrito} remove={removeItem} template={"itemCart"} />}
                <div className="cartButtons col-12">
                    <p>Resumen de la compra: ${totalPrice().toLocaleString('es-AR')}</p>
                    <button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar carrito</button>
                    <Link className="nav-link" to={"/"}><button className="btn btn-secondary">Seguir comprando</button></Link>
                    <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Finalizar compra</button></Link>
                </div>
            </div>
        }
        </>
    )
}