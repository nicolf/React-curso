import { useCarritoContext } from '../../context/CartContext.js'
import { ItemCount } from '../ItemCount/ItemCount.jsx'

export const ItemDetail = ({item}) => {

    const {addItem} = useCarritoContext()
    const onAdd = (contador) => {        
        console.log(item)
        console.log(contador)
        addItem(item, contador);
    }

    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={item.img} alt={`Imagen de ${item.nombre}`} className="img-fluid rounded-start"/>
            </div>
            <div className="col-8">
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">{item.marca} {item.modelo}</p>                    
                    <p className="card-text">Precio: ${item.precio.toLocaleString('es-AR')}</p>
                    
                    <ItemCount valInicial={1} min={1} max={10} onAdd={onAdd}/> 
                     
                </div>
            </div>
        </div>
    )    
}