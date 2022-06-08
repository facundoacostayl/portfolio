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

    const themeStorage = localStorage.getItem("theme");

    const [theme, setTheme] = useState<Theme>(() =>
     themeStorage ? themeStorage as Theme : Theme.dark);

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
