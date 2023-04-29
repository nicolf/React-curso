import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext.js";
import { getProducts } from "../../firebase/firebase.js";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();
  const { darkMode } = useDarkModeContext();

  useEffect(() => {
    getProducts().then((productos) => {
      if (categoryId) {
        const productosFiltrados = productos
          .filter((prod) => prod.stock > 0)
          .filter((prod) => prod.idCategoria === categoryId);
        setProductos(productosFiltrados);
      } else {
        const productosFiltrados = productos.filter((prod) => prod.stock > 0);
        setProductos(productosFiltrados);
      }
    });
  }, [categoryId]);

  return (
    <div className="d-flex flex-wrap justify-content-between">
      <ItemList productos={productos} template={"Item"} />
    </div>
  );
};
