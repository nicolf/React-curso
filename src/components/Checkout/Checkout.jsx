import { useRef } from "react";
import { useCarritoContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import {
	updateProduct,
	getProduct,
	createOrdenCompra,
} from "../../firebase/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Checkout = () => {
	const datForm = useRef(); // Crea una referencia para consultar los valores actuales del formulario
	const { carrito, totalPrice, emptyCart } = useCarritoContext();
	let navigate = useNavigate(); //Localización actual

	const consultarForm = (e) => {
		//Consultar los datos del formulario
		e.preventDefault();
		const datosFormulario = new FormData(datForm.current); // Pasar de HTML a objeto iterable
		const cliente = Object.fromEntries(datosFormulario); // Pasa de objeto iterable a uno simple

		if (cliente.email !== cliente.emailRepetido) {
			toast.error(
				`Los emails no coinciden.`,
				{
					position: "top-center",
					icon: "⚠️",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				}
			);
      return false;
		}

		const aux = [...carrito];
		//Recorrer y descontar stock
		aux.forEach((prodCarrito) => {
			getProduct(prodCarrito.id).then((prodDB) => {
				if (prodDB.stock >= prodCarrito.quantity) {
					prodDB.stock -= prodCarrito.quantity;
					updateProduct(prodCarrito.id, prodDB);
				} else {
          toast.error(
            `Sin stock disponible de ${prodDB.name}.`,
            {
              position: "top-center",
              icon: "⚠️",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
				}
			});
		});

		createOrdenCompra(
			cliente,
			totalPrice(),
			aux.map((prod) => ({
				id: prod.id,
				quantity: prod.quantity,
				precio: prod.precio,
			})),
			new Date().toISOString()
		)
			.then((ordenCompra) => {
				toast.success(
					`Muchas gracias por comprar en HPDevs E-Commerce. Su numero de compra es ${
						ordenCompra.id
					} por un total de $${totalPrice().toLocaleString(
						"es-AR"
					)}, en breve vamos a enviarle un correo con los detalles del envio`,
					{
						position: "top-center",
						icon: "🛍",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark",
					}
				);
				emptyCart();
				e.target.reset();
				navigate("/");
			})
			.catch((error) => {
				console.error(error);
        toast.error(
          `Hubo un error. ${error}`,
          {
            position: "top-center",
            icon: "⚠️",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
			});
	};

	return (
		<>
			{carrito.length === 0 ? (
				<>
					<h2>Para finalizar la compra, debe tener algo en el carrito</h2>
					<Link className="nav-link" to={"/"}>
						<button className="btn btn-info">Continuar comprando</button>
					</Link>
				</>
			) : (
				<div className="container divForm">
					<form onSubmit={consultarForm} ref={datForm}>
						<div className="mb-3">
							<label htmlFor="nombre" className="form-label">
								Nombre y Apellido
							</label>
							<input
								type="text"
								className="form-control"
								name="nombre"
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="email" className="form-label">
								Email
							</label>
							<input
								type="email"
								className="form-control"
								name="email"
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="emailRepetido" className="form-label">
								Repetir email
							</label>
							<input
								type="email"
								className="form-control"
								name="emailRepetido"
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="dni" className="form-label">
								DNI
							</label>
							<input
								type="number"
								className="form-control"
								name="dni"
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="celular" className="form-label">
								Telefono
							</label>
							<input
								type="number"
								className="form-control"
								name="celular"
								required
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="direccion" className="form-label">
								Dirección
							</label>
							<input
								type="text"
								className="form-control"
								name="direccion"
								required
							/>
						</div>
						<button type="submit" className="btn btn-primary">
							Finalizar compra
						</button>
					</form>
				</div>
			)}
		</>
	);
};
