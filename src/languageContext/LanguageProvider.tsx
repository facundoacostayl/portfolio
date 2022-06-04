import {LanguageContext} from './languageContext';
import {useContext, useState} from 'react';
import {Language} from './types';

type Props = {
    children: JSX.Element | JSX.Element[];
}

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({children}: Props) => {

    const [language, setLanguage] = useState<Language>(Language.english);

    const value = {
        language,
        setLanguage
    }

  return (
    <LanguageContext.Provider value={value}>
        {children}
    </LanguageContext.Provider>
  )
}
