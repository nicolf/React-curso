import './App.css';
import { ItemCount } from './ItemCount/ItemCount.jsx'
import NavBar from './NavBar/NavBar.jsx'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  /*
    HTML      JSX
    class -> className
    <input> -> <input />
    `${valor}` -> {valor}
    style = "nombreProp: valor" -> style= {{"nombreProp": "valor"}}
    mayor parte de las propiedades -> camelCase
  */  
 // AQUI IRIAN LOS HOOKS
  return (
    <div className="divGeneral" style={{color: 'blue'}}>
      <NavBar/>
      <ItemListContainer greeting={"¡Bienvenido!"}/>
      <ItemCount/>
    </div>
  );
}

export default App;