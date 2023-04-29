import { useRef } from "react"
import { useCarritoContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
export const Checkout = () => {

  const datForm = useRef() // Crea una referencia para consultar los valores actuales del formulario
    const {carrito } = useCarritoContext()

  const consultarForm = (e) => {
    //Consultar los datos del formulario
    e.preventDefault()
    const datosFormulario = new FormData(datForm.current) // Pasar de HTML a objeto iterable
    const cliente = Object.fromEntries(datosFormulario) // Pasa de objeto iterable a uno simple
    console.log(cliente)
    e.target.reset()
  }

    return (
        <>
        {carrito.length === 0 ? 
        <>
            <h2>Para finalizar la compra, debe tener algo en el carrito</h2>
            <Link className="nav-link" to={"/"}><button className="btn btn-info">Continuar comprando</button></Link>
        </>
        :
            <div className="container divForm">
                <form onSubmit={consultarForm} ref={datForm}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                        <input type="text" className="form-control" name="nombre" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailRepetido" className="form-label">Repetir email</label>
                        <input type="email" className="form-control" name="emailRepetido" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dni" className="form-label">DNI</label>
                        <input type="number" className="form-control" name="dni" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="celular" className="form-label">Telefono</label>
                        <input type="number" className="form-control" name="celular" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="direccion" className="form-label">Dirección</label>
                        <input type="text" className="form-control" name="direccion" />
                    </div>
                    <button type="submit" className="btn btn-primary">Finalizar compra</button>
                </form>
            </div>

        
        }
        </>
  )
}
