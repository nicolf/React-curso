import { useContext, createContext, useState } from "react"

const CarritoContext = createContext(); // Creo el contexto

export const useCarritoContext = () => useContext(CarritoContext);

export const CarritoProvider = (props) => { // Como generar el contexto en la app, se pueden enviar props
    const [carrito, setCarrito] = useState([]); 

    // Agregar y quitar productos, vaciar carrito
    // 

    const isInCart = (id) => {
        return carrito.some(prod => prod.id === id)
    }

    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            const indice = carrito.findIndex(prod => prod.id === item.id)
            const aux = [...carrito]
            aux[indice].quantity = quantity
            setCarrito(aux)

        } else {
            const newItem = {
                ...item,
                quantity
            }
            
            setCarrito([...carrito, newItem]) // copia el carrito y le agrega el item
        }
    }

    const removeItem = (id) => {
        const aux = [...carrito]
        const indice = aux.findIndex(prod => prod.id === id)
        setCarrito(aux.splice(indice, ))
        setCarrito(carrito.filter(prod => prod.id !== id))
    }

    const emptyCart = () => {
        setCarrito([])
    }

    const getItemQuantity = () => {
        return carrito.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.quantity * prod.precio), 0)
    }

    console.log(carrito)

    return (
        <CarritoContext.Provider value={{carrito, addItem, removeItem, emptyCart, totalPrice, getItemQuantity}}>
            {props.children}
        </CarritoContext.Provider>
    )


}