import {LanguageContext} from './languageContext';
import {useContext, useState} from 'react';
import {Language} from './types';

type Props = {
    children: JSX.Element | JSX.Element[];
}

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({children}: Props) => {

    const languageStorage = localStorage.getItem("language");

    const [language, setLanguage] = useState<Language>(() =>
      languageStorage ? languageStorage as Language : Language.english
    );

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
