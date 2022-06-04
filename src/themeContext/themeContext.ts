import React, {createContext} from 'react';
import {Theme} from './types';

type ThemeContextProps = {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export const themeContext = createContext<ThemeContextProps>({} as ThemeContextProps);