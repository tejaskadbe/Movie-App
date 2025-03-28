import { ThemeProvider, CreateTheme, createTheme } from "@mui/material/styles";
import { createContext, useState, useMemo } from "react";



//createContext is a utility function so we can import it from react
export const ColorModeContext = createContext();

//children is a default prop which you will get from react functions/components

const ToggleColorMode = ({ children }) => {

    const [mode, setMode] = useState('light');

    const toggleColorMode = () => {
        setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light');
    }

    //useMemo is a memoization function which memorizes value of something
    // instead of computing it and recomputes on a dependency change
    const theme = useMemo(() => createTheme({
        palette: {
            mode,
        }
    }), [mode])
    return (

        <>
        // a Provider is a built in componenet when you create a new context
            //The values provided in it can used all across application
            <ColorModeContext.Provider
                value={{ mode, setMode, toggleColorMode }}
            >
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </ColorModeContext.Provider>
        </>
    )
}
export default ToggleColorMode;