import { useState, useContext, createContext } from "react"

const DarkModeContext = createContext(); // Creo el contexto

export const useDarkModeContext = () => useContext(DarkModeContext);

export const DarkModeProvider = (props) => { // Como generar el contexto en la app, se pueden enviar props
    const [darkMode, setDarkMode] = useState(false); // Consultar local storage cuando se tenga

    //Funciones para cambiar state
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if(!darkMode){
            document.body.classList.add('darkMode');
        } else {
            document.body.classList.remove('darkMode');
        }
    }

        // Agrego que funciones y valores van a ser exportados
    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )

}