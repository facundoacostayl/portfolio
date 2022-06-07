import { themeContext } from './themeContext';
import { useState, useContext } from 'react';
import { Theme } from './types';

type Props = {
    children: JSX.Element | JSX.Element[];
}

export const useTheme = () => {
    return useContext(themeContext);
}

export const ThemeProvider = ({children}: Props) => {

    const [theme, setTheme] = useState<Theme>(() => localStorage.getItem("theme") as Theme);

    const value = {
        theme,
        setTheme
    }

    return (
        <themeContext.Provider value={value}>
            {children}
        </themeContext.Provider>
    )
}
