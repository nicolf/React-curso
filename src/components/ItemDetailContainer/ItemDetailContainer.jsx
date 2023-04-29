import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";
import { getProduct } from "../../firebase/firebase.js";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Añadir variable de estado para indicar si está cargando
  const { id } = useParams();

  useEffect(() => {
    getProduct(id).then((prod) => {
      setItem(prod);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <div className="card mb-3 container itemDetail">
      {isLoading ? <p>Cargando...</p> : <ItemDetail item={item} />}
    </div>
  );
};
