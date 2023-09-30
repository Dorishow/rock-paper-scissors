import ReactDOM from "react-dom/client";
import Router from "./routes/router";
import "@presentation/styles/index.less";
import Providers from "./context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Providers>
    <Router />
  </Providers>
);
