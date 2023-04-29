import { useCarritoContext } from "../../context/CartContext"
import { FaTrash } from "react-icons/fa";

export const ItemCart = ({item}) => {
    const {removeItem} = useCarritoContext()    
    return(
        <div className="card" style={{width: '18rem'}}>
            <img src={item.img} className="card-img-top" alt={`Alt de ${item.nombre}`} />
            <div className="card-body">
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">{item.marca} {item.modelo}</p>                    
                    <p className="card-text">Cantidad: {item.quantity}</p>
                    <p className="card-text">P.U.: ${item.precio.toLocaleString('es-AR')}</p>
                    <p className="card-text">Subtotal: ${(item.precio * item.quantity).toLocaleString('es-AR')}</p>
                    <button className="btn btn-danger" onClick={() => removeItem(item.id)}><FaTrash /></button>

                </div>
            </div>

        </div>
    )
}