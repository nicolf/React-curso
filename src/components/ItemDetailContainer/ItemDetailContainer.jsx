import { useState, useEffect } from "react"
import { ItemDetail } from '../ItemDetail/ItemDetail.jsx'
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [isLoading, setIsLoading] = useState(true) // Añadir variable de estado para indicar si está cargando
    const {id} = useParams()

    useEffect(() => {   
        fetch('https://fakestoreapi.com/products?limit=20')
            .then(res=>res.json())
            .then(json=> {
                const prod = json.find(prod => prod.id === parseInt(id))
                setItem(prod)
                setIsLoading(false)
            })
    }, [id])

    return (
        <div className="card mb-3 container itemDetail">            
            {isLoading ? <p>Cargando...</p> : <ItemDetail item={item}/>} 
        </div>
    )
}