import { createContext, ReactNode, useContext, useMemo, useState } from "react";

interface Props {
  children: ReactNode;
}

interface ContextValue {
  changeTheme: () => void;
  isDarkTheme: boolean;
}

const ThemeContext = createContext({} as ContextValue);

const ThemeProvider = ({ children }: Props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const switchTheme = (theme: string) => {
    const html = document.querySelector("html");
    if (html) {
      html.dataset.theme = `theme-${theme}`;
    }
  };
  const changeTheme = () => {
    const html = document.querySelector("html");
    if (
      (html && html.dataset.theme == "theme-light") ||
      html?.dataset.theme === undefined
    ) {
      setIsDarkTheme(true);
      switchTheme("dark");
    } else {
      setIsDarkTheme(false);
      switchTheme("light");
    }
  };

  const providerValue = useMemo(() => ({ changeTheme }), []);
  return (
    <ThemeContext.Provider value={{ ...providerValue, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
export const useTheme = () => useContext(ThemeContext);
