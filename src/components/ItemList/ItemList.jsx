import { Item } from "../Item/Item.jsx"
import { ItemCart } from "../ItemCart/ItemCart.jsx";
export const ItemList = ({ productos, template }) => {
    return (
        <>
            {template === 'Item' ?
            productos.map(producto => <Item key={producto.id} item={producto} />)
            :
            productos.map(producto => <ItemCart key={producto.id} item={producto} />)}
        </>
    );
}