import { useDarkModeContext } from "../../../context/DarkModeContext";
export const BotonDarkMode = () => {
    const {toggleDarkMode} = useDarkModeContext();
    return (
        <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox" />

            <input type="checkbox" onInput={() => toggleDarkMode()} />
                <div className="slider round" />
        </div>
    )
}