import { ReactNode } from "react";
import ThemeProvider from "./theme";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
