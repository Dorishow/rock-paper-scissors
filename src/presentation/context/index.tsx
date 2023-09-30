import { ReactNode } from "react";
import ThemeProvider from "./theme";
import GameProvider from "./game";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider>
      <GameProvider>{children}</GameProvider>
    </ThemeProvider>
  );
};

export default Providers;
