import { useState, useEffect } from "react"
import { ItemList } from '../ItemList/ItemList.jsx'
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    const {categoryId} = useParams()
    
    useEffect(() => {           
        let urlAConsultar = 'https://fakestoreapi.com/products?limit=20'
    
        if(categoryId){
            urlAConsultar = `https://fakestoreapi.com/products/category/${categoryId}`
        }

        fetch(urlAConsultar)
            .then(res=>res.json())
            .then(json=> {
                setProductos(json)
            })
    }, [categoryId])

    return (
        <div className="d-flex flex-wrap justify-content-between">
            <ItemList productos={productos} />
        </div>
    );
}