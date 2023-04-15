import { ItemCount } from '../ItemCount/ItemCount.jsx'

export const ItemDetail = ({item}) => {

    const onAdd = (contador) => {        
        console.log(item)
    }

    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={item.image} alt={`Imagen de ${item.title}`} className="img-fluid rounded-start"/>
            </div>
            <div className="col-8">
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Categoria: {item.category}</p>
                    <p className="card-text">Descripción: {item.description}</p>
                    <p className="card-text">Precio: ${item.price}</p>
                    
                    <ItemCount valInicial={1} min={1} max={10} onAdd={onAdd}/> 
                     
                </div>
            </div>
        </div>
    )    
}