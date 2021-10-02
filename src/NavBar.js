import {Link} from 'react-router-dom';
import { useState } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Themes";

const NavBar = () => {

    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
        <GlobalStyles/>
            <nav className="navbar">
                <h1>RehabTime</h1>
                    <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/contact">Contacto</Link>
                        <Link to="/search">Buscar</Link>
                        <Link to="/create" style={ {
                            color: "white",
                            backgroundColor: '#00013a',
                            borderRadius: '8px'
                        } }>Crear</Link>
                        <button onClick={themeToggler}style={ {
                            color: "white",
                            backgroundColor: '#414141',
                            margin: '20px',
                            borderRadius: '8px'
                        } }>Noche</button>
                    </div>
            </nav>
        </>
        </ThemeProvider>
    );
}
 
export default NavBar;