//ICONS
import { useEffect } from "react";
import { FontAwesomeIcon, faMoon, faSun, faBars } from "../icon";

//COMPONENTS
import { ThemeToggle } from "../themeToggle";
import { LanguageSelector } from "../languageSelector";

//Types
import { Theme } from "../../themeContext/types";

type Props = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  isMenuActive: boolean;
  setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Navbar = ({
  isMenuActive,
  setIsMenuActive,
  theme,
  setTheme,
}: Props) => {
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const toggleTheme = () => {
    setTheme((theme) => (theme === Theme.dark ? Theme.light : Theme.dark));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={`${isMenuActive && "hidden"}`}>
      <div className="nav-container">
        <div className="">
          <FontAwesomeIcon
            onClick={() => toggleMenu()}
            className="icon"
            icon={faBars}
          ></FontAwesomeIcon>
        </div>
        <div className="nav-right">
          <LanguageSelector />
          <ThemeToggle
            onToggle={() => toggleTheme()}
            theme={theme == Theme.light ? "light" : "dark"}
          />
        </div>
      </div>
    </nav>
  );
};
