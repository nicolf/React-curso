import { Link } from "react-router-dom"

export const Item = ({ item }) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={item.image} className="card-img-top" alt={`Alt de {item.nombre}`} />
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.category}</p>
                <p className="card-text">${item.price}</p>
                <Link className="nav-link" to={`/product/${item.id}`}>
                    <button className="btn btn-dark">Ver producto</button>
                </Link>
            </div>
        </div>
    )
}