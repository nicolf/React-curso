import { FaShoppingCart } from "react-icons/fa";

export const CartWidget = ({cantCarrito}) => {
    return (
        <>
            <p>{cantCarrito} <FaShoppingCart />  Carrito</p>            
        </>
    );
}