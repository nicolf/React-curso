import { FaShoppingCart } from "react-icons/fa";
import { useCarritoContext } from "../../context/CartContext";

export const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext();
    return (
        <>     
            <button className="btn btn-dark">
                <FaShoppingCart />
                {getItemQuantity() > 0 && (
                    <span className="cantCarrito">{getItemQuantity()}</span>
                )}
            </button>            
        </>
    );
}