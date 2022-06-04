import {createContext} from 'react';
import {Language} from './types'

type LanguageContextProps = {
    language: Language,
    setLanguage: React.Dispatch<React.SetStateAction<Language>>
}

export const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps);