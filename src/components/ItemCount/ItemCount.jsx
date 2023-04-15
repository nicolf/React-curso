import { useCount } from "../../hooks/useCount.js"

export const ItemCount = ({valInicial, min, max, onAdd}) => {
    const {count, sum, minus, reset} = useCount(valInicial, min, max)

    return (
        <div>
            <button className="btn btn-dark" onClick={() => minus()}>-</button>
            {count}
            <button className="btn btn-dark" onClick={() => sum()}>+</button>
            <button className="btn btn-dark" onClick={() => reset()}>Resetear</button>
            <button className="btn btn-ligh" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
}
 